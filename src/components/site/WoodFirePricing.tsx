import { Check } from "lucide-react";

export function WoodFirePricing({ regionSlug }: { regionSlug: "phoenix" | "san-diego" }) {
  const isPhx = regionSlug === "phoenix";
  const regionShort = isPhx ? "Phoenix" : "San Diego";
  const woodMin = isPhx ? "20 guest minimum" : "50 guest minimum";
  return (
    <section id="estimator" className="py-20 lg:py-28 bg-onyx border-t border-white/5 scroll-mt-32">
      <div className="container-luxe">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-bone text-lg md:text-xl font-medium leading-relaxed border-2 border-gold/50 bg-gold/15 px-6 py-4 inline-block shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            This is <span className="text-gold font-semibold">Menu 1 of 2</span> — our Wood-Fired BBQ pricing. Keep scrolling to see our <span className="text-gold font-semibold">Steakhouse Experience</span> pricing just below.
          </p>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow justify-center mb-6">Wood-Fire/BBQ Catering — Pricing</div>
          <h2 className="heading-lg text-bone">
            Wood-fire/BBQ catering starting at{" "}
            <span className="text-gold italic font-light">{isPhx ? "$12.99" : "$15.99"}/guest.</span>
          </h2>
          <p className="mt-5 text-bone/65 text-base font-light">
            Pick your package. Pick your meats. We bring the fire, the food, and the team — award-winning {regionShort} BBQ catering for weddings, corporate events, private parties, backyard celebrations and holiday gatherings.
          </p>
          <p className="mt-3 text-gold/90 text-xs tracking-[0.25em] uppercase">
            {regionShort} — {woodMin}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
          </article>

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
          </article>

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
          </article>
        </div>

        <p className="mt-10 max-w-3xl mx-auto text-center text-bone/70 text-sm md:text-base font-light leading-relaxed">
          Prices above reflect <span className="text-bone">"food only"</span> rates — delivery and pick-up. Full-service Buffet, Family Style and Plated service are also available for an additional service charge.
        </p>
      </div>
    </section>
  );
}
