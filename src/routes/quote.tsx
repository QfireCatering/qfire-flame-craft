import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import meatPageBg from "@/assets/meat-page-bg.png.asset.json";
import { submitLead } from "@/lib/leads.functions";
import { contact } from "@/lib/contact";
import { BookingProcess } from "@/components/site/BookingProcess";

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>) => ({
    date: typeof search.date === "string" ? search.date : "",
  }),
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
        content: "Custom proposal within 24 hours. Wood-fired + Steakhouse Experience.",
      },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/quote" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/quote" }],
  }),
  component: QuotePage,
});

function getRedirectUrl(region: string, menu: string): string | null {
  const isPhx = region === "Arizona";
  const isSD = region === "San Diego County";
  const isBBQ = menu === "Wood-Fired Catering";
  const isSteak = menu === "Steakhouse Experience" || menu === "Steakhouse Experience";
  if (isPhx && isBBQ) return "https://fs17.formsite.com/matthews3404/BBQDADDYLLC/index";
  if (isSD && isBBQ) return "https://fs17.formsite.com/matthews3404/SanDiego/index";
  if (isPhx && isSteak) return "/steak-seafood-menu";
  if (isSD && isSteak) return "/steak-seafood-menu-san-diego";
  return null;
}

function QuotePage() {
  const { date: prefilledDate } = Route.useSearch();
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [step1, setStep1] = useState({
    name: "",
    email: "",
    date: prefilledDate ?? "",
  });
  const submit = useServerFn(submitLead);
  const step1Ready = step1.name.trim().length > 1 && /.+@.+\..+/.test(step1.email) && step1.date.length > 0;

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
    <>
    <div className="min-h-screen grid lg:grid-cols-[1.1fr_1fr] relative">
      <div className="absolute inset-0 z-0">
        <img src={meatPageBg.url} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/90" />
      </div>
      <div className="relative z-10 hidden lg:block">
        <div className="absolute inset-0 flex items-start p-16 pt-20">
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

      <div className="relative z-10 flex items-center justify-center p-8 lg:p-16 pt-32 lg:pt-16">
        <div className="w-full max-w-2xl mt-10">
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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6 text-center">
                <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 text-gold font-bold text-lg hover:underline">
                  <Phone className="size-5" /> {contact.phone}
                </a>
                <a href={contact.emailHref} className="inline-flex items-center justify-center gap-2 text-gold font-bold text-base hover:underline break-all">
                  <Mail className="size-5" /> {contact.email}
                </a>
              </div>
              <p className="text-center text-[0.7rem] tracking-[0.25em] uppercase text-gold/90">
                ⏱ Usually responds within 4 business hours
              </p>

              {/* STEP 1 — 3-field quick start */}
              <div className="border-2 border-gold/40 bg-gold/[0.04] p-5 lg:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-1">Step 1 of 2 · Takes 30 seconds</div>
                    <div className="text-bone font-display text-xl leading-tight">Check my date &amp; start my quote</div>
                  </div>
                </div>
                <div>
                  <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-white mb-2">First and Last Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={120}
                    value={step1.name}
                    onChange={(e) => setStep1((s) => ({ ...s, name: e.target.value }))}
                    className="w-full bg-charcoal/60 border border-white/15 px-4 py-3 text-bone focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-white mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={255}
                      value={step1.email}
                      onChange={(e) => setStep1((s) => ({ ...s, email: e.target.value }))}
                      className="w-full bg-charcoal/60 border border-white/15 px-4 py-3 text-bone focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-white mb-2">Cell Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={40}
                      className="w-full bg-charcoal/60 border border-white/15 px-4 py-3 text-bone focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[0.6rem] tracking-[0.25em] uppercase text-white mb-2">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={step1.date}
                    onChange={(e) => setStep1((s) => ({ ...s, date: e.target.value }))}
                    className="w-full bg-charcoal/60 border border-white/15 px-4 py-3 text-bone focus:border-gold focus:outline-none"
                  />
                </div>
                {!expanded && (
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    disabled={!step1Ready}
                    className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Check My Date &amp; Continue <ArrowRight className="size-4" />
                  </button>
                )}
                {!expanded && !step1Ready && (
                  <p className="text-xs text-bone/60 text-center">Fill the fields above to continue — no commitment.</p>
                )}
              </div>

              {expanded && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold text-center pt-2">Step 2 of 2 · A few more details for your custom proposal</div>
                  <Field label="Approx Guest Count" name="guests" type="number" />
                  <SelectField
                    label="Region"
                    name="region"
                    options={["Arizona", "San Diego County", "Destination / Other"]}
                  />
                  <SelectField
                    label="Menu Interest"
                    name="menu"
                    options={["Wood-Fired Catering", "Steakhouse Experience", "Not sure yet"]}
                  />
                  <div>
                    <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-white mb-3">
                      Leave a message
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
                    {state === "sending" ? "Sending…" : "Request My Custom Proposal"}{" "}
                    <ArrowRight className="size-4" />
                  </button>
                  <p className="text-sm text-bone font-bold text-center">
                    Feel free to call RIGHT NOW, for faster service{" "}
                    <a href={contact.phoneHref} className="text-gold">
                      {contact.phone}
                    </a>
                  </p>
                </div>
              )}
            </form>

          )}
        </div>
      </div>
    </div>
    <BookingProcess
      eyebrow="What Happens Next"
      title="Your quote — step by step."
      variant="onyx"
    />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  maxLength,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-white mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        defaultValue={defaultValue}
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
      <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-white mb-3">
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
