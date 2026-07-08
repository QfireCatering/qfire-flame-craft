import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { contact } from "@/lib/contact";

const faqs = [
  { q: "Do you travel for weddings?", a: "Yes. We cater weddings throughout the entire metro and to destination venues, vineyards, ranches, and private estates within driving distance. Travel and lodging are quoted transparently inside your proposal." },
  { q: "Can we change our menu after we book?", a: "Yes. Most couples refine their menu several times between booking and the final tasting. The menu is a living document until roughly 15 days out." },
  { q: "Do you provide bartenders?", a: "Yes. Licensed and insured bartenders, signature cocktails, beer and wine programs, mixers, ice, and glassware. We can run the bar entirely or partner with your venue's beverage program." },
  { q: "Do you provide rentals?", a: "We coordinate linens, chinaware, glassware, flatware, chafers, serving pieces, and staging through trusted rental partners — billed at cost and managed by our team so you don't field three vendor calls a week." },
  { q: "Do you offer vegetarian options?", a: "Yes — beautifully composed vegetarian plates that stand alongside the steaks. Wood-fired vegetables, grain bowls, stuffed portobellos, handmade pastas, and seasonal sides built around what's at the market." },
  { q: "Do you offer vegan options?", a: "Yes. Fully plant-based plated dinners and stations are available — grilled vegetable platters, vegan grain bowls, plant-protein entrees, and dairy-free desserts." },
  { q: "How early should we reserve our wedding date?", a: "Most couples book Qfire 6 to 12 months in advance for peak Saturdays. Off-peak dates and intimate weddings can often be accommodated inside 90 days — but Saturdays from March through November book first." },
  { q: "What service styles do you offer?", a: "Plated dinner, buffet, family-style, live-fire grilling stations, action stations (carving, raw bar, pasta), and passed-only cocktail receptions. Every menu can be served in the format that fits your venue and guest count." },
  { q: "Do you provide professional service staff?", a: "Yes. Every wedding includes uniformed servers, captains, chefs, and a lead coordinator — fully staffed by our team, dressed appropriately for the level of the wedding, and trained to your timeline." },
  { q: "Who handles setup?", a: "We do. Our team arrives hours before guest count, stages the kitchen, dresses every table assigned to catering, sets buffet and station displays, and coordinates with your planner and venue manager. You don't lift a thing." },
  { q: "Who handles cleanup?", a: "We do. Full breakdown of all catering equipment, buffet stations, bar areas, and back-of-house. Trash bagged. Surfaces wiped. Your venue manager will ask for our card." },
  { q: "What if our venue has restrictions?", a: "We work inside almost every major venue's catering rules and have existing relationships with most of the region's preferred-vendor lists. If your venue has specific power, propane, or fire-marshal restrictions for live grilling, we coordinate permits and approvals directly." },
  { q: "What areas do you serve — and are there travel fees?", a: "We cater weddings throughout Phoenix Metro and San Diego County. Anything within roughly 30 miles of our home base is included at no additional charge. Destination venues (Sedona, Flagstaff, Temecula, wine country) get transparent travel and lodging quotes up front." },
  { q: "Do you handle cake cutting?", a: "Yes. We charge a $100 cake-cutting fee because cake is typically served after dinner, when our team would normally be wrapping up. That fee covers the extra staff time to beautifully cut, plate, and serve your cake — including outside-bakery cakes or dessert bars." },
  { q: "Do you feed our vendors — photographer, DJ, planner?", a: "Yes. Vendor meals are billed at a reduced rate (typically $18–$24 per vendor depending on menu) and are served hot from the same kitchen right after the main service. A fed vendor is a happy vendor." },
  { q: "Are you licensed and insured?", a: "Yes. Qfire Catering carries full general liability insurance, food handler licensing, and workers' compensation coverage. We name your venue as an additional insured on our certificate and handle it directly with them." },
  { q: "What does a typical wedding-day timeline look like?", a: "For a 5pm ceremony / 6pm reception: our team arrives around 1–2pm to set up the kitchen and buffet, cocktail-hour apps are passed at 6pm, dinner service begins at your first-dance cue (usually around 7pm), cake cutting around 8pm, and full breakdown wraps by 11pm or your venue's cutoff." },
];

export const Route = createFileRoute("/wedding-faq")({
  head: () => ({
    meta: [
      { title: "Wedding Catering FAQ — Every Question Answered | Qfire" },
      { name: "description", content: "The complete wedding catering FAQ from Qfire — travel fees, service styles, rentals, staff, dietary needs, cake cutting, vendor meals, insurance, timeline. Phoenix Metro & San Diego County." },
      { property: "og:title", content: "Wedding Catering FAQ — Qfire" },
      { property: "og:description", content: "Every wedding catering question we get, answered honestly." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/wedding-faq" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/wedding-faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: WeddingFaqPage,
});

function WeddingFaqPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-ink border-b border-white/10">
        <div className="container-luxe max-w-4xl">
          <div className="eyebrow mb-6 text-gold">Wedding Catering — Full FAQ</div>
          <h1 className="font-display text-5xl md:text-6xl text-bone leading-[0.95]">
            Every wedding catering question, <span className="italic text-gold font-light">answered.</span>
          </h1>
          <p className="mt-6 text-lg text-bone/75 font-light max-w-2xl leading-relaxed">
            The eight most-asked questions live on our wedding pages. Everything else lives here — travel, rentals, staff, vendor meals, timeline, insurance, and more.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxe max-w-4xl">
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {faqs.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-8 list-none">
                  <h2 className="text-lg lg:text-xl text-bone font-display">{f.q}</h2>
                  <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <p className="mt-4 text-bone/75 text-base lg:text-lg leading-relaxed font-light max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="text-bone/60 text-sm tracking-[0.18em] uppercase mb-4">Still have a question?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={contact.phoneHref} className="btn-ghost">Call {contact.phone}</a>
              <Link to="/quote" className="btn-primary">See If My Date Is Open <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
