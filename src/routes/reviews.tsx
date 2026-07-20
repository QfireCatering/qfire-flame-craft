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
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/reviews" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Qfire Catering",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "400",
        },
      }),
    }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { q: "Terry and his crew helped to make our special day magical. We did a food tasting a few weeks prior to the ceremony, and we were instantly sold! The food portions were more than plentiful! On the day of the ceremony, his staff arrived on time, and they were so professional and friendly. The food was amazing — we heard about it from our guests all night long.", a: "Tene", e: "Wedding · 8/20/2025", source: "Google" },
  { q: "These guys were absolute rock stars at our wedding! We had to reschedule due to COVID-19 and they were so compassionate and easy to work with. The day of, they showed up early, set up, and provided a meal that was better than we could have imagined. The baked potato bar was so impressive! By the time my husband and I picked our heads up from grace, Terry was sliding our plates in front of us. The pulled chicken was so flavorful and juicy, and the brisket was a crowd favorite!", a: "Brittany D.", e: "Wedding · 7/23/2020", source: "Google" },
  { q: "Terry's BBQ is a crowd pleaser and the way to go! All of our wedding guests are still talking about the BBQ from the wedding and how to get it! Terry provides a great personal presence and energy — people said he could have easily been the MC! He truly cares about making guests happy and holds his employees to high standards. We hope to have his BBQ every year on our anniversary, it is so dang delicious!", a: "Mindy T.", e: "Wedding · 11/15/2021", source: "Google" },
  { q: "We had BBQ Daddy for an 85 person wedding shower that was a nice event. Terry BBQ'd tenderloin, rib eye steaks, and salmon along with 2 cold and 2 hot appys (the bacon wrapped scallops were to die for). It was really a great event. The food was awesome and so was the staff. Terry was SUPER easy to deal with and had great communication throughout.", a: "Nanette B.", e: "Wedding Shower · 85 guests · 8/30/2023", source: "Google" },
  { q: "Best 50th Birthday Dinner EVER! HUGE shoutout to Chef Terry and his amazing assistant, Leslie! We hired them to cater my 50th birthday, and they literally brought the steakhouse to my backyard. Seriously, he brought his own grill! When Chef Terry says, 'We bring the steakhouse to you,' you better believe him. Every New York Strip, chicken, and salmon was grilled perfectly to temperature. What a FEAST!", a: "Tangy Robinson", e: "50th Birthday · 1/20/2026", source: "Google" },
  { q: "Terry cooked up a feast for my bachelor party and delivered it right to our backyard of the Airbnb. Food was amazing!!! We got the brisket, the BBQ chicken, mac n cheese, broccoli, and baked beans. The brisket was cooked perfectly and was more fatty pieces (which is great for me cuz that's my preference).", a: "Michael C.", e: "Bachelor Party · 5/25/2022", source: "Google" },
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
            <div className="text-bone/80">4.9-star average across Google, Yelp, WeddingWire & The Knot — hundreds of verified reviews</div>
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
                  <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold/80 mt-2">Verified · {r.source}</div>
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
