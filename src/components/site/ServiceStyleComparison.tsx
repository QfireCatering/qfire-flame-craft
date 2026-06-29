import { Check, Minus } from "lucide-react";

/**
 * ServiceStyleComparison — GEO + CRO matrix table.
 * AI engines (Perplexity, ChatGPT, Google AI) love structured comparison
 * tables and frequently cite them. Buyers compare service styles before
 * requesting a quote — answer it inline so they don't bounce.
 */
const ROWS = [
  { feature: "Best for guest count",       buffet: "50–2,500",       family: "20–150",        plated: "30–400",         stations: "75–500",      grilling: "40–800" },
  { feature: "Starting price / guest",     buffet: "$12.99",         family: "$24",           plated: "$48",            stations: "$32",         grilling: "$18" },
  { feature: "Service style",              buffet: "Self-serve line", family: "Shared platters", plated: "Course-by-course", stations: "Chef-attended", grilling: "Live-fire show" },
  { feature: "Staff required",             buffet: "Light",           family: "Medium",        plated: "Heavy",          stations: "Medium",      grilling: "Medium" },
  { feature: "Best for weddings",          buffet: true,              family: true,            plated: true,             stations: true,          grilling: true },
  { feature: "Best for corporate",         buffet: true,              family: false,           plated: true,             stations: true,          grilling: false },
  { feature: "Best for private parties",   buffet: true,              family: true,            plated: false,            stations: true,          grilling: true },
  { feature: "Wood-fired menus available", buffet: true,              family: true,            plated: true,             stations: true,          grilling: true },
  { feature: "Steakhouse menus available", buffet: false,             family: true,            plated: true,             stations: true,          grilling: true },
];

const COLS = [
  { key: "buffet", label: "Buffet" },
  { key: "family", label: "Family Style" },
  { key: "plated", label: "Plated" },
  { key: "stations", label: "Action Stations" },
  { key: "grilling", label: "Onsite Grilling" },
] as const;

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check className="size-4 text-gold mx-auto" />;
  if (v === false) return <Minus className="size-4 text-bone/30 mx-auto" />;
  return <span className="text-bone/85 font-light">{v}</span>;
}

export function ServiceStyleComparison({ className = "" }: { className?: string }) {
  return (
    <section className={`py-20 lg:py-28 bg-ink ${className}`}>
      <div className="container-luxe">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="eyebrow justify-center mb-5">Service Styles Compared</div>
          <h2 className="heading-lg text-bone">
            Find the <span className="text-gold italic font-light">right format</span> for your event
          </h2>
          <p className="mt-5 text-bone/70 font-light">
            Every Qfire menu can be served in any of these formats. Here's how they compare on price, staffing, and best-fit event type.
          </p>
        </div>

        <div className="overflow-x-auto border border-gold/15">
          <table className="w-full text-sm min-w-[820px]">
            <thead>
              <tr className="bg-onyx">
                <th className="text-left p-4 text-[0.6rem] tracking-[0.28em] uppercase text-bone/55 font-normal">Feature</th>
                {COLS.map((c) => (
                  <th key={c.key} className="p-4 text-[0.6rem] tracking-[0.28em] uppercase text-gold font-normal text-center">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-ink/95" : "bg-onyx/40"}>
                  <td className="p-4 text-bone/90 font-light border-t border-white/5">{row.feature}</td>
                  {COLS.map((c) => (
                    <td key={c.key} className="p-4 text-center border-t border-white/5">
                      <Cell v={(row as Record<string, string | boolean>)[c.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center mt-8 text-bone/55 text-sm font-light">
          Not sure which to pick? Tell us your guest count and venue — we'll recommend the right format inside your proposal.
        </p>
      </div>
    </section>
  );
}
