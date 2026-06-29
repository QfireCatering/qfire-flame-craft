import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { regions } from "@/lib/site";
import { DefinitiveContent } from "@/components/site/DefinitiveContent";
import { definitiveCopy } from "@/lib/definitive-copy";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — Qfire Catering (Phoenix Metro & San Diego County)" },
      {
        name: "description",
        content:
          "Wood-fired catering across Phoenix Metro and San Diego County. Scottsdale, Mesa, Chandler, La Jolla, Del Mar, Carlsbad, Encinitas and every city in between.",
      },
      { property: "og:title", content: "Service Areas — Qfire Catering" },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/service-areas" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/service-areas" }],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <div className="pt-32 lg:pt-40 pb-24 bg-ink">
      <div className="container-luxe">
        <div className="max-w-3xl">
          <div className="eyebrow mb-8">Service Areas</div>
          <h1 className="heading-xl text-bone">
            Two coasts. <span className="italic text-gold font-light">One standard.</span>
          </h1>
          <p className="mt-8 text-xl text-bone/70 font-light leading-relaxed max-w-2xl">
            We travel. We set up. We bring the fire. From private estates in
            Paradise Valley to clifftop weddings in Del Mar — full-service
            catering for every city below.
          </p>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {Object.values(regions).map((r) => (
            <div key={r.key} className="bg-onyx p-10 lg:p-14">
              <div className="eyebrow mb-4">{r.state}</div>
              <h2 className="heading-md text-bone mb-2">{r.name}</h2>
              <p className="text-bone/70 mt-4 leading-relaxed">{r.tagline}</p>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-bone/80">
                {r.cities.map((c) => (
                  <div key={c} className="text-sm">· {c}</div>
                ))}
              </div>
              <Link
                to={`/${r.key}`}
                className="mt-10 inline-flex items-center gap-2 text-gold hover:underline underline-offset-4"
              >
                Explore {r.shortName} catering <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl">
          <p className="text-bone/60 leading-relaxed">
            Don't see your city? We travel for the right event. Tell us where
            and when — we'll quote it.
          </p>
          <Link to="/quote" className="btn-primary mt-8">
            Request a Quote <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
      <DefinitiveContent topic="Qfire Service Areas" region="Phoenix Metro & San Diego County" {...definitiveCopy.locations} />
    </div>
  );
}
