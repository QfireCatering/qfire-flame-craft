import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import phoenixAsset from "@/assets/phoenix-metro.png.asset.json";
import sanDiegoAsset from "@/assets/san-diego.png.asset.json";
import corpHeroAsset from "@/assets/corp-hero.png.asset.json";

const phoenix = phoenixAsset.url;
const sanDiego = sanDiegoAsset.url;
const hero = corpHeroAsset.url;

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Catering Phoenix & San Diego | Office, Executive, Holiday Party & BBQ Corporate Catering — Qfire" },
      { name: "description", content: "Premium corporate catering by Qfire — office lunch catering, executive dinner catering, holiday party catering, employee appreciation, construction-site catering, BBQ corporate catering and live-fire grilling across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, San Diego, La Jolla, Carlsbad, Del Mar and Rancho Santa Fe. 2,000+ events · 4.9★ · COI-ready." },
      { property: "og:title", content: "Corporate Catering — Qfire | Phoenix & San Diego Office & BBQ Corporate Catering" },
      { property: "og:description", content: "Reliable, on-time, restaurant-quality corporate catering across Phoenix and San Diego — executive dinners, holiday parties, employee appreciation, construction-site BBQ catering." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/corporate" },
      { name: "keywords", content: "corporate catering, corporate catering near me, office catering, office lunch catering, executive dinner catering, holiday party catering, employee appreciation catering, company party catering, business catering, corporate BBQ catering, BBQ corporate catering, construction site catering, jobsite catering, corporate catering Phoenix, corporate catering Scottsdale, corporate catering Mesa, corporate catering Tempe, corporate catering San Diego, corporate catering La Jolla, corporate catering Carlsbad" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/corporate" }],
  }),
  component: CorporateHub,
});

function CorporateHub() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src={hero} alt="Executive corporate catering by Qfire Catering" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="container-luxe relative z-10 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-gold">Corporate Catering</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95]">
              Corporate catering <span className="italic text-gold font-light">that makes you look good.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light max-w-2xl">
              Reliable, on-time, restaurant-quality catering for executive teams, HR departments, and construction sites — across Phoenix Metro and San Diego County.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="eyebrow mb-6">Choose Your Region</div>
            <h2 className="heading-lg text-bone">Where is your team?</h2>
            <p className="mt-6 text-bone/70 text-lg font-light leading-relaxed">
              We cater corporate events across two regions. Select yours for cities served, local case studies, and a regional team contact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { to: "/corporate-catering-phoenix", img: phoenix, name: "Phoenix Metro", cities: "Scottsdale · Paradise Valley · Mesa · Chandler · Gilbert · Tempe · Glendale · Peoria · Queen Creek" },
              { to: "/corporate-catering-san-diego", img: sanDiego, name: "San Diego County", cities: "La Jolla · Del Mar · Carlsbad · Rancho Santa Fe · Coronado · Encinitas · Mission Valley · Poway" },
            ].map((r) => (
              <Link key={r.to} to={r.to} className="group relative aspect-[4/5] overflow-hidden block border border-gold/20 hover:border-gold transition-colors">
                <img src={r.img} alt={`${r.name} corporate catering`} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${r.name === "San Diego County" ? "object-right" : ""}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="eyebrow text-gold mb-3">Corporate Catering</div>
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
