import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import heroFire from "@/assets/hero-fire-no-person.jpg";
import { submitLead } from "@/lib/leads.functions";
import { contact } from "@/lib/contact";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Qfire Catering" },
      {
        name: "description",
        content:
          "Tell us about your event. Custom catering proposal within 24 hours. Phoenix Metro & San Diego County.",
      },
      { property: "og:title", content: "Request a Quote — Qfire Catering" },
      {
        property: "og:description",
        content: "Custom proposal within 24 hours. Wood-fired Wood-Fire + steakhouse catering.",
      },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

function getRedirectUrl(region: string, menu: string): string | null {
  const isPhx = region === "Phoenix Metro";
  const isSD = region === "San Diego County";
  const isBBQ = menu === "Wood-Fired Wood-Fire";
  const isSteak = menu === "Steakhouse";
  if (isPhx && isBBQ) return "https://fs17.formsite.com/matthews3404/BBQDADDYLLC/index";
  if (isSD && isBBQ) return "https://fs17.formsite.com/matthews3404/SanDiego/index";
  if (isPhx && isSteak) return "/steak-seafood-menu";
  if (isSD && isSteak) return "/steak-seafood-menu-san-diego";
  return null;
}

function QuotePage() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const submit = useServerFn(submitLead);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      date: String(fd.get("date") ?? ""),
      guests: String(fd.get("guests") ?? ""),
      region: String(fd.get("region") ?? ""),
      type: String(fd.get("type") ?? ""),
      menu: String(fd.get("menu") ?? ""),
      message: String(fd.get("message") ?? ""),
      source: "quote",
    };
    try {
      await submit({ data: payload });
      setState("sent");
      const redirect = getRedirectUrl(payload.region, payload.menu);
      if (redirect) {
        setTimeout(() => {
          if (redirect.startsWith("http")) {
            window.location.href = redirect;
          } else {
            window.location.assign(redirect);
          }
        }, 1200);
      }
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us.");
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-[1.1fr_1fr]">
      <div className="relative hidden lg:block">
        <img src={heroFire} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-ink/80" />
        <div className="absolute inset-0 flex items-end p-16">
          <div>
            <div className="eyebrow mb-8">Request a Quote</div>
            <h1 className="heading-lg text-bone max-w-md">Tell us about your event.</h1>
            <p className="mt-6 text-bone/70 text-lg max-w-md leading-relaxed font-light">
              We answer every inquiry personally — usually within 24 hours.
            </p>
            <div className="mt-12 space-y-3 text-bone/80">
              {[
                "Custom proposal within 24 hours",
                "Free phone consultation",
                "Tastings for booked clients",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <Check className="size-4 text-gold" /> {t}
                </div>
              ))}
            </div>
            <div className="mt-12 space-y-2 text-bone/70 text-sm">
              <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-gold">
                <Phone className="size-4 text-gold" /> {contact.phone}
              </a>
              <a href={contact.emailHref} className="flex items-center gap-3 hover:text-gold">
                <Mail className="size-4 text-gold" /> {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 lg:p-16 bg-ink pt-32 lg:pt-16">
        <div className="w-full max-w-lg mt-24">
          {state === "sent" ? (
            <div className="border border-gold/40 p-10 text-center">
              <div className="text-gold text-5xl font-display mb-4">Thank you.</div>
              <p className="text-bone/70 text-lg">
                Chef Terry's team will be in touch within 24 hours. For faster
                response, call{" "}
                <a href={contact.phoneHref} className="text-gold underline-offset-4 hover:underline">
                  {contact.phone}
                </a>
                .
              </p>
              <p className="text-bone/50 text-sm mt-6">
                Redirecting you to the next step…
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <Field label="Your Name" name="name" required maxLength={120} />
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Email" name="email" type="email" required maxLength={255} />
                <Field label="Phone" name="phone" type="tel" maxLength={40} />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Event Date" name="date" type="date" />
                <Field label="Guest Count" name="guests" type="number" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <SelectField
                  label="Region"
                  name="region"
                  options={["Phoenix Metro", "San Diego County", "Destination / Other"]}
                />
                <SelectField
                  label="Event Type"
                  name="type"
                  options={["Wedding", "Corporate", "Private Party", "Other"]}
                />
              </div>
              <SelectField
                label="Menu Interest"
                name="menu"
                options={["Wood-Fired Wood-Fire", "Steakhouse", "Mix of Both", "Not sure yet"]}
              />
              <div>
                <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-bone/60 mb-3">
                  Tell us about your event
                </label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={4000}
                  className="w-full bg-charcoal/40 border border-white/10 px-4 py-4 text-bone focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>
              {state === "error" && (
                <div className="text-sm text-red-400 border border-red-500/30 px-4 py-3">
                  {error ?? "Submission failed."} Please call {contact.phone}.
                </div>
              )}
              <button
                type="submit"
                disabled={state === "sending"}
                className="btn-primary w-full disabled:opacity-60"
              >
                {state === "sending" ? "Sending…" : "Send Inquiry"}{" "}
                <ArrowRight className="size-4" />
              </button>
              <p className="text-xs text-muted-foreground text-center">
                We respond personally within 24 hours. Or call{" "}
                <a href={contact.phoneHref} className="text-gold">
                  {contact.phone}
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-bone/60 mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        className="w-full bg-charcoal/40 border border-white/10 px-4 py-3.5 text-bone focus:border-gold focus:outline-none transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-bone/60 mb-3">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-charcoal/40 border border-white/10 px-4 py-3.5 text-bone focus:border-gold focus:outline-none transition-colors"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
