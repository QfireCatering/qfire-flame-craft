import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { DefinitiveContent } from "@/components/site/DefinitiveContent";
import { definitiveCopy } from "@/lib/definitive-copy";
import phoenixAsset from "@/assets/phoenix-metro.png.asset.json";
import sanDiegoAsset from "@/assets/san-diego.png.asset.json";
const phoenix = phoenixAsset.url;
const sanDiego = sanDiegoAsset.url;

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Catering Service Areas — Phoenix Metro & San Diego County | Qfire" },
      { name: "description", content: "Qfire Catering serves Phoenix Metro, Arizona and San Diego County, California — Scottsdale, Mesa, Chandler, Gilbert, La Jolla, Del Mar, Carlsbad, Rancho Santa Fe and every city in between. Choose your region for local wedding, corporate and private party catering." },
      { property: "og:title", content: "Choose Your Location — Qfire Catering" },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/locations" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/locations" }],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const regions = [
    { key: "phoenix", img: phoenix, name: "Phoenix Metro", state: "Arizona",
      cities: ["Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert", "Glendale", "Surprise", "Avondale", "Goodyear", "Peoria"],
      href: "/phoenix" as const },
    { key: "san-diego", img: sanDiego, name: "San Diego County", state: "California",
      cities: ["San Diego", "Carlsbad", "Encinitas", "Del Mar", "Rancho Santa Fe", "Poway", "La Jolla", "Escondido", "Vista", "Oceanside"],
      href: "/san-diego" as const },
  ];

  return (
    <div className="pt-32 lg:pt-40 pb-24">
      <div className="container-luxe">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">Serving Two Regions</div>
          <h1 className="heading-xl text-bone">Choose your location.</h1>
          <p className="mt-8 text-xl text-bone/70 leading-relaxed font-light">
            Two regions. One standard of catering. Select where your event lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {regions.map((r) => (
            <Link key={r.key} to={r.href} className="group relative aspect-[4/5] overflow-hidden block border border-gold/20 hover:border-gold transition-colors">
              <img src={r.img} alt={r.name} loading="lazy" width={1600} height={1100}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${r.key === "san-diego" ? "object-right" : ""}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="eyebrow text-gold mb-3">Catering Region</div>
                <h3 className="font-display text-4xl md:text-5xl text-bone">{r.name}</h3>
                <p className="mt-4 text-bone/80 font-light">{r.cities.join(" · ")}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1">
                  Enter {r.name} <ArrowUpRight className="size-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <DefinitiveContent topic="Qfire Service Regions" region="Phoenix Metro & San Diego County" {...definitiveCopy.locations} />
    </div>
  );
}
