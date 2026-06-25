import { Star } from "lucide-react";

type RegionKey = "phoenix" | "san-diego";

type Review = { q: string; a: string; e: string; source: string };

const REVIEWS: Record<RegionKey, Review[]> = {
  phoenix: [
    {
      q: "Chef Terry and his team made our wedding absolutely unforgettable. The wood-fired brisket and ribeye were restaurant quality and our guests are STILL talking about it months later. Truly five-star from the first phone call to the last bite.",
      a: "Tene Layman",
      e: "Scottsdale Wedding",
      source: "WeddingWire",
    },
    {
      q: "Hired Qfire for our company's annual partner dinner — 200+ guests, plated steakhouse service in Phoenix. Hot food, perfect timing, the staff was impeccable. Worth every dollar. We are already booking next year.",
      a: "Yara Patino",
      e: "Corporate · Phoenix",
      source: "Yelp",
    },
    {
      q: "Backyard 60th birthday in Paradise Valley. Chef Terry built us a custom menu, set up a live wood-fire station and treated our family like his own. Felt like Mastro's came to the house. Highest recommendation.",
      a: "Jean Laber",
      e: "Private Party · Paradise Valley",
      source: "Google",
    },
  ],
  "san-diego": [
    {
      q: "Our Rancho Santa Fe wedding was a dream. The surf & turf course was restaurant quality and the service team was warm, professional and on every detail. The kind of caterer you only have to hire once.",
      a: "Tene Layman",
      e: "Rancho Santa Fe Wedding",
      source: "WeddingWire",
    },
    {
      q: "Brand activation in Del Mar — Chef Terry's team kept the food coming all night for 2,200 people and never missed a beat. Steakhouse-grade food at festival scale. Incredible operation.",
      a: "Yara Patino",
      e: "Corporate · Del Mar",
      source: "Yelp",
    },
    {
      q: "Coronado beachfront plated dinner for 90 guests. White-glove service, gorgeous presentation, and the filet was better than any steakhouse we've been to in San Diego. 5 stars, every category.",
      a: "Jean Laber",
      e: "Private Party · Coronado",
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
