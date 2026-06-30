import { Check } from "lucide-react";

/**
 * Concrete, all-in 100-guest wedding bundle pricing for each region.
 * Helps brides answer the #1 question — "what will my wedding actually cost?" —
 * before they have to fill out a form.
 */
export function WeddingBuffetEstimator({
  region,
  regionShort,
}: {
  region: string;
  regionShort: "Phoenix" | "San Diego";
}) {
  const isPhx = regionShort === "Phoenix";
  const low = isPhx ? 33 : 38;
  const high = isPhx ? 45 : 49;
  const guests = 100;

  const lowTotal = (low * guests).toLocaleString("en-US");
  const highTotal = (high * guests).toLocaleString("en-US");

  const includes = [
    "2 wood-fired meat options (pick from brisket, tri-tip, pulled pork, smoked chicken, sausage and more)",
    "3 signature sides",
    "1 passed or stationed appetizer",
    "Non-alcoholic drink service (iced tea, lemonade, infused water)",
    "Full-service buffet — uniformed staff, chafers, linens, presentation",
    "Setup, refresh through service, and complete breakdown",
  ];

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-onyx border-y border-white/10 scroll-mt-32">
      <div className="container-luxe">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="eyebrow justify-center mb-6">{regionShort} Wedding Buffet — Real Numbers</div>
          <h2 className="heading-lg text-bone">
            What a <span className="text-gold italic font-light">100-guest</span> {regionShort} wedding actually costs.
          </h2>
          <p className="mt-5 text-bone/70 text-lg font-light leading-relaxed">
            Our average all-in starting price for a full-service wood-fired wedding buffet in {region} —
            no guessing, no log-in required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="p-8 lg:p-10 bg-ink/70 border border-gold/30">
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3">Per Guest</div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-display text-bone tracking-tight">${low}</span>
              <span className="text-bone/55 text-2xl font-light">–</span>
              <span className="text-5xl font-display text-bone tracking-tight">${high}</span>
            </div>
            <div className="text-bone/60 text-sm">per person · starting</div>
          </div>
          <div className="p-8 lg:p-10 bg-ink/70 border border-gold/30">
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3">Estimated Total · 100 Guests</div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-display text-bone tracking-tight">${lowTotal}</span>
              <span className="text-bone/55 text-2xl font-light">–</span>
              <span className="text-5xl font-display text-bone tracking-tight">${highTotal}</span>
            </div>
            <div className="text-bone/60 text-sm">food + full-service buffet</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 p-8 lg:p-10 border border-white/10 bg-ink/40">
          <p className="text-sm text-bone/80 font-medium mb-4 tracking-wide">What this bundle includes:</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {includes.map((x) => (
              <li key={x} className="flex items-start gap-3 text-bone/85 text-sm leading-relaxed">
                <Check className="size-4 text-gold mt-0.5 shrink-0" strokeWidth={1.6} /> {x}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-bone/55 leading-relaxed">
            Pricing scales with guest count, meat selection, premium upgrades (live grilling, surf &amp; turf,
            plated service), bar program, and rentals. Final proposals are built one-to-one — most {regionShort}{" "}
            weddings land within or just above this range.
          </p>
        </div>
      </div>
    </section>
  );
}
