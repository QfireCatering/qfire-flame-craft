import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/hero-wedding-grilling.png.asset.json";
import weddingGrillingAsset from "@/assets/wedding-grilling-hero.png.asset.json";
import steakhouseBackyardAsset from "@/assets/steakhouse-backyard.png.asset.json";

const canonical = "https://qfire-flame-craft.lovable.app/outdoor-wedding-grilling";

export const Route = createFileRoute("/outdoor-wedding-grilling")({
  head: () => ({
    meta: [
      { title: "Outdoor Wedding Grilling — Live-Fire Wedding Catering Phoenix & San Diego | Qfire" },
      {
        name: "description",
        content:
          "Outdoor wedding grilling by Food Network veteran Chef Terry Matthews (BBQ Brawl, Cutthroat Kitchen). Live charcoal, wood-fired and steakhouse grilling for luxury outdoor weddings across Phoenix Metro and San Diego County. 15+ years, 2,000+ events, 4.9★.",
      },
      { property: "og:title", content: "Outdoor Wedding Grilling — Live-Fire Wedding Catering | Qfire" },
      {
        property: "og:description",
        content:
          "Live-fire, charcoal and wood-fired grilling right at your outdoor wedding — by Food Network veteran Chef Terry Matthews. Phoenix Metro & San Diego County.",
      },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://qfire-flame-craft.lovable.app${heroAsset.url}` },
      { name: "twitter:image", content: `https://qfire-flame-craft.lovable.app${heroAsset.url}` },
      {
        name: "keywords",
        content:
          "outdoor wedding grilling, outdoor wedding catering, live fire wedding catering, live steak grilling wedding, charcoal grilling wedding catering, wood fired wedding catering, on-site wedding grilling, backyard wedding catering, Phoenix outdoor wedding catering, San Diego outdoor wedding catering, luxury outdoor wedding caterer",
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Outdoor Wedding Grilling & Live-Fire Wedding Catering",
          name: "Outdoor Wedding Grilling — Qfire Catering",
          provider: { "@id": "https://qfire-flame-craft.lovable.app/#business" },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Phoenix Metro, Arizona" },
            { "@type": "AdministrativeArea", name: "San Diego County, California" },
          ],
          url: canonical,
          description:
            "Live-fire, charcoal and wood-fired grilling stations set up on-site at outdoor weddings across Phoenix Metro and San Diego County. Ribeyes, tri-tip, brisket and salmon grilled live in front of guests by Food Network veteran Chef Terry Matthews.",
        }),
      },
    ],
  }),
  component: OutdoorWeddingGrillingPage,
});

function OutdoorWeddingGrillingPage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Live-fire outdoor wedding grilling — Food Network Chef Terry Matthews grilling premium steaks at a luxury outdoor wedding, Qfire Catering Phoenix & San Diego"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="container-luxe relative z-10 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-gold">Outdoor Wedding Grilling</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95]">
              Grilled live <span className="italic text-gold font-light">at your wedding.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light max-w-2xl">
              Live charcoal, wood-fired and steakhouse grilling — set up on-site at your outdoor wedding by Food Network veteran{" "}
              <Link to="/about" className="underline decoration-gold/40 hover:decoration-gold underline-offset-4">
                Chef Terry Matthews
              </Link>
              . Serving luxury outdoor weddings across Phoenix Metro and San Diego County.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxe max-w-4xl">
          <div className="eyebrow mb-6">The Live-Fire Moment</div>
          <h2 className="heading-lg text-bone">Why couples book outdoor wedding grilling</h2>
          <div className="mt-8 space-y-6 text-bone/80 text-lg font-light leading-relaxed">
            <p>
              An outdoor wedding earns the right to feel unmistakably outdoor. That's what live-fire cooking delivers — the aroma of oak and mesquite drifting through cocktail hour, the visual of a chef flipping ribeyes and picanha over glowing coals, and food that leaves the grill and hits the plate within minutes.
            </p>
            <p>
              Qfire is Arizona and San Diego's premium live-fire wedding caterer. Chef Terry Matthews — featured on Food Network's{" "}
              <em>BBQ Brawl</em>, <em>Cutthroat Kitchen</em> and <em>Camp Cutthroat</em> — brings 15+ years and 2,000+ events of live-fire experience directly to your venue. Whether it's a backyard estate wedding in{" "}
              <Link to="/wedding-catering-phoenix" className="underline decoration-gold/40 hover:decoration-gold underline-offset-4">Paradise Valley</Link>{" "}
              or a coastal reception in{" "}
              <Link to="/wedding-catering-san-diego" className="underline decoration-gold/40 hover:decoration-gold underline-offset-4">La Jolla</Link>, the fire comes to you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-black/40 border-y border-white/5">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-6">Three Ways We Grill Live</div>
            <h2 className="heading-lg text-bone">Choose the flame that fits your day.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                to: "/wood-fired",
                title: "Wood-Fired BBQ",
                body: "Oak, mesquite and pecan-smoked brisket, tri-tip, pulled pork and ribs. The signature BBQ Daddy experience — carved live at your reception.",
                img: weddingGrillingAsset.url,
                alt: "Wood-fired BBQ station at an outdoor wedding — Qfire Catering",
              },
              {
                to: "/steakhouse",
                title: "Live Steak Grilling",
                body: "Ribeyes, filets, picanha and NY strips grilled to order over live charcoal. A five-course steakhouse experience, plated at your outdoor venue.",
                img: steakhouseBackyardAsset.url,
                alt: "Live steak grilling for an outdoor wedding — Qfire Catering",
              },
              {
                to: "/steak-seafood-menu",
                title: "Steak & Seafood",
                body: "Add lobster tails, grilled salmon, mahi mahi and snapper alongside premium cuts — a live-fire surf & turf built for luxury weddings.",
                img: heroAsset.url,
                alt: "Steak and seafood live-fire wedding catering — Qfire Catering",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group relative aspect-[4/5] overflow-hidden block border border-gold/20 hover:border-gold transition-colors"
              >
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="eyebrow text-gold mb-3">Live-Fire Menu</div>
                  <h3 className="font-display text-3xl text-bone">{c.title}</h3>
                  <p className="mt-3 text-bone/80 font-light text-sm leading-relaxed">{c.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1">
                    Explore <ArrowRight className="size-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxe max-w-3xl text-center">
          <div className="eyebrow justify-center mb-6">Book the Fire</div>
          <h2 className="heading-lg text-bone">Bring the flame to your outdoor wedding.</h2>
          <p className="mt-6 text-bone/75 text-lg font-light leading-relaxed">
            Tell us your date, venue and guest count. We'll design a live-fire menu, quote regional pricing, and hold your date. Explore <Link to="/weddings" className="underline decoration-gold/40 hover:decoration-gold underline-offset-4">wedding catering</Link>, <Link to="/pricing" className="underline decoration-gold/40 hover:decoration-gold underline-offset-4">pricing</Link>, our <Link to="/pictures" className="underline decoration-gold/40 hover:decoration-gold underline-offset-4">wedding gallery</Link>, and <Link to="/wedding-faq" className="underline decoration-gold/40 hover:decoration-gold underline-offset-4">wedding FAQs</Link>.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-primary">Request Your Quote</Link>
            <Link to="/menus" className="btn-ghost">Browse Menus</Link>
          </div>
        </div>
      </section>
    </>
  );
}
