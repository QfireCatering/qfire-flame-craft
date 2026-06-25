import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import phoenixAsset from "@/assets/phoenix.png.asset.json";
import sanDiegoAsset from "@/assets/san-diego.png.asset.json";
import heroAsset from "@/assets/private-parties-hero.png.asset.json";

export const Route = createFileRoute("/private-parties")({
  head: () => ({
    meta: [
      { title: "Private Party Catering in Phoenix & San Diego — Qfire" },
      { name: "description", content: "Luxury private party catering for birthdays, backyard BBQs, anniversaries, graduations, holidays, and family reunions across Phoenix Metro and San Diego County. Live charcoal grilling, premium steakhouse plates, and full-service hosting by Chef Terry Matthews." },
      { property: "og:title", content: "Private Party Catering — Qfire | Phoenix & San Diego" },
      { property: "og:description", content: "Restaurant-quality private party catering for birthdays, backyard parties, anniversaries, and private celebrations. Choose your region to begin." },
      { property: "og:url", content: "/private-parties" },
    ],
    links: [{ rel: "canonical", href: "/private-parties" }],
  }),
  component: PrivatePartyChooser,
});

function PrivatePartyChooser() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img src={heroAsset.url} alt="Luxury private party catering by Qfire" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
        <div className="container-luxe relative z-10 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="eyebrow text-gold mb-6">Private Party Catering</div>
            <h1 className="font-display text-5xl md:text-7xl text-bone leading-[0.95]">
              The party caterer <span className="italic text-gold font-light">guests talk about for years.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light leading-relaxed max-w-2xl">
              Live charcoal grilling, premium steakhouse plates, authentic BBQ, full-service hosting. Choose your region to get started.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-6">Where Shall We Cater</div>
            <h2 className="heading-lg text-bone">Two regions. One standard of excellence.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { to: "/private-party-catering-phoenix", title: "Phoenix Metro", img: phoenixAsset.url, body: "Scottsdale · Phoenix · Mesa · Tempe · Chandler · Gilbert · Paradise Valley · Cave Creek · Fountain Hills · Queen Creek · all of Phoenix Metro." },
              { to: "/private-party-catering-san-diego", title: "San Diego County", img: sanDiegoAsset.url, body: "La Jolla · Del Mar · Carlsbad · Encinitas · Rancho Santa Fe · Coronado · Poway · Oceanside · Pacific Beach · all of San Diego County." },
            ].map((r) => (
              <Link key={r.to} to={r.to} className="group relative aspect-[4/5] overflow-hidden block border border-gold/20 hover:border-gold transition-colors">
                <img src={r.img} alt={`${r.title} private party catering`} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${r.title === "San Diego County" ? "object-right" : ""}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="eyebrow text-gold mb-3">Private Party Catering</div>
                  <h3 className="font-display text-4xl md:text-5xl text-bone">{r.title}</h3>
                  <p className="mt-4 text-bone/80 font-light">{r.body}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1">
                    Enter {r.title} <ArrowRight className="size-3" />
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
