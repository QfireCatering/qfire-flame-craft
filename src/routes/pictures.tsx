import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/site/Sections";
import privateGroup from "@/assets/gallery/pictures-page/private-group.png.asset.json";
import weddingSd from "@/assets/gallery/pictures-page/wedding-sd.png.asset.json";
import bbqPlatter from "@/assets/gallery/pictures-page/bbq-platter.avif.asset.json";
import ribPlate from "@/assets/gallery/pictures-page/rib-plate.avif.asset.json";
import bbqPlate from "@/assets/gallery/pictures-page/bbq-plate.avif.asset.json";
import steakPlate from "@/assets/gallery/pictures-page/steak-plate.avif.asset.json";
import bbqMeal from "@/assets/gallery/pictures-page/bbq-meal.avif.asset.json";
import steakLobster from "@/assets/gallery/pictures-page/steak-lobster.avif.asset.json";
import parkSetup from "@/assets/gallery/pictures-page/park-setup.avif.asset.json";
import fromGrill from "@/assets/gallery/pictures-page/from-grill.avif.asset.json";
import vegInCup from "@/assets/gallery/pictures-page/veg-in-cup.avif.asset.json";
import buffetSet2 from "@/assets/gallery/pictures-page/buffet-set-2.avif.asset.json";
import onsiteGrillMahi from "@/assets/gallery/pictures-page/onsite-grill-mahi.avif.asset.json";
import setUp1 from "@/assets/gallery/pictures-page/set-up-1.avif.asset.json";
import setUp2 from "@/assets/gallery/pictures-page/set-up-2.avif.asset.json";
import jobsiteTacos from "@/assets/gallery/pictures-page/jobsite-tacos.jpg.asset.json";

export const Route = createFileRoute("/pictures")({
  head: () => ({
    meta: [
      { title: "Event Gallery — Weddings, Corporate, Private Parties | Qfire" },
      { name: "description", content: "A curated photo gallery of recent Qfire Catering events — plated wedding dinners, backyard live-fire parties, corporate dinners under candlelight, hand-cut steaks, slow-smoked brisket and the team behind the fire across Phoenix and San Diego." },
      { property: "og:title", content: "Gallery — Qfire" },
      { property: "og:url", content: "/pictures" },
    ],
    links: [{ rel: "canonical", href: "/pictures" }],
  }),
  component: PicturesPage,
});

const masonry: { src: string; tall?: boolean; wide?: boolean }[] = [
  { src: weddingSd.url, wide: true }, { src: bbqPlatter.url }, { src: privateGroup.url, tall: true },
  { src: steakLobster.url }, { src: ribPlate.url }, { src: bbqMeal.url, wide: true },
  { src: bbqPlate.url }, { src: steakPlate.url, tall: true }, { src: weddingSd.url },
  { src: bbqPlatter.url, wide: true }, { src: steakLobster.url }, { src: bbqMeal.url },
];

function PicturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>A look at <span className="text-gold italic font-light">the table.</span></>}
        subtitle="Weddings. Corporate evenings. Private parties. The fire, the food, the rooms."
        image={weddingSd.url}
      />
      <section className="py-20">
        <div className="container-luxe">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-2">
            {masonry.map((m, i) => (
              <div key={i} className={`relative overflow-hidden group ${m.tall ? "row-span-2" : ""} ${m.wide ? "md:col-span-2" : ""}`}>
                <img src={m.src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
