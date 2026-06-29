import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Tv, Trophy, Flame } from "lucide-react";
import { PageHero, CTASection } from "@/components/site/Sections";
import chefTerry from "@/assets/chef-terry.jpg.asset.json";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Press & Media — Food Network Chef Terry Matthews | Qfire Catering" },
      { name: "description", content: "Chef Terry Matthews — The BBQ Daddy — featured on Food Network: Cutthroat Kitchen (Winner), Camp Cutthroat (Winner), BBQ Brawl Season 2, and the kitchen of Bobby Flay. Press appearances, television credits and media features behind Qfire Catering." },
      { property: "og:title", content: "Press & Media — Qfire Catering" },
      { property: "og:url", content: "/media" },
      { property: "og:image", content: chefTerry.url },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

const credits = [
  { icon: Trophy, title: "Cutthroat Kitchen", sub: "Winner — Food Network", detail: "Crowned champion in head-to-head sabotage cooking — proof of Chef Terry's range under pressure." },
  { icon: Trophy, title: "Camp Cutthroat", sub: "Winner — Food Network", detail: "Outdoor live-fire competition victory across multiple wilderness challenges." },
  { icon: Tv, title: "BBQ Brawl Season 2", sub: "Featured Pitmaster — Food Network", detail: "Selected to compete against the country's top pitmasters for the title of America's Master of 'Cue." },
  { icon: Flame, title: "Bobby Flay's Kitchen", sub: "Featured Cook", detail: "Cooked alongside Bobby Flay — sharpening the Signature Live Fire Steakhouse Catering technique that defines Qfire today." },
  { icon: Award, title: "International Chef Competition", sub: "Host & Judge", detail: "Tapped to host and judge international culinary competitions and live-fire showcases." },
  { icon: Award, title: "Catering Coach & Mentor", sub: "Industry Leadership", detail: "Mentors caterers and pitmasters nationwide on event execution, fire technique and hospitality standards." },
];

function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Press & Media"
        title={<>As seen on <span className="text-gold italic font-light">Food Network.</span></>}
        subtitle="A national television run, a Bobby Flay kitchen stretch and 25+ years of live-fire mastery — the credentials behind every Qfire event."
        image={chefTerry.url}
      />

      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {credits.map((c) => (
              <article key={c.title} className="bg-ink p-10 lg:p-12">
                <c.icon className="size-7 text-gold mb-6" strokeWidth={1.2} />
                <h2 className="text-2xl font-display text-bone">{c.title}</h2>
                <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mt-2">{c.sub}</div>
                <p className="mt-5 text-bone/70 leading-relaxed font-light">{c.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-onyx">
        <div className="container-luxe text-center max-w-3xl mx-auto">
          <div className="eyebrow justify-center mb-6">Bringing the fire since 2001</div>
          <h2 className="heading-md text-bone">
            <span className="text-gold italic font-light">25+ years</span> behind live fire. 2,000+ events. One Chef Terry standard.
          </h2>
          <p className="mt-8 text-bone/75 text-lg leading-relaxed font-light">
            From early backyard fire pits to national television stages, every Qfire event carries the same obsession with detail, hospitality and the heat under the food.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/about" className="btn-primary">Meet Chef Terry</Link>
            <Link to="/reviews" className="btn-ghost">Read Client Reviews</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
