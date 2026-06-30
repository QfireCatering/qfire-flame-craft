import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { RegionKey } from "@/lib/site";
import { regions } from "@/lib/site";
import { GuestScaleStat } from "./GuestScaleStat";

export function RegionalPricing({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  const isPhx = regionKey === "phoenix";
  const steakMenuPath = isPhx ? "/steak-seafood-menu" : "/steak-seafood-menu-san-diego";
  const woodMenuUrl = isPhx ? "https://fs17.formsite.com/matthews3404/BBQDADDYLLC/index" : "https://fs17.formsite.com/matthews3404/SanDiego/index";
  const woodMin = isPhx ? "20 guest minimum" : "50 guest minimum";
  const steakMin = isPhx ? "15 guest minimum" : "40 guest minimum";
  return (
    <>
      {/* WOOD-FIRE PRICING SUMMARY */}
      <section id="pricing" className="py-20 lg:py-28 bg-onyx border-t border-white/5 scroll-mt-32">

        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-6">Wood-Fire BBQ Catering — Pricing</div>
            <h2 className="heading-lg text-bone">
              Wood-fire catering starting at <span className="text-gold italic font-light">{isPhx ? "$12.99" : "$15.99"}/guest.</span>
            </h2>
            <p className="mt-5 text-bone/65 text-base font-light">
              Pick your package. Pick your meats. We bring the fire, the food, and the team.
            </p>
            <p className="mt-3 text-gold/90 text-xs tracking-[0.25em] uppercase">{r.shortName} — {woodMin}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* 1 Meat */}
            <article className="relative p-8 lg:p-10 flex flex-col bg-ink/60 border border-white/10">
              <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3">1 Meat Package</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display text-bone tracking-tight">{isPhx ? "$12.99" : "$15.99"}</span>
                <span className="text-bone/55 text-sm">per person</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-bone/80 font-medium mb-3">Includes:</p>
                <ul className="space-y-2 text-bone/70 text-sm leading-relaxed mb-4">
                  <li className="flex gap-2"><Check className="size-3.5 text-gold shrink-0 mt-0.5" /> 1 meat for each guest, or your guests can choose between 2 meat options</li>
                  <li className="flex gap-2"><Check className="size-3.5 text-gold shrink-0 mt-0.5" /> 2 side dishes</li>
                </ul>
                <p className="text-sm text-bone/60 italic border-l-2 border-gold/30 pl-3">
                  Example: Choose Tri-Tip only, or let your guests choose between Tri-Tip and Grilled Chicken.
                </p>
              </div>
              <a href={woodMenuUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8">View Menu</a>
            </article>

            {/* 2 Meat */}
            <article className="relative p-8 lg:p-10 flex flex-col bg-ink/60 border border-white/10">
              <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3">2 Meat Package</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display text-bone tracking-tight">{isPhx ? "$17.99" : "$21.99"}</span>
                <span className="text-bone/55 text-sm">per person</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-bone/80 font-medium mb-3">Includes:</p>
                <ul className="space-y-2 text-bone/70 text-sm leading-relaxed mb-4">
                  <li className="flex gap-2"><Check className="size-3.5 text-gold shrink-0 mt-0.5" /> 2 meats for each guest, or 1 meat for everyone plus a choice between 2 additional meats</li>
                  <li className="flex gap-2"><Check className="size-3.5 text-gold shrink-0 mt-0.5" /> 3 side dishes</li>
                </ul>
                <p className="text-sm text-bone/60 italic border-l-2 border-gold/30 pl-3">
                  Example: Everyone gets Pulled Pork, then each guest chooses either Brisket or Chicken.
                </p>
              </div>
              <a href={woodMenuUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8">View Menu</a>
            </article>

            {/* Premium */}
            <article className="relative p-8 lg:p-10 flex flex-col bg-ink/60 border border-white/10">
              <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3">Premium Package</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display text-bone tracking-tight">{isPhx ? "$25.99" : "$33.99"}</span>
                <span className="text-bone/55 text-sm">per person</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-bone/80 font-medium mb-3">Includes everything in the 2 Meat Package, plus:</p>
                <ul className="space-y-2 text-bone/70 text-sm leading-relaxed mb-4">
                  <li className="flex gap-2"><Check className="size-3.5 text-gold shrink-0 mt-0.5" /> Any salad option</li>
                  <li className="flex gap-2"><Check className="size-3.5 text-gold shrink-0 mt-0.5" /> 2 appetizers</li>
                </ul>
                <p className="text-sm text-bone/85 font-medium">
                  This is our most popular package for weddings, corporate events, and larger celebrations.
                </p>
              </div>
              <a href={woodMenuUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8">View Menu</a>
            </article>
          </div>

          {/* Want More? */}
          <div className="mt-14 max-w-3xl mx-auto text-center">
            <div className="inline-block border border-gold/30 bg-gold/5 px-8 py-8">
              <h3 className="text-lg font-display text-gold mb-4">Want More?</h3>
              <p className="text-bone/80 leading-relaxed mb-3">
                Need more meat, extra sides, appetizers, desserts, drinks, staffing, bartending, rentals, or other services?
              </p>
              <p className="text-bone/80 leading-relaxed mb-3">
                No problem! You can add anything you'd like. We'll build a custom quote based on exactly what you want for your event.
              </p>
              <p className="text-bone/60 text-sm italic">
                À la carte items and additional services are available for an additional charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEAKHOUSE PRICING SUMMARY */}
      <section id="steakhouse-pricing" className="py-20 lg:py-28 bg-ink border-t border-white/5 scroll-mt-32">
        <div className="container-luxe">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow justify-center mb-6">Signature Live Fire Steakhouse Catering Experience — Pricing</div>
            <h2 className="heading-lg text-bone">
              Surf &amp; Turf Signature Live Fire Steakhouse Catering starting at <span className="text-gold italic font-light">{isPhx ? "$74" : "$79"}/guest.</span>
            </h2>
            <p className="mt-5 text-bone/65 text-base font-light">
              Live charcoal grilling, white-glove service, and restaurant-quality presentation at your {r.shortName} venue.
            </p>
            <p className="mt-3 text-gold/90 text-xs tracking-[0.25em] uppercase">{r.shortName} — {steakMin}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: "Buffet Style", price: isPhx ? "$74" : "$79", per: "/ person", desc: "Smooth. Efficient. Elegant. Restaurant-quality buffet presentation. Ideal for " + r.shortName + " weddings, corporate events and private parties.", cta: "View Menu" },
              { name: "Family Style", price: isPhx ? "$89" : "$94", per: "/ person", desc: "Shared dining. Passed platters. Connected guest experience. Luxury presentation, end to end.", cta: "View Menu" },
              { name: "Plated Service", price: isPhx ? "$128" : "$133", per: "/ person", desc: "Restaurant-style service. Each course individually served. Our most luxurious dining experience.", cta: "View Menu" },
            ].map((tier) => (
              <article
                key={tier.name}
                className="relative p-9 lg:p-10 flex flex-col bg-ink/60 border border-white/10"
              >
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-4">{tier.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display text-bone tracking-tight">{tier.price}</span>
                  <span className="text-bone/55 text-sm">{tier.per}</span>
                </div>
                <p className="mt-6 text-bone/70 leading-relaxed font-light flex-1">{tier.desc}</p>
                <Link to={steakMenuPath} className="btn-ghost mt-8">
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
          <p className="text-center mt-10 text-xs text-bone/45 tracking-wider uppercase">
            Pricing varies by guest count, menu selections and venue specifics. Final proposals are built one-to-one.
          </p>
        </div>
      </section>
    </>
  );
}
