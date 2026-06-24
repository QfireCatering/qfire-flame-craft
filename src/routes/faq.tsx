import { createFileRoute } from "@tanstack/react-router";
import buffet from "@/assets/buffet.jpg";
import { PageHero, CTASection } from "@/components/site/Sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Qfire Catering" },
      { name: "description", content: "Frequently asked questions about Qfire Catering — booking, menus, pricing, service, dietary needs and travel." },
      { property: "og:title", content: "FAQ — Qfire" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "How far in advance should we book?", a: "Most weddings book 6–12 months out. Corporate and private events are typically 4–8 weeks in advance, though we accept shorter lead times when our calendar allows." },
  { q: "Do you handle full service?", a: "Yes. Qfire is full-service. Staffing, rentals, bartending, setup and breakdown are all included. You don't lift a thing." },
  { q: "Can you accommodate dietary needs?", a: "Absolutely. Vegan, gluten-free, kosher-style and allergen-aware menus are built into how we plan every event." },
  { q: "Do you travel?", a: "Yes — across all of Phoenix Metro and all of San Diego County. Destination service is available on request." },
  { q: "What's your minimum guest count?", a: "Our private chef experience starts at 8 guests. Full-service catering typically begins around 40 guests." },
  { q: "Do you offer tastings?", a: "Yes. Private tastings for booked clients are part of how we finalize your menu, especially for weddings." },
  { q: "Are you licensed and insured?", a: "Fully. Including liquor liability for our bartending services." },
  { q: "Can you cook on-site?", a: "Yes. We bring our own grills and live-fire setups to your venue for stations, carving and tableside service." },
  { q: "What's included in the per-person price?", a: "Custom proposals are built around your menu, guest count, service style and rental needs. We don't use templated pricing." },
  { q: "What if our venue has restrictions?", a: "Tell us. We've worked with nearly every venue in the region and routinely adapt to fire codes, kitchen access and load-in requirements." },
];

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Common questions, <span className="text-gold italic font-light">straight answers.</span></>}
        subtitle="If your question isn't answered here, send us a note. We answer every inquiry personally."
        image={buffet}
      />
      <section className="py-24 lg:py-32">
        <div className="container-luxe max-w-4xl">
          <div className="divide-y divide-white/5 border-y border-white/5">
            {faqs.map((f) => (
              <details key={f.q} className="group py-8">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                  <span className="text-xl lg:text-2xl font-display text-bone group-hover:text-gold transition-colors">{f.q}</span>
                  <span className="text-gold text-3xl font-light transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <p className="mt-5 text-bone/70 leading-relaxed text-lg font-light">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
