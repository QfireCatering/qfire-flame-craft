import { createFileRoute, Link } from "@tanstack/react-router";
import chefTerry from "@/assets/chef-terry-maroon.png.asset.json";
import heroCollage from "@/assets/chef-terry-hero-collage.jpg.asset.json";
import g1 from "@/assets/gallery/about-chef/me_couple.avif.asset.json";
import g2 from "@/assets/gallery/about-chef/me_couple_3.avif.asset.json";
import g3 from "@/assets/gallery/about-chef/bbq_daddy.avif.asset.json";
import g4 from "@/assets/gallery/about-chef/bbq_daddy_3.avif.asset.json";
import g5 from "@/assets/gallery/about-chef/bbq_dddy_3.avif.asset.json";
import g6 from "@/assets/gallery/about-chef/onsite_grill_4.avif.asset.json";
import g7 from "@/assets/gallery/about-chef/park_set_up-3.avif.asset.json";
import bf1 from "@/assets/behind-fire/bf1.jpg.asset.json";
import bf2 from "@/assets/behind-fire/bf2.jpg.asset.json";
import bf3 from "@/assets/behind-fire/bf3.jpg.asset.json";
import bf4 from "@/assets/behind-fire/bf4.jpg.asset.json";
import bf5 from "@/assets/behind-fire/bf5.jpg.asset.json";
import bf6 from "@/assets/behind-fire/bf6.jpg.asset.json";
import bf7 from "@/assets/behind-fire/bf7.jpg.asset.json";
import bf8 from "@/assets/behind-fire/bf8.jpg.asset.json";
import bf9 from "@/assets/behind-fire/IMG_0862.jpg.asset.json";
import bf10 from "@/assets/behind-fire/IMG_0863.jpg.asset.json";
import bf11 from "@/assets/behind-fire/IMG_0873.jpg.asset.json";
import bf12 from "@/assets/behind-fire/IMG_0874.jpg.asset.json";
import bf13 from "@/assets/behind-fire/IMG_2395.jpg.asset.json";
import bf14 from "@/assets/behind-fire/IMG_5739.jpg.asset.json";
import { CTASection } from "@/components/site/Sections";
import { DefinitiveContent } from "@/components/site/DefinitiveContent";
import { definitiveCopy } from "@/lib/definitive-copy";

const chefGallery = [
  { src: g1.url, alt: "Chef Terry Matthews with a wedding couple — Qfire Catering" },
  { src: g2.url, alt: "Chef Terry celebrating with newlyweds after a wood-fired reception" },
  { src: g3.url, alt: "The BBQ Daddy in red chef coat at a Qfire event" },
  { src: g4.url, alt: "Chef Terry Matthews working the live fire at a Qfire wedding" },
  { src: g5.url, alt: "The BBQ Daddy plating signature wood-fired entrées" },
  { src: g6.url, alt: "Qfire on-site grilling station with Chef Terry" },
  { src: g7.url, alt: "Qfire Catering park setup — Phoenix Metro private event" },
  { src: bf1.url, alt: "Chef Terry with bride and groom under string lights — Arizona desert wedding catering by Qfire" },
  { src: bf2.url, alt: "Chef Terry celebrating with newlyweds at an evening reception — Qfire wedding catering" },
  { src: bf3.url, alt: "The BBQ Daddy with bride and groom at a Qfire-catered reception" },
  { src: bf4.url, alt: "Chef Terry posing with bride and groom at a barn wedding — Qfire Catering" },
  { src: bf5.url, alt: "Chef Terry with bride and groom after a wood-fired wedding dinner" },
  { src: bf6.url, alt: "Chef Terry with bride and groom on the dance floor — Qfire wedding catering" },
  { src: bf7.url, alt: "Chef Terry with newlyweds at an elegant reception — Qfire Catering" },
  { src: bf8.url, alt: "Chef Terry with bride and groom at an Arizona backyard wedding — Qfire Catering" },
  { src: bf9.url, alt: "Chef Terry with bride and groom under string lights at an evening reception — Qfire wedding catering" },
  { src: bf10.url, alt: "Chef Terry celebrating beside the wedding cake with the newlyweds — Qfire Catering" },
  { src: bf11.url, alt: "Chef Terry with bride, groom and ring bearer under twinkle lights — Qfire wedding catering" },
  { src: bf12.url, alt: "Chef Terry with bride and groom at a rustic barn wedding — Qfire Catering" },
  { src: bf13.url, alt: "Chef Terry lifted by bride and groom on the dance floor — Qfire wedding catering" },
  { src: bf14.url, alt: "Chef Terry with bride and groom at an outdoor destination reception — Qfire Catering" },
];


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chef Terry Matthews — The BBQ Daddy | Qfire Catering" },
      { name: "description", content: "Chef Terry Matthews — known as The BBQ Daddy — is the founder and executive chef of Qfire Catering. Bringing the fire since 2001, with 13+ years experience, 2,500+ events, a 4.9-star rating across every platform, and Food Network credits including Cutthroat Kitchen (Winner), Camp Cutthroat (Winner), BBQ Brawl Season 2 and the kitchen of Bobby Flay." },
      { property: "og:title", content: "Chef Terry Matthews — Qfire" },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/about" },
      { property: "og:image", content: chefTerry.url },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/about" }],
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
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/20">
              <img src={chefTerry.url} alt="Chef Terry Matthews — The BBQ Daddy" className="absolute inset-0 w-full h-full object-cover object-top" />
            </div>
            <div className="gold-rule mt-8 mx-auto lg:mx-0 w-12" />
          </div>
          <div className="space-y-6 text-lg text-bone/75 leading-relaxed font-light">
            <p>
              Terry Matthews has been bringing the fire since <span className="text-gold/90">2001</span> — more than
              <span className="text-gold/90"> 15 years</span> behind live flame and over <span className="text-gold/90">2,000 events</span> served.
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
              But the company he built is Qfire: a full-service catering operation that brings wood-fired flavor and Steakhouse Experience polish to weddings,
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
              { n: "15+", l: "Years Behind Fire" },
              { n: "2,500+", l: "Events Served" },
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

      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="eyebrow mb-6">Behind The Fire</div>
          <h2 className="heading-lg text-bone mb-12 max-w-3xl">A look at <span className="italic font-light text-gold">Chef Terry</span> in his element.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {chefGallery.map((img, i) => (
              <div key={i} className={`relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"}`}>
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <DefinitiveContent
        topic="Chef Terry & Qfire Catering"
        region="every client we work with"
        {...definitiveCopy.about}
      />

      <CTASection title="Hire the chef behind the camera." subtitle="Tell us about your event. Chef Terry's team will be in touch within 24 hours." />
    </>
  );
}
