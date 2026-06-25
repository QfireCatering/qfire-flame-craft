import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import phoenixAsset from "@/assets/phoenix.png.asset.json";
import sanDiegoAsset from "@/assets/san-diego.png.asset.json";
const phoenix = phoenixAsset.url;
const sanDiego = sanDiegoAsset.url;

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Catering Service Areas — Phoenix Metro & San Diego County | Qfire" },
      { name: "description", content: "Qfire Catering serves Phoenix Metro, Arizona and San Diego County, California — Scottsdale, Mesa, Chandler, Gilbert, La Jolla, Del Mar, Carlsbad, Rancho Santa Fe and every city in between. Choose your region for local wedding, corporate and private party catering." },
      { property: "og:title", content: "Choose Your Location — Qfire Catering" },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {regions.map((r) => (
            <Link key={r.key} to={r.href} className="group relative block aspect-[3/2] overflow-hidden border border-white/5">
              <img src={r.img} alt={r.name} loading="lazy" width={1600} height={1100}
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition-transform duration-[1500ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-0 px-8 lg:px-10 pt-8 lg:pt-10 pb-4 lg:pb-5 flex flex-col justify-end">
                <div className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">{r.state}</div>
                <div className="heading-lg text-bone group-hover:text-gold transition-colors duration-500">{r.name}</div>
                <p className="mt-6 text-sm text-bone/70 leading-relaxed">{r.cities.join(" · ")}</p>
                <div className="mt-10 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.28em] uppercase text-bone">
                  Enter {r.name === "Phoenix Metro" ? "Phoenix" : "San Diego"} Site
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
