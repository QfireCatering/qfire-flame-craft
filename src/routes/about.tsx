import { createFileRoute, Link } from "@tanstack/react-router";
import chefTerry from "@/assets/chef-terry.jpg.asset.json";
import heroFireAsset from "@/assets/hero-fire.jpg.asset.json";
const heroFire = heroFireAsset.url;
import brisket from "@/assets/brisket.jpg";
import { CTASection } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chef Terry — Qfire Catering" },
      { name: "description", content: "Chef Terry Matthews — known to friends as The BBQ Daddy — is the owner of Qfire Catering. Food Network veteran with 13+ years and 2,000+ events." },
      { property: "og:title", content: "Chef Terry Matthews — Qfire" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: chefTerry.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <img src={chefTerry.url} alt="Chef Terry Matthews" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-transparent" />
        </div>
        <div className="container-luxe relative z-10 pt-40 pb-20">
          <div className="eyebrow mb-6">Meet The Chef</div>
          <h1 className="heading-xl text-bone max-w-4xl">
            Chef Terry Matthews.
            <span className="block text-bone/55 italic font-light text-2xl lg:text-4xl mt-4">
              Known to friends as "The BBQ Daddy."
            </span>
          </h1>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <div>
            <div className="gold-rule mb-8" />
            <h2 className="heading-md text-bone">From the pit to the plate.</h2>
          </div>
          <div className="space-y-6 text-lg text-bone/75 leading-relaxed font-light">
            <p>
              Terry Matthews built Qfire Catering on a simple belief: a great meal is the
              centerpiece of every memorable night. Thirteen years in, with more than 2,000
              events under his belt, that belief has only sharpened.
            </p>
            <p>
              His career has run from quiet private chef dinners to the brightest television
              kitchens in the country. <em className="text-gold/90 not-italic">Cutthroat Kitchen</em>{" "}
              champion. <em className="text-gold/90 not-italic">BBQ Brawl Season 2</em>. A stretch on{" "}
              <em className="text-gold/90 not-italic">Camp Cutthroat</em>. Time spent in the kitchen
              of Bobby Flay.
            </p>
            <p>
              Friends, family and clients know him as "The BBQ Daddy" — a nickname earned
              one perfect brisket at a time. But the company he built is Qfire: a full-service
              catering operation that brings wood-fired flavor and steakhouse polish to weddings,
              corporate events and private parties across Phoenix Metro and San Diego County.
            </p>
            <p>
              The thing clients say most? That Chef Terry treats every event like it's his own
              family's. Warm with your guests. Surgical with your timeline. The kind of caterer
              you only have to hire once — because you know who you're calling next time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-onyx">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { n: "13+", l: "Years Catering" },
              { n: "2,000+", l: "Events Served" },
              { n: "4×", l: "Food Network Appearances" },
              { n: "1", l: "Cutthroat Kitchen Win" },
            ].map((s) => (
              <div key={s.l} className="bg-ink p-10 text-center">
                <div className="text-4xl lg:text-5xl font-display text-gold tracking-tight">{s.n}</div>
                <div className="mt-3 text-[0.65rem] tracking-[0.3em] uppercase text-bone/55">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={heroFire} alt="Chef Terry at the fire" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={brisket} alt="Brisket" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <CTASection title="Hire the chef behind the camera." subtitle="Tell us about your event. Chef Terry's team will be in touch within 24 hours." />
    </>
  );
}
