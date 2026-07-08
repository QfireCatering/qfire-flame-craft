import { Users, Award, Flame } from "lucide-react";

type RegionKey = "phoenix" | "san-diego";

const REGION_DATA: Record<
  RegionKey,
  { largest: string; region: string; eyebrow: string; flavor: string }
> = {
  phoenix: {
    largest: "2,000",
    region: "Phoenix Metro",
    eyebrow: "Built for Scale",
    flavor:
      "Corporate galas, grand openings, and multi-shift programs across the Valley — handled without a hiccup.",
  },
  "san-diego": {
    largest: "2,500",
    region: "San Diego County",
    eyebrow: "Built for Scale",
    flavor:
      "Beachfront galas, conferences, and luxury estates from La Jolla to Coronado — staffed and executed flawlessly.",
  },
};

export function GuestScaleStat({ regionKey }: { regionKey: RegionKey }) {
  const d = REGION_DATA[regionKey];
  return (
    <section className="border-y border-gold/15 bg-ink/60">
      <div className="container-luxe py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="eyebrow mb-4 text-gold">{d.eyebrow}</div>
            <h3 className="font-display text-bone text-3xl lg:text-5xl leading-tight">
              The largest {d.region} event we've served:{" "}
              <span className="text-gold italic font-light">{d.largest} guests.</span>
            </h3>
            <p className="mt-5 text-bone/65 leading-relaxed max-w-xl">{d.flavor}</p>
          </div>
          <div className="grid grid-cols-3 gap-px bg-white/5 border border-white/10">
            <div className="bg-ink p-6 text-center">
              <Users className="size-5 text-gold mx-auto mb-3" />
              <div className="font-display text-bone text-2xl lg:text-3xl">{d.largest}+</div>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-bone/55 mt-2">Largest Event</div>
            </div>
            <div className="bg-ink p-6 text-center">
              <Award className="size-5 text-gold mx-auto mb-3" />
              <div className="font-display text-bone text-2xl lg:text-3xl">2,000+</div>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-bone/55 mt-2">Events Catered</div>
            </div>
            <div className="bg-ink p-6 text-center">
              <Flame className="size-5 text-gold mx-auto mb-3" />
              <div className="font-display text-bone text-2xl lg:text-3xl">15+</div>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-bone/55 mt-2">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
