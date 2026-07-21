import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  guests: z.string().trim().max(10).optional().or(z.literal("")),
  region: z.string().trim().max(60).optional().or(z.literal("")),
  type: z.string().trim().max(60).optional().or(z.literal("")),
  menu: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  source: z.string().trim().max(120).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof LeadSchema>;

const SENDER_DOMAIN = "notify.qfirecatering.com";
const FROM_DOMAIN = "qfirecatering.com";
const FROM_ADDRESS = `Qfire Catering Website <quotes@${FROM_DOMAIN}>`;
const OWNER_INBOX = "Eat@QfireCatering.com";
const TEMPLATE_NAME = "quote-lead-notification";

/**
 * Submit a quote/contact lead. Server-side validated, logged to runtime logs,
 * and sent to the owner inbox via the Lovable Emails queue.
 */
export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const submittedAt = new Date().toISOString();
    console.log(
      JSON.stringify({ event: "qfire.lead", at: submittedAt, ...data }),
    );

    try {
      const [{ createClient }, React, { render }, registry] = await Promise.all([
        import("@supabase/supabase-js"),
        import("react"),
        import("@react-email/render"),
        import("./email-templates/registry"),
      ]);

      const supabaseUrl =
        import.meta.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL;
      const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
      if (!supabaseUrl || !serviceKey) {
        console.error("qfire.lead.email.missing_env");
        return { ok: true as const, receivedAt: submittedAt, emailed: false };
      }

      const entry = registry.TEMPLATES[TEMPLATE_NAME];
      if (!entry) {
        console.error("qfire.lead.email.template_missing");
        return { ok: true as const, receivedAt: submittedAt, emailed: false };
      }

      const textRows = [
        ["Name", data.name],
        ["Email", data.email],
        ["Cell Phone", data.phone],
        ["Event Date", data.date],
        ["Guests", data.guests],
        ["Region", data.region],
        ["Event Type", data.type],
        ["Menu Interest", data.menu],
        ["Message", data.message],
        ["Source", data.source || "quote"],
        ["Submitted", submittedAt],
      ]
        .filter(([, value]) => typeof value === "string" && value.trim().length > 0)
        .map(([label, value]) => `${label}: ${value}`);

      const makeToken = () => {
        const bytes = new Uint8Array(32);
        crypto.getRandomValues(bytes);
        return Array.from(bytes)
          .map((byte) => byte.toString(16).padStart(2, "0"))
          .join("");
      };

      const templateData = { ...data, submittedAt };
      const html = await render(
        React.createElement(entry.component, templateData),
      );
      const subject =
        typeof entry.subject === "function"
          ? entry.subject(templateData)
          : entry.subject;
      const text = [`New Quote Request — Qfire Catering`, "", ...textRows].join("\n");
      const recipient = entry.to ?? OWNER_INBOX;
      const messageId = crypto.randomUUID();

      const supabase = createClient(supabaseUrl, serviceKey);
      const normalizedRecipient = recipient.toLowerCase();
      const { data: existingToken, error: tokenLookupError } = await supabase
        .from("email_unsubscribe_tokens")
        .select("token, used_at")
        .eq("email", normalizedRecipient)
        .maybeSingle();

      if (tokenLookupError) {
        console.error("qfire.lead.email.token_lookup_failed", tokenLookupError);
        return { ok: true as const, receivedAt: submittedAt, emailed: false };
      }

      let unsubscribeToken = existingToken?.used_at ? null : existingToken?.token;
      if (!unsubscribeToken) {
        const newToken = makeToken();
        const { error: tokenCreateError } = await supabase
          .from("email_unsubscribe_tokens")
          .upsert(
            { token: newToken, email: normalizedRecipient },
            { onConflict: "email", ignoreDuplicates: true },
          );

        if (tokenCreateError) {
          console.error("qfire.lead.email.token_create_failed", tokenCreateError);
          return { ok: true as const, receivedAt: submittedAt, emailed: false };
        }

        const { data: storedToken, error: tokenReadError } = await supabase
          .from("email_unsubscribe_tokens")
          .select("token")
          .eq("email", normalizedRecipient)
          .maybeSingle();

        if (tokenReadError || !storedToken) {
          console.error("qfire.lead.email.token_read_failed", tokenReadError);
          return { ok: true as const, receivedAt: submittedAt, emailed: false };
        }

        unsubscribeToken = storedToken.token;
      }

      const { error } = await supabase.rpc("enqueue_email", {
        queue_name: "transactional_emails",
        payload: {
          message_id: messageId,
          idempotency_key: `quote-lead-${messageId}`,
          to: recipient,
          from: FROM_ADDRESS,
          sender_domain: SENDER_DOMAIN,
          subject,
          html,
          text,
          purpose: "transactional",
          label: TEMPLATE_NAME,
          unsubscribe_token: unsubscribeToken,
          queued_at: submittedAt,
        },
      });

      if (error) {
        console.error("qfire.lead.email.enqueue_failed", error);
        return { ok: true as const, receivedAt: submittedAt, emailed: false };
      }

      return { ok: true as const, receivedAt: submittedAt, emailed: true };
    } catch (err) {
      console.error("qfire.lead.email.exception", err);
      return { ok: true as const, receivedAt: submittedAt, emailed: false };
    }
  });
