import { Star } from "lucide-react";

type RegionKey = "phoenix" | "san-diego";

type Review = { q: string; a: string; e: string };

const REVIEWS: Record<RegionKey, Review[]> = {
  phoenix: [
    {
      q: "The live charcoal steak station was the moment of the night. Our Scottsdale guests still text us about the ribeye nine months later.",
      a: "Sophia & James",
      e: "Scottsdale · 220 guests",
    },
    {
      q: "We hosted a corporate gala in Phoenix for 1,400 people. Hot food, perfect timing, flawless service. They make it look easy.",
      a: "Marcus W., VP Events",
      e: "Downtown Phoenix · 1,400 guests",
    },
    {
      q: "Plated steakhouse dinner in our backyard for my husband's 60th. It felt like Mastro's came to Paradise Valley.",
      a: "Jennifer S.",
      e: "Paradise Valley · Milestone Birthday",
    },
  ],
  "san-diego": [
    {
      q: "Our Rancho Santa Fe wedding was unforgettable. The surf & turf was restaurant quality and the team was impeccable.",
      a: "Lauren & Mark",
      e: "Rancho Santa Fe · 240 guests",
    },
    {
      q: "We did a 2,200-guest brand activation in Del Mar. Chef Terry's team kept the line moving and the steaks coming all night.",
      a: "Priya R., Brand Director",
      e: "Del Mar · 2,200 guests",
    },
    {
      q: "Coronado beachfront plated dinner for 90. White-glove service, gorgeous presentation, and the filet was better than any steakhouse in town.",
      a: "Michael & Daniel",
      e: "Coronado · 90 guests",
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
            Rated <span className="text-gold italic font-light">4.9 stars</span> across hundreds of {regionLabel} events.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.a}
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
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
