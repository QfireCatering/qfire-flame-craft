import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import heroFireAsset from "@/assets/hero-fire.jpg.asset.json";
const heroFire = heroFireAsset.url;

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Qfire Catering" },
      { name: "description", content: "Request a custom catering proposal from Qfire. We respond within 24 hours." },
      { property: "og:title", content: "Request a Quote — Qfire" },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  const [sent, setSent] = useState(false);

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
              {["Custom proposal within 24 hours", "Free phone consultation", "Tastings for booked clients"].map(t => (
                <div key={t} className="flex items-center gap-3"><Check className="size-4 text-gold" /> {t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ink flex items-center pt-32 lg:pt-0 pb-20 px-6 lg:px-16">
        <div className="w-full max-w-xl mx-auto">
          <div className="lg:hidden mb-10">
            <div className="eyebrow mb-6">Request a Quote</div>
            <h1 className="heading-lg text-bone">Tell us about your event.</h1>
          </div>

          {sent ? (
            <div className="border border-gold/40 p-10 text-center">
              <div className="text-gold text-5xl font-display mb-4">Thank you.</div>
              <p className="text-bone/70 text-lg">Chef Terry's team will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-6"
            >
              <Field label="Your Name" name="name" required />
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Event Date" name="date" type="date" />
                <Field label="Guest Count" name="guests" type="number" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <SelectField label="Region" name="region" options={["Phoenix Metro", "San Diego County", "Destination / Other"]} />
                <SelectField label="Event Type" name="type" options={["Wedding", "Corporate", "Private Party", "Private Chef", "Other"]} />
              </div>
              <SelectField label="Menu Interest" name="menu" options={["Wood-Fired", "Steakhouse", "Mix of Both", "Not sure yet"]} />
              <div>
                <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-bone/60 mb-3">Tell us about your event</label>
                <textarea name="message" rows={5} className="w-full bg-charcoal/40 border border-white/10 px-4 py-4 text-bone focus:border-gold focus:outline-none transition-colors resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Inquiry <ArrowRight className="size-4" />
              </button>
              <p className="text-xs text-muted-foreground text-center">We respond personally within 24 hours.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-bone/60 mb-3">{label}</label>
      <input type={type} name={name} required={required} className="w-full bg-charcoal/40 border border-white/10 px-4 py-3.5 text-bone focus:border-gold focus:outline-none transition-colors" />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-bone/60 mb-3">{label}</label>
      <select name={name} className="w-full bg-charcoal/40 border border-white/10 px-4 py-3.5 text-bone focus:border-gold focus:outline-none transition-colors">
        <option value="">Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
