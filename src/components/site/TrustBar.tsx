import { Tv, Flame, Trophy, Users, DollarSign, CalendarDays, Star, ShieldCheck, Sparkles, Utensils, ChefHat, Award } from "lucide-react";
import asSeenOnBadge from "@/assets/as-seen-on-food-network.png.asset.json";

/**
 * Universal Trust Bar — premium, icon-driven, schema-friendly.
 * Variants:
 *  - "compact" : 4-up icon row, drops into any page after the hero.
 *  - "full"    : 12-card credibility grid for deeper service pages.
 */
export interface TrustBarProps {
  variant?: "compact" | "full";
  eyebrow?: string;
  title?: string;
  className?: string;
}

const COMPACT = [
  { icon: Tv, label: "Featured on Food Network", sub: "BBQ Brawl · Bobby Flay" },
  { icon: Trophy, label: "Cutthroat Kitchen Champion", sub: "Camp Cutthroat finalist" },
  { icon: Users, label: "2,000+ Events Catered", sub: "Weddings · Corporate · Private" },
  { icon: Star, label: "4.9★ Client Rated", sub: "Hundreds of verified reviews" },
];

const FULL = [
  { icon: Tv, label: "Featured on Food Network", sub: "National television features" },
  { icon: ChefHat, label: "Cooked Alongside Bobby Flay", sub: "BBQ Brawl, Season 2" },
  { icon: Trophy, label: "Cutthroat Kitchen Champion", sub: "Food Network winner" },
  { icon: Award, label: "Camp Cutthroat Champion", sub: "Food Network competitor" },
  { icon: Users, label: "2,000+ Weddings & Events", sub: "Catered across two regions" },
  { icon: DollarSign, label: "$10M+ in Catered Events", sub: "Trusted at every scale" },
  { icon: CalendarDays, label: "Serving AZ & SoCal Since 2012", sub: "13+ years behind the fire" },
  { icon: Star, label: "4.9-Star Rated", sub: "Across hundreds of reviews" },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "COI-ready · venue-approved" },
  { icon: Sparkles, label: "Uniformed Professional Staff", sub: "Captains · servers · bartenders" },
  { icon: Utensils, label: "Full Setup, Service & Cleanup", sub: "Premium dinnerware available" },
  { icon: Flame, label: "On-Site Charcoal & Wood-Fire Grilling", sub: "Live-fire stations at your venue" },
];

export function TrustBar({
  variant = "compact",
  eyebrow = "Trusted. Awarded. Proven.",
  title,
  className = "",
}: TrustBarProps) {
  if (variant === "compact") {
    return (
      <section className={`border-y border-white/10 bg-onyx py-12 lg:py-14 ${className}`}>
        <div className="container-luxe">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={asSeenOnBadge.url} alt="As seen on Food Network" className="w-12 h-12 rounded-full" />
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-gold">{eyebrow}</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {COMPACT.map((it) => (
              <div key={it.label} className="bg-ink px-6 py-7 text-center">
                <it.icon className="size-6 mx-auto text-gold mb-3" strokeWidth={1.3} />
                <div className="text-bone font-display text-base leading-snug">{it.label}</div>
                <div className="text-xs text-bone/55 mt-1.5">{it.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 lg:py-24 bg-onyx border-y border-white/10 ${className}`}>
      <div className="container-luxe">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-5">{eyebrow}</div>
          {title && <h2 className="heading-md text-bone">{title}</h2>}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {FULL.map((it) => (
            <div key={it.label} className="bg-ink px-6 py-8 flex flex-col items-start">
              <it.icon className="size-6 text-gold mb-4" strokeWidth={1.3} />
              <div className="text-bone font-display text-base leading-snug">{it.label}</div>
              <div className="text-xs text-bone/55 mt-2 leading-relaxed">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
