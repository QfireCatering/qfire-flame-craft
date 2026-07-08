import { Check } from "lucide-react";

/**
 * "Average Cost for Catering" — a transparent planning example (NOT a package)
 * showing what a typical full-service Qfire wedding actually costs, per region.
 *
 * Answers the #1 bride question: "About how much should I expect to spend on catering?"
 */
export function WeddingBuffetEstimator({
  region,
  regionShort,
}: {
  region: string;
  regionShort: "Phoenix" | "San Diego";
}) {
  const isPhx = regionShort === "Phoenix";
  const perGuest = isPhx ? 37.15 : 44.95;
  const total = isPhx ? 3715 : 4495;
  const guests = 100;

  const sampleMenu = [
    "Tri-Tip (Premium Upgrade)",
    "Grilled Chicken Breast",
    "Creamy Mashed Potatoes",
    "Gourmet Macaroni & Cheese",
    "Caesar Salad",
    "1 Appetizer",
    "2 Drinks",
    "Professional Buffet Service",
  ];

  return (
    <section
      id="estimator"
      className="py-20 lg:py-28 bg-onyx border-y border-white/10 scroll-mt-32"
    >
      <div className="container-luxe">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="eyebrow justify-center mb-6">
            {regionShort} · Wood-Fired BBQ Wedding Pricing · Menu 1 of 2
          </div>
          <h2 className="heading-lg text-bone">
            Average Cost for{" "}
            <span className="text-gold italic font-light">Catering</span>
          </h2>
          <p className="mt-5 text-bone/75 text-lg font-light leading-relaxed">
            One of the first questions every couple asks is, "About how much should we budget for catering?" To make planning easier, we've put together an example of one of our most popular full-service wedding menus. This is not a package — it's simply an example to help you understand what a typical Qfire wedding looks like. Every wedding is fully customizable.
          </p>
          <p className="mt-4 text-bone/90 text-base font-light leading-relaxed border border-gold/30 bg-ink/50 px-5 py-3 inline-block">
            This is <span className="text-gold font-medium">Menu 1 of 2</span> — our Wood-Fired BBQ pricing. Keep scrolling to see our <span className="text-gold font-medium">Steakhouse Experience</span> pricing just below.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8">
          {/* Example Menu Includes */}
          <div className="p-8 lg:p-10 bg-ink/70 border border-gold/30">
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-5">
              Example Menu Includes
            </div>
            <ul className="space-y-3">
              {sampleMenu.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-bone/90 text-base leading-relaxed"
                >
                  <Check
                    className="size-4 text-gold mt-1 shrink-0"
                    strokeWidth={1.6}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="p-8 lg:p-10 bg-ink/70 border border-gold/30 flex flex-col justify-center">
            <div className="mb-8">
              <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3">
                Average Cost
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl lg:text-6xl font-display text-bone tracking-tight">
                  ${perGuest.toFixed(2)}
                </span>
                <span className="text-bone/60 text-lg font-light">
                  per guest
                </span>
              </div>
              <div className="text-bone/55 text-xs">before sales tax</div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3">
                Estimated Total for {guests} Guests
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl lg:text-6xl font-display text-bone tracking-tight">
                  ${total.toLocaleString("en-US")}
                </span>
              </div>
              <div className="text-bone/55 text-xs">before sales tax</div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 p-6 lg:p-8 border border-white/10 bg-ink/40">
          <p className="text-sm text-bone/75 leading-relaxed">
            Pricing shown includes one premium meat upgrade, one appetizer, two beverages, and our professional buffet service. Guest count, menu selections, rentals, staffing, venue logistics, and optional upgrades may increase or decrease the final investment.
          </p>
        </div>
      </div>
    </section>
  );
}
