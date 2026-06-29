import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Flame, Award } from "lucide-react";

type RegionKey = "phoenix" | "san-diego";

const WOOD_FIRE_FORM: Record<RegionKey, string> = {
  phoenix: "https://fs17.formsite.com/matthews3404/BBQDADDYLLC/index",
  "san-diego": "https://fs17.formsite.com/matthews3404/SanDiego/index",
};

const STEAK_MENU: Record<RegionKey, string> = {
  phoenix: "/steak-seafood-menu",
  "san-diego": "/steak-seafood-menu-san-diego",
};

const WOOD_PRICING: Record<RegionKey, { name: string; price: string; desc: string }[]> = {
  phoenix: [
    { name: "1-Meat Package", price: "$12.99", desc: "One signature wood-fired protein, two gourmet sides, fresh rolls and house sauces." },
    { name: "2-Meat Package", price: "$17.99", desc: "Two signature proteins, two gourmet sides, rolls and house sauces. Our most-booked package." },
    { name: "3-Meat Package", price: "$25.99", desc: "Three signature proteins, three gourmet sides, rolls and full sauce flight. Built for a feast." },
  ],
  "san-diego": [
    { name: "1-Meat Package", price: "$15.99", desc: "One signature wood-fired protein, two gourmet sides, fresh rolls and house sauces." },
    { name: "2-Meat Package", price: "$21.99", desc: "Two signature proteins, two gourmet sides, rolls and house sauces. Our most-booked package." },
    { name: "3-Meat Package", price: "$33.99", desc: "Three signature proteins, three gourmet sides, rolls and full sauce flight. Built for a feast." },
  ],
};

const STEAK_PRICING: Record<RegionKey, { name: string; price: string; desc: string }[]> = {
  phoenix: [
    { name: "Full-Service Buffet", price: "$74", desc: "Five-course steakhouse experience, live charcoal grilling, professional staff, full setup & breakdown." },
    { name: "Family Style", price: "$89", desc: "Plattered tableside service. Premium proteins, gourmet sides, glassware and linens available." },
    { name: "Plated Steakhouse", price: "$128", desc: "Black-tie plated dinner. China, glassware, polished service team and white-glove presentation." },
  ],
  "san-diego": [
    { name: "Full-Service Buffet", price: "$79", desc: "Five-course steakhouse experience, live charcoal grilling, professional staff, full setup & breakdown." },
    { name: "Family Style", price: "$94", desc: "Plattered tableside service. Premium proteins, gourmet sides, glassware and linens available." },
    { name: "Plated Steakhouse", price: "$133", desc: "Black-tie plated dinner. China, glassware, polished service team and white-glove presentation." },
  ],
};

const WOOD_INCLUDES = [
  "Live-fire onsite grilling",
  "Professional service staff",
  "Setup, service & full breakdown",
  "Disposable serviceware included",
];

const STEAK_INCLUDES = [
  "Live charcoal Grill Master",
  "Premium dinnerware & flatware",
  "Cold starter + warm hors d'oeuvre",
  "Two desserts & two beverages",
];

function PricingCard({
  badge,
  name,
  price,
  desc,
  includes,
  menuHref,
  external,
}: {
  badge: string;
  name: string;
  price: string;
  desc: string;
  includes: string[];
  menuHref: string;
  external?: boolean;
}) {
  return (
    <div className="bg-onyx border border-gold/20 p-8 lg:p-10 flex flex-col hover:border-gold/50 transition-colors">
      <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-4">{badge}</div>
      <div className="font-display text-2xl lg:text-3xl text-bone mb-3">{name}</div>
      <div className="flex items-baseline gap-2 mb-5">
        <span className="font-display text-5xl lg:text-6xl text-gold font-light">{price}</span>
        <span className="text-sm text-bone/60 tracking-wide">/ guest</span>
      </div>
      <p className="text-bone/75 leading-relaxed mb-6 text-sm">{desc}</p>
      <ul className="space-y-2 mb-8">
        {includes.map((i) => (
          <li key={i} className="flex gap-2.5 text-sm text-bone/85">
            <Check className="size-4 text-gold shrink-0 mt-0.5" /> {i}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2.5">
        {external ? (
          <a href={menuHref} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-center">
            View Menu <ArrowRight className="size-4" />
          </a>
        ) : (
          <Link to={menuHref} className="btn-ghost w-full justify-center">
            View Menu <ArrowRight className="size-4" />
          </Link>
        )}
        <Link to="/quote" className="btn-primary w-full justify-center">
          Request Quote
        </Link>
      </div>
    </div>
  );
}

export function PricingHero({ regionKey }: { regionKey: RegionKey }) {
  const regionName = regionKey === "phoenix" ? "Phoenix Metro" : "San Diego County";
  const woodTiers = WOOD_PRICING[regionKey];
  const steakTiers = STEAK_PRICING[regionKey];
  const woodMenu = WOOD_FIRE_FORM[regionKey];
  const steakMenu = STEAK_MENU[regionKey];

  return (
    <section className="py-16 lg:py-24 bg-ink border-b border-white/5">
      <div className="container-luxe">
        {/* WOOD-FIRED */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <div className="eyebrow justify-center mb-4 text-gold">
              <Flame className="size-4" /> Wood-Fired Catering · {regionName}
            </div>
            <h2 className="heading-md text-bone">
              Transparent pricing. <span className="italic text-gold font-light">No surprises.</span>
            </h2>
            <p className="mt-4 text-bone/70 leading-relaxed">
              All-inclusive per-guest pricing. Live onsite grilling, professional staff, full setup and breakdown included.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {woodTiers.map((t) => (
              <PricingCard
                key={t.name}
                badge="Wood-Fired"
                name={t.name}
                price={t.price}
                desc={t.desc}
                includes={WOOD_INCLUDES}
                menuHref={woodMenu}
                external
              />
            ))}
          </div>
        </div>

        {/* STEAKHOUSE */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <div className="eyebrow justify-center mb-4 text-gold">
              <Award className="size-4" /> Signature Live Fire Steakhouse · {regionName}
            </div>
            <h2 className="heading-md text-bone">
              Five-course steakhouse experience, <span className="italic text-gold font-light">priced clearly.</span>
            </h2>
            <p className="mt-4 text-bone/70 leading-relaxed">
              Premium proteins, hors d'oeuvres, gourmet sides, dessert and beverages — all charcoal-grilled onsite.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {steakTiers.map((t) => (
              <PricingCard
                key={t.name}
                badge="Steakhouse"
                name={t.name}
                price={t.price}
                desc={t.desc}
                includes={STEAK_INCLUDES}
                menuHref={steakMenu}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
