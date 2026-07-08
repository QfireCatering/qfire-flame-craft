import { Check } from "lucide-react";

/**
 * "Real Wedding Pricing" — a transparent planning example (NOT a package)
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
  const perGuest = isPhx ? 32.35 : 39.95;
  const total = isPhx ? 3235 : 3995;
  const guests = 100;

  const sampleMenu = [
    "Tri-Tip",
    "Grilled Chicken Breast",
    "Creamy Mashed Potatoes",
    "Gourmet Macaroni & Cheese",
    "Caesar Salad",
    "1 Appetizer",
    "2 Drinks",
  ];

  return (
    <section
      id="estimator"
      className="py-20 lg:py-28 bg-onyx border-y border-white/10 scroll-mt-32"
    >
      <div className="container-luxe">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="eyebrow justify-center mb-6">
            {regionShort} · Real Wedding Pricing
          </div>
          <h2 className="heading-lg text-bone">
            About how much should you{" "}
            <span className="text-gold italic font-light">expect to spend?</span>
          </h2>
          <p className="mt-5 text-bone/75 text-lg font-light leading-relaxed">
            To help with planning, here's an example of one of our most common
            full-service wedding menus. Every wedding is customized — this simply
            gives you a realistic starting point when budgeting.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8">
          {/* Sample Menu */}
          <div className="p-8 lg:p-10 bg-ink/70 border border-gold/30">
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-5">
              Sample Menu
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
            <p className="mt-6 pt-6 border-t border-white/10 text-xs text-bone/55 leading-relaxed">
              Full-service buffet — uniformed staff, chafers, linens,
              presentation, setup, service, and complete breakdown included.
            </p>
          </div>

          {/* Pricing */}
          <div className="p-8 lg:p-10 bg-ink/70 border border-gold/30 flex flex-col justify-center">
            <div className="mb-8">
              <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3">
                Average Cost Per Guest
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl lg:text-6xl font-display text-bone tracking-tight">
                  ${perGuest.toFixed(2)}
                </span>
                <span className="text-bone/60 text-lg font-light">
                  per person
                </span>
              </div>
              <div className="text-bone/55 text-xs">before sales tax</div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3">
                Estimated Total · 100 Guests
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
            <span className="text-gold font-medium">A quick note on pricing:</span>{" "}
            The example above represents a typical full-service buffet wedding in{" "}
            {region}. Every wedding is customized — guest count, menu selections,
            premium upgrades (live-fire grilling, surf &amp; turf, plated
            service), bar programs, rentals, staffing, and venue logistics can all
            move your final number up or down. When you're ready, we'll build a
            personalized proposal so there are no surprises.
          </p>
        </div>
      </div>
    </section>
  );
}
