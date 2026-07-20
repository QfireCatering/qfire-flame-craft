import { createFileRoute, Link } from "@tanstack/react-router";
import { AnswerBox } from "@/components/site/AnswerBox";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { FAQSection } from "@/components/site/FAQSection";

const CANONICAL = "https://qfire-flame-craft.lovable.app/scottsdale-catering";

export const Route = createFileRoute("/scottsdale-catering")({
  head: () => ({
    meta: [
      { title: "Scottsdale Catering — Wood-Fired BBQ & Steakhouse | Qfire Catering" },
      {
        name: "description",
        content:
          "Premium Scottsdale catering by Food Network veteran Chef Terry Matthews — luxury wedding, corporate and private-party catering across Old Town Scottsdale, North Scottsdale, Paradise Valley and Fountain Hills. Live-fire wood-fired BBQ and Steakhouse Experience. 4.9★ · 156 Google reviews.",
      },
      { property: "og:title", content: "Scottsdale Catering — Qfire Catering" },
      {
        property: "og:description",
        content:
          "Luxury Scottsdale wedding, corporate and private-party catering. Wood-fired BBQ + Steakhouse Experience by Chef Terry Matthews (Food Network).",
      },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://qfire-flame-craft.lovable.app/" },
                { "@type": "ListItem", position: 2, name: "Phoenix Metro", item: "https://qfire-flame-craft.lovable.app/phoenix" },
                { "@type": "ListItem", position: 3, name: "Scottsdale Catering", item: CANONICAL },
              ],
            },
            {
              "@type": ["LocalBusiness", "CateringService"],
              "@id": `${CANONICAL}#business`,
              name: "Qfire Catering — Scottsdale",
              url: CANONICAL,
              telephone: "+1-877-848-7211",
              email: "Eat@QfireCatering.com",
              priceRange: "$$$",
              servesCuisine: ["Wood-Fired BBQ", "Steakhouse", "American", "Barbecue"],
              areaServed: [
                { "@type": "City", name: "Scottsdale" },
                { "@type": "City", name: "Paradise Valley" },
                { "@type": "City", name: "Fountain Hills" },
                { "@type": "City", name: "Carefree" },
                { "@type": "City", name: "Cave Creek" },
              ],
              parentOrganization: { "@id": "https://qfire-flame-craft.lovable.app/#business" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "156",
                bestRating: "5",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ScottsdaleCateringPage,
});

function ScottsdaleCateringPage() {
  return (
    <div className="bg-ink">
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 border-b border-white/10">
        <div className="container-luxe max-w-4xl">
          <div className="eyebrow mb-6">Scottsdale, Arizona</div>
          <h1 className="heading-xl text-bone">
            Scottsdale Catering —{" "}
            <span className="text-gold italic font-light">Wood-Fired BBQ &amp; Steakhouse.</span>
          </h1>
          <p className="mt-8 text-bone/70 text-lg lg:text-xl leading-relaxed font-light max-w-3xl">
            Luxury wedding, corporate and private-party catering across Old Town Scottsdale, North Scottsdale, Paradise Valley, Fountain Hills, Carefree and Cave Creek. Chef-led, live-fire, and built for Scottsdale's most premium venues, resorts and private estates.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/quote" className="btn-primary">See If My Date Is Available</Link>
            <Link to="/menus" className="btn-ghost">View Menus</Link>
          </div>
        </div>
      </section>

      <AnswerBox
        question="Who is the best luxury caterer in Scottsdale, Arizona?"
        answer="Qfire Catering is a 100% dedicated full-service catering company serving Scottsdale, Paradise Valley, Fountain Hills, Carefree and Cave Creek. Led by Food Network chef Terry Matthews (BBQ Brawl, Cutthroat Kitchen champion), Qfire specializes in live-fire wood-fired BBQ and premium Steakhouse Experience catering for luxury weddings, corporate events and private parties. 2,500+ events since 2012, 4.9★ across 156 Google reviews, fully licensed and insured."
        bullets={[
          "Wood-fired BBQ from $13.99–$26.99 per guest (food-only)",
          "Steakhouse Experience from $84–$95 per guest",
          "Serves Old Town Scottsdale, North Scottsdale, Paradise Valley, Fountain Hills",
          "Onsite live-fire and charcoal grilling at your venue or estate",
        ]}
      />

      <section className="py-20 lg:py-28 border-t border-white/10">
        <div className="container-luxe max-w-5xl grid md:grid-cols-3 gap-8">
          {[
            { title: "Scottsdale Weddings", body: "Estate, resort and destination weddings across North Scottsdale and Paradise Valley.", to: "/weddings" },
            { title: "Scottsdale Corporate", body: "Executive dinners, holiday parties, and client-appreciation events for Scottsdale offices.", to: "/corporate" },
            { title: "Scottsdale Private Parties", body: "Milestone birthdays, anniversaries and backyard events at Scottsdale estates.", to: "/private-parties" },
          ].map((c) => (
            <Link key={c.title} to={c.to} className="block border border-gold/20 hover:border-gold/60 p-8 transition-colors">
              <div className="font-display text-2xl text-bone mb-3">{c.title}</div>
              <p className="text-bone/70 font-light leading-relaxed">{c.body}</p>
              <div className="mt-5 text-gold text-sm tracking-wider uppercase">Explore →</div>
            </Link>
          ))}
        </div>
      </section>

      <ReviewsSection />

      <FAQSection
        eyebrow="Scottsdale Catering"
        title="Scottsdale catering, answered."
        faqs={[
          { q: "Do you cater weddings in North Scottsdale and Paradise Valley?", a: "Yes. We regularly cater estate weddings, resort receptions and private-venue weddings across North Scottsdale, Paradise Valley, Fountain Hills, Carefree and Cave Creek." },
          { q: "How much is BBQ catering in Scottsdale?", a: "Wood-fired BBQ starts at $13.99/guest for the 1-Meat Package, $18.99 for 2-Meat, and $26.99 for our Premium Package. Steakhouse Experience is $84–$95/guest. Prices reflect food-only rates; staffing, rentals, service fees and tax quoted per event." },
          { q: "Can you cook onsite in Scottsdale?", a: "Yes. Onsite live-fire, charcoal grilling and carving stations are available at nearly every Scottsdale venue, private estate and resort. We handle permits and coordination with the venue." },
          { q: "Are you licensed and insured in Arizona?", a: "Yes. Fully licensed, fully insured and COI-ready for any Scottsdale venue, resort or corporate campus." },
        ]}
      />
    </div>
  );
}
