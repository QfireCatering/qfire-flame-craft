import { Star, Quote } from "lucide-react";

/**
 * ReviewsSection — 5★ social proof with Review schema for Google rich results
 * and AI-engine citation. Use on homepage + key conversion pages.
 */
const REVIEWS = [
  {
    name: "Tene",
    role: "Wedding · 8/20/2025",
    rating: 5,
    text: "Terry and his crew helped to make our special day magical. We did a food tasting a few weeks prior to the ceremony, and we were instantly sold! The food portions were more than plentiful!! There was enough food left over from the food tasting to share with our friends. On the day of the ceremony, his staff arrived on time, and they were so professional and friendly. The food was amazing, we heard about it from our guests all night long.",
  },
  {
    name: "Brittany D.",
    role: "Wedding · 7/23/2020",
    rating: 5,
    text: "These guys were absolute rock stars at our wedding! We had to reschedule our wedding due to COVID-19, and they were so compassionate and easy to work with when making plans to change. The day of, they showed up early, set up, and provided a meal that was better than we could have imagined. The baked potato bar was so impressive! They were such professionals. By the time my husband and I picked our heads up from grace, Terry was sliding our plates in front of us. The pulled chicken was so flavorful and juicy, and the brisket was a crowd favorite!",
  },
  {
    name: "Mindy T.",
    role: "Wedding · 11/15/2021",
    rating: 5,
    text: "Terry's BBQ is a crowd pleaser and the way to go! All of our wedding guests are still talking about the BBQ from the wedding and how to get it! Not to mention, Terry's provides a great personal presence and energy to events. People said he could have easily been the MC! Terry was so fun and flexible to work with. He truly cares about how to make the guests happy and holds his employees to high standards that he plans ahead to fulfill. We hope to have his bbq every year on our anniversary, it is so dang delicious!",
  },
  {
    name: "Nanette B.",
    role: "Wedding Shower · 85 guests · 8/30/2023",
    rating: 5,
    text: "We had BBQ Daddy for an 85 person wedding shower that was a nice event. Terry BBQ'd tenderloin, rib eye steaks, and salmon along with 2 cold and 2 hot appys (the bacon wrapped scallops were to die for). It was really a great event. The food was awesome and so was the staff. Terry was SUPER easy to deal with and had great communication throughout.",
  },
  {
    name: "Tangy Robinson",
    role: "50th Birthday · 1/20/2026",
    rating: 5,
    text: "Best 50th Birthday Dinner EVER! HUGE shoutout to Chef Terry and his amazing assistant, Leslie! We hired them to cater my 50th birthday, and they literally brought the steakhouse to my backyard. Seriously, he brought his own grill! When Chef Terry says, 'We bring the steakhouse to you,' you better believe him. Every New York Strip, chicken, and salmon was grilled perfectly to temperature. What a FEAST!",
  },
  {
    name: "Michael C.",
    role: "Bachelor Party · 5/25/2022",
    rating: 5,
    text: "Terry cooked up a feast for my bachelor party and delivered it right to our backyard of the Airbnb. Food was amazing!!! We got the brisket, the BBQ chicken, mac n cheese, broccoli, and baked beans. The brisket was cooked perfectly and was more fatty pieces (which is great for me cuz that's my preference).",
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
            <span className="ml-3 text-bone/70 font-light text-sm">4.9 / 5 · 156 Google reviews</span>
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
    reviewCount: "156",
    bestRating: "5",
    worstRating: "1",
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
};
