import { ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

/**
 * ObjectionBuster — pre-empts the silent hesitations that kill quote requests.
 * Different from a generic FAQ: every Q is a real reason brides / planners /
 * party hosts abandon catering inquiries. Keep answers short, direct, generous.
 */
export interface Objection {
  q: string;
  a: string;
}

const DEFAULT_OBJECTIONS: Objection[] = [
  {
    q: "What if my guest count changes?",
    a: "Totally normal. Your final headcount locks in the week of your event — add or reduce within reason without a penalty. We staff and prep to your live number, not your first guess.",
  },
  {
    q: "Are you licensed, insured, and venue-approved?",
    a: "Yes — fully licensed, fully insured, and we provide a Certificate of Insurance (COI) on request for any venue, country club, or HOA that asks.",
  },
  {
    q: "What does the deposit look like? Is it refundable?",
    a: "A 35% Date Retainer secures your event date and credits 100% toward your final invoice. If you need to reschedule due to weather or emergency, your payment holds as a credit toward one future event within a year (minimum 80% of original contracted value). No surprise fees, ever.",
  },
  {
    q: "Will there be enough food — and will it stay hot?",
    a: "We carefully calculate portions and actively manage service so every guest is fully accommodated. Professional-grade equipment and timing protocols hold optimal food quality throughout service — nothing sits in a chafer drying out.",
  },
  {
    q: "How do you keep the buffet from being picked clean by guest #50?",
    a: "Staffed service controls portion flow and balances distribution across the entire guest list. We replenish on cue so the last guest in line gets the same plate as the first.",
  },
  {
    q: "Who handles setup and cleanup?",
    a: "We do. Setup, full-service execution, breakdown, and complete cleanup are included. Our team manages every operational component so you stay fully present at your own event.",
  },
  {
    q: "What if something unexpected happens day-of?",
    a: "Thousands of events across two regions, zero missed dates. We operate with contingency planning for weather, venue changes, and last-minute scope shifts — structured processes, not improvisation.",
  },
  {
    q: "What's included — do I have to rent plates, staff, anything else?",
    a: "Our packages include uniformed chefs and servers, full setup, on-site live-fire grilling, service throughout your event, and complete cleanup. Premium dinnerware, linens, bars and rentals are optional add-ons we can coordinate for you.",
  },
  {
    q: "Will you really show up — and on time?",
    a: "Over 2,000 events catered across two regions without missing a date. Our staff arrives 2–4 hours early to set up, fire grills, and prep so your timeline runs exactly as planned.",
  },
  {
    q: "Can I customize the menu, or am I stuck with a fixed list?",
    a: "Every menu is 100% customizable. Dietary needs (gluten-free, vegan, kosher-style, allergies), regional favorites, and family recipes are all on the table. You have until 2 weeks before the event to finalize the menu and guest count.",
  },
  {
    q: "What if it rains, the venue changes, or my date moves?",
    a: "We've cooked in 110° heat, monsoons, beach winds, and backyards with no power. If your date or venue changes, we work with you to move the booking — most of the time at no additional cost.",
  },
  {
    q: "How is your price actually calculated? Will it balloon?",
    a: "Your proposal is itemized — food, staff, travel, optional rentals. The price you sign is the price you pay. The only things that change the total are guest count adjustments or items you choose to add later.",
  },
];

export function ObjectionBuster({
  eyebrow = "Before You Ask",
  title = "The questions every client wonders — answered upfront.",
  items = DEFAULT_OBJECTIONS,
  ctaLabel = "Request My Custom Quote",
}: {
  eyebrow?: string;
  title?: string;
  items?: Objection[];
  ctaLabel?: string;
}) {
  return (
    <section className="py-20 lg:py-28 bg-onyx border-y border-white/10">
      <div className="container-luxe">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-5">{eyebrow}</div>
          <h2 className="heading-md text-bone">{title}</h2>
          <p className="mt-5 text-bone/65 text-lg font-light leading-relaxed">
            We've catered over 2,000 events. These are the things our clients tell us
            kept them on the fence — and exactly how we handle each one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {items.map((o) => (
            <div key={o.q} className="bg-ink p-7 lg:p-8">
              <div className="flex items-start gap-3 mb-3">
                <ShieldCheck className="size-5 text-gold mt-1 shrink-0" strokeWidth={1.3} />
                <h3 className="text-bone font-display text-lg lg:text-xl leading-snug">{o.q}</h3>
              </div>
              <p className="text-bone/70 text-base font-light leading-relaxed pl-8">{o.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/quote" className="btn-primary">
            {ctaLabel} <ArrowRight className="size-4" />
          </Link>
          <p className="mt-4 text-bone/55 text-sm">
            Free quote · Custom proposal in 24 hours · No obligation
          </p>
        </div>
      </div>
    </section>
  );
}
