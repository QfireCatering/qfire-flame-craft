import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, Clock, Shield, Flame, Users, Award, Star } from "lucide-react";
import type { ReactNode } from "react";

export interface DefinitiveContentProps {
  /** Topic label shown in eyebrows, e.g. "Phoenix Wedding Catering" */
  topic: string;
  /** Short region or audience, e.g. "Phoenix Metro" or "your event" */
  region?: string;
  /** One-paragraph "what this really is" explainer (plain language). */
  explainer: string;
  /** Supporting paragraph for the explainer (optional, deeper context). */
  explainerLong?: string;
  /** Items included in the standard package (8–12 ideal). */
  included: string[];
  /** Tips a smart buyer would want to know before booking (5–8). */
  planningTips: { title: string; body: string }[];
  /** Step-by-step booking process. */
  bookingSteps: { title: string; body: string }[];
  /** What to expect before / during / after the event. */
  expectations: { before: string[]; during: string[]; after: string[] };
  /** Differentiators — what makes Qfire different for this topic. */
  differentiators: { title: string; body: string }[];
  /** Customer confidence guarantees / reassurance. */
  confidence: { title: string; body: string }[];
  /** Extra Q&A — appended visibly under the existing FAQ. */
  extraFaqs?: { q: string; a: string }[];
  /** Optional final CTA override label. */
  ctaLabel?: string;
  /** Optional pre-FAQ child slot for page-specific embeds. */
  children?: ReactNode;
}

export function DefinitiveContent({
  topic,
  region,
  explainer,
  explainerLong,
  included,
  planningTips,
  bookingSteps,
  expectations,
  differentiators,
  confidence,
  extraFaqs,
  ctaLabel = "See If My Date Is Available",
  children,
}: DefinitiveContentProps) {
  return (
    <>
      {/* DEEP EXPLAINER */}
      <section className="py-24 lg:py-28 bg-charcoal/40 border-y border-white/5">
        <div className="container-luxe max-w-4xl">
          <div className="eyebrow mb-5">{topic} — The Complete Guide</div>
          <h2 className="heading-lg text-bone">Everything worth knowing{region ? `, for ${region}` : ""}.</h2>
          <p className="mt-8 text-bone/85 text-lg lg:text-xl leading-relaxed font-light">{explainer}</p>
          {explainerLong && (
            <p className="mt-6 text-bone/70 text-base lg:text-lg leading-relaxed font-light">{explainerLong}</p>
          )}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 lg:py-28">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-5">What's Included</div>
            <h2 className="heading-lg text-bone">Your proposal, line by line.</h2>
            <p className="mt-5 text-bone/70 font-light">No hidden fees, no surprise gratuities, no upsells the day of. Every Qfire proposal is itemized so you know exactly what your investment buys.</p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 p-5 border border-white/10 bg-onyx/60">
                <Check className="size-5 text-gold shrink-0 mt-0.5" />
                <span className="text-bone/85 leading-snug font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PLANNING TIPS */}
      <section className="py-24 lg:py-28 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-5">Planning Tips From Chef Terry</div>
            <h2 className="heading-lg text-bone">What experienced hosts get right.</h2>
            <p className="mt-5 text-bone/70 font-light">After 2,500+ events, these are the calls that consistently separate an unforgettable evening from a stressful one.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {planningTips.map((tip, i) => (
              <div key={tip.title} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 border border-gold/60 text-gold flex items-center justify-center font-display text-lg">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-xl text-bone font-display">{tip.title}</h3>
                  <p className="mt-2 text-bone/70 leading-relaxed font-light">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING PROCESS */}
      <section className="py-24 lg:py-28">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-5">The Booking Process</div>
            <h2 className="heading-lg text-bone">From first inquiry to final plate.</h2>
            <p className="mt-5 text-bone/70 font-light">A simple, transparent path designed to remove guesswork. Most clients book in under 10 days.</p>
          </div>
          <ol className="relative border-l border-gold/30 ml-3 space-y-10">
            {bookingSteps.map((step, i) => (
              <li key={step.title} className="pl-8 relative">
                <span className="absolute -left-[15px] top-1 w-7 h-7 rounded-full bg-ink border border-gold text-gold flex items-center justify-center text-xs font-display">{i + 1}</span>
                <h3 className="text-xl text-bone font-display">{step.title}</h3>
                <p className="mt-2 text-bone/75 leading-relaxed font-light max-w-2xl">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Link to="/quote" className="btn-primary">See If My Date Is Available <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* BEFORE / DURING / AFTER */}
      <section className="py-24 lg:py-28 bg-charcoal/40 border-y border-white/5">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-5">What To Expect</div>
            <h2 className="heading-lg text-bone">Before, during, and after your event.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { label: "Before", icon: <Clock className="size-5 text-gold" />, items: expectations.before },
              { label: "During", icon: <Flame className="size-5 text-gold" />, items: expectations.during },
              { label: "After", icon: <Sparkles className="size-5 text-gold" />, items: expectations.after },
            ].map((col) => (
              <div key={col.label} className="p-8 border border-white/10 bg-onyx/60">
                <div className="flex items-center gap-3 mb-5">
                  {col.icon}
                  <div className="eyebrow">{col.label}</div>
                </div>
                <ul className="space-y-3">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-3 text-bone/80 text-sm leading-relaxed font-light">
                      <span className="text-gold">→</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES QFIRE DIFFERENT */}
      <section className="py-24 lg:py-28">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-5">Why Qfire</div>
            <h2 className="heading-lg text-bone">What actually makes us different.</h2>
            <p className="mt-5 text-bone/70 font-light">A short list of things our clients tell us they couldn't find anywhere else.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="p-8 border border-gold/20 bg-onyx/60">
                <Award className="size-6 text-gold mb-4" />
                <h3 className="text-xl text-bone font-display">{d.title}</h3>
                <p className="mt-3 text-bone/75 leading-relaxed font-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER CONFIDENCE */}
      <section className="py-24 lg:py-28 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-5">Booked With Confidence</div>
            <h2 className="heading-lg text-bone">The reassurance most caterers won't put in writing.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {confidence.map((c) => (
              <div key={c.title} className="p-7 border border-white/10 bg-ink/50">
                <Shield className="size-5 text-gold mb-3" />
                <h3 className="text-lg text-bone font-display">{c.title}</h3>
                <p className="mt-2 text-bone/70 leading-relaxed font-light text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {children}

      {/* EXTRA Q&A */}
      {extraFaqs && extraFaqs.length > 0 && (
        <section className="py-24 lg:py-28">
          <div className="container-luxe">
            <div className="max-w-2xl mb-12">
              <div className="eyebrow mb-5">More Questions, Answered</div>
              <h2 className="heading-lg text-bone">A deeper knowledge base.</h2>
              <p className="mt-5 text-bone/70 font-light">The questions thoughtful clients ask once they're seriously considering booking.</p>
            </div>
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {extraFaqs.map((f, i) => (
                <details key={i} className="group py-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-8 list-none">
                    <h3 className="text-lg lg:text-xl text-bone font-display">{f.q}</h3>
                    <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45 shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-bone/75 text-base lg:text-lg leading-relaxed font-light max-w-3xl">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary">{ctaLabel} <ArrowRight className="size-4" /></Link>
              <Link to="/faq" className="btn-ghost">Full FAQ</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
