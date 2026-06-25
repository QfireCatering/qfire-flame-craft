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

/**
 * Submit a quote/contact lead. Server-side validated; logs to runtime logs so
 * the Lovable team can retrieve every lead even before email/DB is wired.
 *
 * To wire delivery, do ONE of:
 *  1) Connect the Resend connector, then add a fetch to
 *     https://connector-gateway.lovable.dev/resend/emails inside this handler.
 *  2) Enable Lovable Cloud, create a `quote_requests` table, and INSERT here
 *     using the server-side Supabase client.
 */
export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    // Always print a structured line so the lead is retrievable from server logs.
    console.log(
      JSON.stringify({ event: "qfire.lead", at: new Date().toISOString(), ...data }),
    );
    return { ok: true as const, receivedAt: new Date().toISOString() };
  });
