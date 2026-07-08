import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import phoenixAsset from "@/assets/phoenix-metro.png.asset.json";
import sanDiegoAsset from "@/assets/san-diego.png.asset.json";
import weddingCoupleAsset from "@/assets/wedding-couple.png.asset.json";

const phoenix = phoenixAsset.url;
const sanDiego = sanDiegoAsset.url;
const hero = weddingCoupleAsset.url;

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Wedding Catering Phoenix & San Diego | BBQ Wedding Catering, Wood-Fire & Steakhouse Wedding Caterer — Qfire" },
      { name: "description", content: "Luxury wedding catering by Qfire — BBQ wedding catering, wood-fire wedding catering and steakhouse wedding catering with live charcoal grilling, premium steaks, full-service buffets and plated dinners. Wedding caterer near me for Phoenix, Scottsdale, Paradise Valley, Mesa, Chandler, Gilbert, San Diego, La Jolla, Del Mar, Carlsbad, Rancho Santa Fe and Coronado. 2,000+ weddings · 4.9★ · Featured on Food Network." },
      { property: "og:title", content: "Wedding Catering Phoenix & San Diego — BBQ & Steakhouse Wedding Caterer | Qfire" },
      { property: "og:description", content: "Wood-fire flavors, steakhouse polish. Full-service wedding catering, BBQ wedding catering and plated dinners by Chef Terry Matthews across Phoenix Metro and San Diego County." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/weddings" },
      { name: "keywords", content: "wedding catering, wedding caterer near me, BBQ wedding catering, wood-fire wedding catering, steakhouse wedding catering, wedding catering Phoenix, wedding catering Scottsdale, wedding catering Paradise Valley, wedding catering Mesa, wedding catering San Diego, wedding catering La Jolla, wedding catering Del Mar, wedding catering Carlsbad, wedding catering Rancho Santa Fe, wedding catering Coronado, wedding BBQ caterer, wedding steakhouse caterer, luxury wedding catering, plated wedding catering, buffet wedding catering, live-fire wedding catering" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/weddings" }],
  }),
  component: WeddingsHub,
});

function WeddingsHub() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src={hero} alt="Luxury wedding reception catered by Qfire" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "50% 85%" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="container-luxe relative z-10 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-gold">Luxury Wedding Catering</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95]">
              A wedding meal <span className="italic text-gold font-light">they'll remember.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light max-w-2xl">
              Live charcoal grilling, premium Steakhouse Experience plates, full-service staffing — across Phoenix Metro and San Diego County.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="eyebrow mb-6">Choose Your Region</div>
            <h2 className="heading-lg text-bone">Where is your wedding?</h2>
            <p className="mt-6 text-bone/70 text-lg font-light leading-relaxed">
              We cater luxury weddings across two regions. Select yours for cities served, venue experience, and local couple reviews.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { to: "/wedding-catering-phoenix", img: phoenix, name: "Phoenix Metro", cities: "Scottsdale · Paradise Valley · Mesa · Chandler · Gilbert · Tempe · Queen Creek" },
              { to: "/wedding-catering-san-diego", img: sanDiego, name: "San Diego County", cities: "La Jolla · Del Mar · Carlsbad · Rancho Santa Fe · Coronado · Encinitas" },
            ].map((r) => (
              <Link key={r.to} to={r.to} className="group relative aspect-[4/5] overflow-hidden block border border-gold/20 hover:border-gold transition-colors">
                <img src={r.img} alt={`${r.name} wedding catering`} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${r.name === "San Diego County" ? "object-right" : ""}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="eyebrow text-gold mb-3">Wedding Catering</div>
                  <h3 className="font-display text-4xl md:text-5xl text-bone">{r.name}</h3>
                  <p className="mt-4 text-bone/80 font-light">{r.cities}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1">
                    Enter {r.name} <ArrowRight className="size-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
