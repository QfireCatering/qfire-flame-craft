import { createFileRoute, Link } from "@tanstack/react-router";
import chefTerry from "@/assets/chef-terry.jpg.asset.json";
import heroCollage from "@/assets/chef-terry-hero-collage.jpg.asset.json";
import heroFire from "@/assets/hero-fire.jpg";
import brisket from "@/assets/brisket.jpg";
import bobbyFlay from "@/assets/bobby-flay.png.asset.json";
import { CTASection } from "@/components/site/Sections";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chef Terry Matthews — The BBQ Daddy | Qfire Catering" },
      { name: "description", content: "Chef Terry Matthews — known as The BBQ Daddy — is the founder and executive chef of Qfire Catering. Bringing the fire since 2001, with 25+ years experience, 2,000+ events, a 4.9-star rating across every platform, and Food Network credits including Cutthroat Kitchen (Winner), Camp Cutthroat (Winner), BBQ Brawl Season 2 and the kitchen of Bobby Flay." },
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
          <img src={heroCollage.url} alt="Qfire Catering collage — Food Network, wood-fired smoker, wedding reception, corporate catering, Phoenix and San Diego" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />
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
        <div className="container-luxe grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/20">
              <img src={chefTerry.url} alt="Chef Terry Matthews — The BBQ Daddy" className="absolute inset-0 w-full h-full object-cover object-top" />
            </div>
            <div className="gold-rule mt-8" />
          </div>
          <div className="space-y-6 text-lg text-bone/75 leading-relaxed font-light">
            <p>
              Terry Matthews has been bringing the fire since <span className="text-gold/90">2001</span> — more than
              <span className="text-gold/90"> 25 years</span> behind live flame and over <span className="text-gold/90">2,000 events</span> served.
              He built Qfire Catering on a simple belief: a great meal is the centerpiece of every memorable night, and the people behind it should make it look effortless.
            </p>
            <p>
              His career has run from quiet private chef dinners to the brightest television kitchens in the country:
            </p>
            <ul className="space-y-2 text-bone/80 pl-5 list-disc marker:text-gold">
              <li><strong className="text-bone">Winner — Cutthroat Kitchen</strong> (Food Network)</li>
              <li><strong className="text-bone">Winner — Camp Cutthroat</strong> (Food Network)</li>
              <li><strong className="text-bone">BBQ Brawl Season 2</strong> — featured pitmaster (Food Network)</li>
              <li><strong className="text-bone">Cooked with Bobby Flay</strong> in his kitchen</li>
              <li><strong className="text-bone">International Chef Competition</strong> host & judge</li>
              <li><strong className="text-bone">Catering Coach & Mentor</strong> to caterers nationwide</li>
            </ul>
            <p>
              Friends, family and clients know him as "The BBQ Daddy" — a nickname earned one perfect brisket at a time.
              But the company he built is Qfire: a full-service catering operation that brings wood-fired flavor and steakhouse polish to weddings,
              corporate events and private parties across Phoenix Metro and San Diego County.
            </p>
            <p>
              The result speaks for itself — a <span className="text-gold/90">4.9-star rating</span> across Google, Yelp, WeddingWire and The Knot, and a roster of repeat clients who only have to hire one caterer ever again.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 bg-onyx">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { n: "25+", l: "Years Behind Fire" },
              { n: "2,000+", l: "Events Served" },
              { n: "4.9★", l: "Across All Platforms" },
              { n: "2×", l: "Food Network Champion" },
            ].map((s) => (
              <div key={s.l} className="bg-ink p-10 text-center">
                <div className="text-4xl lg:text-5xl font-display text-gold tracking-tight">{s.n}</div>
                <div className="mt-3 text-[0.65rem] tracking-[0.3em] uppercase text-bone/55">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-luxe">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 overflow-hidden border border-white/10">
              <img src={heroFire} alt="Chef Terry at the fire" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 overflow-hidden border border-white/10">
              <img src={bobbyFlay.url} alt="Chef Terry Matthews with Bobby Flay" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 overflow-hidden border border-white/10">
              <img src={brisket} alt="Brisket" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Hire the chef behind the camera." subtitle="Tell us about your event. Chef Terry's team will be in touch within 24 hours." />
    </>
  );
}
