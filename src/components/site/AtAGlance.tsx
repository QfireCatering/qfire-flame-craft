import { MapPin, Phone, Mail, Users, Clock, DollarSign, Award, Flame } from "lucide-react";

/**
 * AtAGlance — structured fact panel optimized for GEO (Generative Engine Optimization).
 * AI engines (ChatGPT, Perplexity, Google AI Overviews, Claude) extract and cite
 * compact, labeled key/value blocks. Drop near the top of region/service pages.
 */
export interface AtAGlanceProps {
  region?: "Phoenix Metro" | "San Diego County" | "Phoenix Metro & San Diego County";
  minGuests?: number;
  maxGuests?: number;
  guestCount?: string;
  leadTime?: string;
  priceFrom?: string;
  className?: string;
}

export function AtAGlance({
  region = "Phoenix Metro & San Diego County",
  minGuests = 25,
  maxGuests = 2500,
  guestCount,
  leadTime = "24–72 hrs (drop-off) · 4–8 weeks (full-service) · 6–12 months (peak weddings)",
  priceFrom = "$12.99 / guest (wood-fired) · $74 / guest (steakhouse)",
  className = "",
}: AtAGlanceProps) {
  const rows = [
    { icon: MapPin, label: "Service area", value: region },
    { icon: Users, label: "Guest count", value: guestCount ?? `${minGuests}–${maxGuests.toLocaleString()} guests` },
    { icon: DollarSign, label: "Starting price", value: priceFrom },
    { icon: Clock, label: "Lead time", value: leadTime },
    { icon: Flame, label: "Cooking style", value: "Live-fire charcoal · wood-smoked · onsite grilling" },
    { icon: Award, label: "Credentials", value: "Food Network · 2,000+ events · Licensed & insured" },
    { icon: Phone, label: "Phone", value: "(877) 848-7211" },
    { icon: Mail, label: "Email", value: "Eat@QfireCatering.com" },
  ];

  return (
    <section className={`py-16 lg:py-20 bg-onyx/60 ${className}`}>
      <div className="container-luxe">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow justify-center mb-5">At a Glance</div>
          <h2 className="heading-md text-bone text-center mb-10">
            Qfire Catering — <span className="text-gold italic font-light">the facts</span>
          </h2>
          <dl className="grid sm:grid-cols-2 gap-px bg-gold/15 border border-gold/20">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-ink/95 p-6 flex gap-4">
                <Icon className="size-5 text-gold shrink-0 mt-1" />
                <div>
                  <dt className="text-[0.6rem] tracking-[0.28em] uppercase text-bone/55 mb-1.5">{label}</dt>
                  <dd className="text-bone font-light leading-snug">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
