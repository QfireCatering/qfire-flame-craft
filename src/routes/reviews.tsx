import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero, CTASection } from "@/components/site/Sections";
import buffet from "@/assets/buffet.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — 5-Star Wedding & Corporate Catering | Qfire" },
      { name: "description", content: "Five-star reviews from wedding couples, corporate clients, holiday party hosts and private chef guests across Phoenix Metro and San Diego County. 400+ verified reviews, 5.0 average rating, the same Chef Terry standard every event." },
      { property: "og:title", content: "Reviews — Qfire" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Qfire Catering",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "400",
        },
      }),
    }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { q: "Chef Terry — 'The BBQ Daddy' — and his team turned our wedding into the meal everyone is still talking about. Brisket, ribeye, the whole spread. Flawless.", a: "Lauren & Mark", e: "Scottsdale Wedding · 220 guests" },
  { q: "We hired Qfire for our annual partner dinner. Plated steaks for 140, served hot, served perfectly. Worth every penny.", a: "David K.", e: "Corporate · La Jolla" },
  { q: "Backyard 50th birthday. Wood-fired everything. Guests thought we'd flown in a steakhouse. Absolutely premium.", a: "Sandra T.", e: "Private Party · Gilbert" },
  { q: "From the first phone call to the last guest leaving, Qfire was effortless. The kind of caterer you only have to hire once because you know who you're calling next time.", a: "Megan & Ryan", e: "Carlsbad Wedding · 180 guests" },
  { q: "We've worked with Qfire on three company events. Each one better than the last. The bar program is also excellent.", a: "Tara M.", e: "Phoenix Tech Co." },
  { q: "The BBQ Daddy made the brisket of a lifetime. My husband still talks about the bark. Service was equally impressive.", a: "Allison P.", e: "Mesa Anniversary Party" },
  { q: "Plated dinner for 240 at a wine country venue. Every plate landed hot. Every steak medium-rare. Truly elite operation.", a: "Hannah & Joel", e: "Rancho Santa Fe Wedding" },
  { q: "Chef Terry personally walked us through the menu and showed up the day of to oversee everything. That kind of ownership is rare.", a: "Eric L.", e: "Private Chef Dinner · Encinitas" },
];

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Reviews"
        title={<>Five-star, <span className="text-gold italic font-light">top to bottom.</span></>}
        subtitle="From wedding couples, corporate hosts and the families who hire us back, year after year."
        image={buffet}
      />
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="flex items-center gap-3 mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-gold text-gold" />)}
            </div>
            <div className="text-bone/80">5.0 average across 400+ Google reviews</div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <figure key={i} className="bg-onyx border border-white/5 p-8 lg:p-10">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="size-3.5 fill-gold text-gold" />)}
                </div>
                <blockquote className="text-bone/85 text-lg leading-relaxed font-light">{r.q}</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-white/5">
                  <div className="text-bone font-medium">{r.a}</div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{r.e}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
