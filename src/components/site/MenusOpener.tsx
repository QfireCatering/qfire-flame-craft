import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import bbqPlatter1 from "@/assets/bbq-platter1.png.asset.json";
import steakhouseMenu from "@/assets/steakhouse-menu.png.asset.json";
import type { RegionKey } from "@/lib/site";
import { RegionalPricing } from "./RegionalPricing";

type PageType = "Wedding" | "Corporate" | "Private Party" | "Menu";

const COPY: Record<PageType, { eyebrow: (r: string) => string; headline: string; sub: (r: string) => string; pricingAnchor: string }> = {
  Wedding: {
    eyebrow: (r) => `${r} Wedding Catering`,
    headline: "Two ways to set the table.",
    sub: (r) => `Every Qfire wedding menu is fully customized to your day, your guests and your vision — with ${r} pricing and local service.`,
    pricingAnchor: "pricing",
  },
  Corporate: {
    eyebrow: (r) => `${r} Corporate Catering`,
    headline: "Two ways to set the table.",
    sub: (r) => `Every Qfire corporate menu is fully customized to your event, your team and your brand — with ${r} pricing and local service.`,
    pricingAnchor: "pricing",
  },
  "Private Party": {
    eyebrow: (r) => `${r} Private Party Catering`,
    headline: "Two ways to set the table.",
    sub: (r) => `Every Qfire private party menu is fully customized to your celebration, your guests and your vibe — with ${r} pricing and local service.`,
    pricingAnchor: "pricing",
  },
  Menu: {
    eyebrow: (r) => `${r} Menus`,
    headline: "Two ways to set the table.",
    sub: (r) => `Every Qfire menu is fully customized to your event, your guests and your vision — with ${r} pricing and local service.`,
    pricingAnchor: "pricing",
  },
};

const includedByPage: Record<PageType, string[]> = {
  Wedding: [
    "Custom multi-course menu designed by Chef Terry",
    "Premium proteins (Wood-Fire, Live-Fire Steakhouse, or surf & turf)",
    "Passed hors d'oeuvres + cocktail-hour stations (optional)",
    "Chef-attended live-fire grilling on-site",
    "Buffet, family-style, plated, or stationed service",
    "Salads, fresh-baked breads, sauces, and signature sides",
    "Linen-draped buffet, chafing dishes, and serving equipment",
    "Professional uniformed service staff",
    "Full setup, refresh, and breakdown",
    "Trash removal and venue walk-through at end of night",
    "Optional bar program with bartenders and glassware",
    "Optional rentals: china, flatware, linens, lounge, dance floor",
  ],
  Corporate: [
    "Custom menu built around your event type and audience",
    "Premium proteins and chef-driven plating",
    "Buffet, plated, stationed, or boxed service",
    "Fully attended service with uniformed staff",
    "Live-fire grilling for marquee events",
    "Standing dietary coverage (GF / V / Vegan / allergy)",
    "Disposable dinnerware or full china/glassware rentals",
    "Setup, refresh, and complete breakdown",
    "Single account lead for the full event lifecycle",
    "Itemized invoicing, W-9, COI on request",
    "Optional bar package with licensed bartenders",
    "Multi-day and multi-city coordination",
  ],
  "Private Party": [
    "Custom menu designed by Chef Terry around your celebration",
    "Premium proteins (Wood-Fire, Steakhouse, or surf & turf)",
    "Live charcoal grilling on-site",
    "Buffet, family-style, plated, or stationed service",
    "Salads, sides, breads, sauces, and signature desserts",
    "Linen-draped buffet, chafers, and serving equipment",
    "Professional uniformed service staff",
    "Full setup, refresh, and breakdown",
    "Trash removed and surfaces wiped before we leave",
    "Optional bartenders, signature cocktails, and bar setup",
    "Optional rentals: china, flatware, linens, lounge furniture",
    "Discreet, friendly team that fits the energy of your party",
  ],
  Menu: [
    "Custom menu designed by Chef Terry",
    "Premium proteins (Wood-Fire, Steakhouse, or surf & turf)",
    "Chef-attended live-fire grilling on-site",
    "Buffet, family-style, plated, or stationed service",
    "Salads, sides, breads, sauces, and desserts",
    "Linen-draped buffet, chafers, and serving equipment",
    "Professional uniformed service staff",
    "Full setup, refresh, and breakdown",
    "Optional bartenders and bar program",
    "Optional rentals: china, flatware, linens",
    "Single point of contact end-to-end",
    "Itemized, all-in pricing — no surprise fees",
  ],
};

export function MenusOpener({ regionKey, pageType }: { regionKey: RegionKey; pageType: PageType }) {
  const isPhx = regionKey === "phoenix";
  const regionLabel = isPhx ? "Phoenix Metro" : "San Diego County";
  const copy = COPY[pageType];
  const woodHref = isPhx
    ? "https://fs17.formsite.com/matthews3404/BBQDADDYLLC/index"
    : "https://fs17.formsite.com/matthews3404/SanDiego/index";
  const steakHref = isPhx ? "/steak-seafood-menu" : "/steak-seafood-menu-san-diego";

  const cards = [
    { img: bbqPlatter1.url, label: `Wood-Fired — ${regionLabel}`, body: "Slow-smoked brisket, tri-tip, pulled meats and comfort sides. Backyard elegance, restaurant polish.", href: woodHref, external: true },
    { img: steakhouseMenu.url, label: `Steakhouse — ${regionLabel}`, body: "Ribeye, filet, picanha, prime rib. Plated dinners and family-style service. Restaurant-quality at your venue.", href: steakHref, external: false },
  ];

  const included = includedByPage[pageType];

  return (
    <>
      {/* MENU OPENER — cards */}
      <section id="menus" className="pt-20 lg:pt-28 pb-12">
        <div className="container-luxe max-w-5xl">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">{copy.eyebrow(regionLabel)}</div>
            <h2 className="heading-xl text-bone">{copy.headline}</h2>
            <p className="mt-8 text-xl text-bone/70 leading-relaxed font-light">{copy.sub(regionLabel)}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((m) => {
              const inner = (
                <>
                  <img src={m.img} alt={m.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                    <div className="heading-md text-bone group-hover:text-gold transition-colors">{m.label}</div>
                    <p className="mt-4 text-bone/70 max-w-sm">{m.body}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
                      View Menu <ArrowRight className="size-3" />
                    </div>
                  </div>
                </>
              );
              const cls = "group relative aspect-[5/4] overflow-hidden border border-white/5";
              return m.external ? (
                <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
              ) : (
                <Link key={m.label} to={m.href} className={cls}>{inner}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED — placed BEFORE pricing so the value is read first */}
      <section id="included" className="py-20 lg:py-24">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-5">What's Included</div>
            <h2 className="heading-lg text-bone">Your proposal, line by line.</h2>
            <p className="mt-5 text-bone/70 font-light">No hidden fees, no surprise gratuities, no upsells the day of. Every Qfire proposal is itemized so you know exactly what your investment buys — before you ever see a price.</p>
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

      {/* PRICING (includes Built-for-Scale automatically) */}
      <RegionalPricing regionKey={regionKey} />

    </>
  );
}
