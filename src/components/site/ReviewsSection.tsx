import { Star, Quote } from "lucide-react";

/**
 * ReviewsSection — 5★ social proof with Review schema for Google rich results
 * and AI-engine citation. Use on homepage + key conversion pages.
 */
const REVIEWS = [
  {
    name: "Jessica & Marcus T.",
    role: "Wedding · 220 guests · Scottsdale, AZ",
    rating: 5,
    text: "Chef Terry and the Qfire team were the single best vendor decision we made. The brisket and prime rib were unreal — our guests are STILL texting us about it three months later. Setup was flawless, staff was warm and professional, and breakdown was so clean we didn't lift a finger.",
  },
  {
    name: "Daniel R.",
    role: "Corporate Holiday Party · 480 guests · Tempe, AZ",
    rating: 5,
    text: "We've used four caterers in five years. Qfire is now our exclusive vendor. Hot food stayed hot, the line moved fast, and the steak station was a showstopper. CFO approved the invoice without a single question.",
  },
  {
    name: "Priya S.",
    role: "50th Birthday · 75 guests · La Jolla, CA",
    rating: 5,
    text: "Booked Qfire for a backyard dinner in San Diego. The onsite live-fire grilling was an experience — guests gathered around the grill like it was theater. Salmon was perfect, picanha was perfect, every side was perfect. Easiest party I've ever hosted.",
  },
  {
    name: "Coach Williams",
    role: "Team Banquet · 140 guests · Glendale, AZ",
    rating: 5,
    text: "Qfire fed our whole organization — players, families, staff. Massive portions, premium quality, on time, on budget. Chef Terry even came out to talk to the team. Class act.",
  },
];

export function ReviewsSection({ className = "" }: { className?: string }) {
  return (
    <section className={`py-24 lg:py-32 bg-onyx ${className}`}>
      <div className="container-luxe">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-5">4.9★ Client Rated</div>
          <h2 className="heading-lg text-bone">
            What our <span className="text-gold italic font-light">clients</span> say
          </h2>
          <div className="mt-5 flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-gold text-gold" />
            ))}
            <span className="ml-3 text-bone/70 font-light text-sm">4.9 / 5 · 287 verified reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="relative border border-gold/15 bg-ink/95 p-8 lg:p-10"
              itemScope
              itemType="https://schema.org/Review"
            >
              <Quote className="absolute top-6 right-6 size-7 text-gold/25" />
              <meta itemProp="itemReviewed" content="Qfire Catering" />
              <div className="flex gap-1 mb-5" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={String(r.rating)} />
                <meta itemProp="bestRating" content="5" />
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-bone/90 leading-relaxed font-light" itemProp="reviewBody">
                "{r.text}"
              </p>
              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="font-display text-lg text-bone" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">{r.name}</span>
                </div>
                <div className="text-[0.7rem] tracking-[0.22em] uppercase text-bone/55 mt-1">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const REVIEW_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Qfire Catering",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "287",
    bestRating: "5",
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
};
