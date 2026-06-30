import { MessageSquare, ClipboardCheck, Utensils, CalendarCheck, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { contact } from "@/lib/contact";

/**
 * Anticipates the #1 conversion blocker: "What happens after I hit submit?"
 * Drop into any service / region / quote page to remove fear-of-the-unknown.
 */
const STEPS = [
  {
    icon: MessageSquare,
    n: "01",
    t: "You submit your request",
    b: "Takes about 60 seconds. Just the basics — date, region, guest count, vibe. No credit card, no commitment.",
  },
  {
    icon: ClipboardCheck,
    n: "02",
    t: "We reply within 24 hours",
    b: "A real human (often Chef Terry) reviews your event, confirms availability, and sends a custom proposal — not a generic price sheet.",
  },
  {
    icon: Utensils,
    n: "03",
    t: "Menu refinement",
    b: "We fine-tune flavors, courses, dietary needs and presentation. You have until 2 weeks before the event to finalize menu and guest count — no penalty for normal adjustments.",
  },
  {
    icon: CalendarCheck,
    n: "04",
    t: "Lock your date",
    b: "A 35% Date Retainer secures your event and credits 100% toward your final invoice. Rescheduling stays flexible — your deposit holds as a credit toward one future event within a year (minimum 80% of original value).",
  },
  {
    icon: Sparkles,
    n: "05",
    t: "Event day — we handle everything",
    b: "Uniformed staff arrive early, set up, fire the grills, serve your guests, and clean up. You enjoy your event. That's the whole point.",
  },
];

export function BookingProcess({
  eyebrow = "Booking Is Simple",
  title = "What happens after you request a quote.",
  variant = "ink",
}: {
  eyebrow?: string;
  title?: string;
  variant?: "ink" | "onyx";
}) {
  const bg = variant === "onyx" ? "bg-onyx" : "bg-ink";
  return (
    <section className={`py-20 lg:py-28 ${bg} border-y border-white/10`}>
      <div className="container-luxe">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-5">{eyebrow}</div>
          <h2 className="heading-md text-bone">{title}</h2>
          <p className="mt-5 text-bone/65 text-lg font-light leading-relaxed">
            No pushy sales calls. No 12-page contracts. A quote request is just a conversation —
            you can walk away at any step.
          </p>
        </div>

        <ol className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-ink p-7 lg:p-8 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <s.icon className="size-6 text-gold" strokeWidth={1.3} />
                <span className="text-gold/40 font-display text-3xl leading-none">{s.n}</span>
              </div>
              <h3 className="text-bone font-display text-lg leading-snug mb-2">{s.t}</h3>
              <p className="text-bone/60 text-sm font-light leading-relaxed">{s.b}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border border-gold/20 bg-gold/[0.04] p-6 lg:px-10">
          <div>
            <div className="text-gold text-[0.65rem] tracking-[0.3em] uppercase mb-2">Prefer to talk first?</div>
            <div className="text-bone font-display text-xl leading-snug">
              Call or text Chef Terry's team directly — quotes by phone in minutes.
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={contact.phoneHref} className="btn-ghost">{contact.phone}</a>
            <Link to="/quote" className="btn-primary">Start My Quote <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
