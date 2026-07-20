import { Star } from "lucide-react";

type RegionKey = "phoenix" | "san-diego";

type Review = { q: string; a: string; e: string; source: string };

const REVIEWS: Record<RegionKey, Review[]> = {
  phoenix: [
    {
      q: "Terry and his crew helped to make our special day magical. We did a food tasting a few weeks prior to the ceremony, and we were instantly sold! The food portions were more than plentiful! On the day of the ceremony, his staff arrived on time, and they were so professional and friendly. The food was amazing — we heard about it from our guests all night long.",
      a: "Tene",
      e: "Wedding · 8/20/2025",
      source: "Google",
    },
    {
      q: "Terry's BBQ is a crowd pleaser and the way to go! All of our wedding guests are still talking about the BBQ from the wedding. Terry provides a great personal presence and energy — people said he could have easily been the MC! He truly cares about making the guests happy and holds his employees to high standards.",
      a: "Mindy T.",
      e: "Wedding · 11/15/2021",
      source: "Google",
    },
    {
      q: "Best 50th Birthday Dinner EVER! HUGE shoutout to Chef Terry and his amazing assistant, Leslie! They literally brought the steakhouse to my backyard — he brought his own grill! Every New York Strip, chicken, and salmon was grilled perfectly to temperature. What a FEAST!",
      a: "Tangy Robinson",
      e: "50th Birthday · 1/20/2026",
      source: "Google",
    },
  ],
  "san-diego": [
    {
      q: "These guys were absolute rock stars at our wedding! They showed up early, set up, and provided a meal that was better than we could have imagined. The baked potato bar was so impressive! By the time my husband and I picked our heads up from grace, Terry was sliding our plates in front of us. The pulled chicken was so flavorful and the brisket was a crowd favorite!",
      a: "Brittany D.",
      e: "Wedding · 7/23/2020",
      source: "Google",
    },
    {
      q: "We had BBQ Daddy for an 85 person wedding shower. Terry BBQ'd tenderloin, rib eye steaks, and salmon along with 2 cold and 2 hot appys (the bacon wrapped scallops were to die for). The food was awesome and so was the staff. Terry was SUPER easy to deal with and had great communication throughout.",
      a: "Nanette B.",
      e: "Wedding Shower · 85 guests · 8/30/2023",
      source: "Google",
    },
    {
      q: "Terry cooked up a feast for my bachelor party and delivered it right to our backyard of the Airbnb. Food was amazing!!! We got the brisket, the BBQ chicken, mac n cheese, broccoli, and baked beans. The brisket was cooked perfectly.",
      a: "Michael C.",
      e: "Bachelor Party · 5/25/2022",
      source: "Google",
    },
  ],
};

export function TestimonialStrip({ regionKey }: { regionKey: RegionKey }) {
  const reviews = REVIEWS[regionKey];
  const regionLabel = regionKey === "phoenix" ? "Phoenix Metro" : "San Diego County";

  return (
    <section className="py-20 lg:py-24 border-t border-white/5 bg-onyx/40">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow justify-center mb-5 text-gold">What {regionLabel} Clients Say</div>
          <h2 className="heading-md text-bone">
            Rated <span className="text-gold italic font-light">4.9 stars</span> across every platform — Google, Yelp, WeddingWire and The Knot.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.a + r.source}
              className="bg-ink/60 border border-white/10 p-7 lg:p-9 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="text-bone/85 leading-relaxed flex-1 font-display text-lg">
                "{r.q}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <div className="text-bone font-medium">{r.a}</div>
                <div className="text-xs text-bone/55 mt-1 tracking-wide">{r.e}</div>
                <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold/80 mt-2">
                  Verified · {r.source}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
