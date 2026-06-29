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
import kabob from "@/assets/gallery/pictures-page/kabob.png.asset.json";
import peachCobbler from "@/assets/gallery/pictures-page/peach-cobbler.avif.asset.json";
import setUp6 from "@/assets/gallery/pictures-page/set-up-6.avif.asset.json";
import weddingBuffetTower from "@/assets/gallery/pictures-page/wedding-buffet-tower.jpg.asset.json";

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

const masonry: { src: string; alt: string; tall?: boolean; wide?: boolean }[] = [
  { src: weddingSd.url, alt: "San Diego County luxury wedding reception catered by Qfire Catering — long candlelit head table under string lights", wide: true },
  { src: bbqPlatter.url, alt: "Wood-fired catering platter — Texas-style brisket, pulled pork and smoked sausage by Chef Terry Matthews, The BBQ Daddy" },
  { src: privateGroup.url, alt: "Private party guests gathered around a Qfire Catering live-fire grill in Phoenix Metro Arizona", tall: true },
  { src: steakLobster.url, alt: "Surf and turf plate — charcoal-grilled ribeye and cold-water lobster tail from the Signature Live Fire Steakhouse Experience" },
  { src: ribPlate.url, alt: "Slow-smoked St. Louis-style ribs plated with coleslaw and cornbread for a Phoenix backyard catering event" },
  { src: bbqMeal.url, alt: "Wood-fire catering buffet plate — sliced brisket, smoked chicken and house sides served family-style by Qfire Catering", wide: true },
  { src: bbqPlate.url, alt: "Catered wood-fire dinner plate with brisket, baked beans and mac and cheese at a Qfire Catering private event" },
  { src: steakPlate.url, alt: "Plated steakhouse course — hand-cut filet mignon with garlic mashed potatoes and grilled asparagus by Qfire Catering", tall: true },
  { src: onsiteGrillMahi.url, alt: "Onsite live-fire grilling — fresh mahi-mahi seared over charcoal by Chef Terry at a San Diego County coastal event" },
  { src: buffetSet2.url, alt: "Restaurant-quality wedding catering buffet line styled by the Qfire Catering team across Phoenix Metro and San Diego County", wide: true },
  { src: fromGrill.url, alt: "Pitmaster's view from the live-fire grill — wood-fired steaks and chicken catered on-site by Qfire Catering" },
  { src: vegInCup.url, alt: "Chilled vegetable crudité cups passed at a Qfire Catering corporate reception" },
  { src: setUp1.url, alt: "Qfire Catering buffet setup with black chafing dishes, gold accents and elegant signage for a Phoenix Metro luxury event", wide: true },
  { src: parkSetup.url, alt: "Outdoor park catering setup — full live-fire mobile kitchen, buffet, and staff by Qfire Catering" },
  { src: jobsiteTacos.url, alt: "Corporate jobsite taco catering for a 100-guest crew lunch in Phoenix Arizona by Qfire Catering", tall: true },
  { src: setUp2.url, alt: "Wedding catering setup — linen-draped buffet with floral accents at a Qfire Catering event" },
  { src: bbqMeal.url, alt: "Wood-fire dinner plate with smoked brisket, ribs and signature sides plated by Qfire Catering" },
  { src: weddingSd.url, alt: "San Diego County wedding reception under string lights with the Qfire Catering team plating dinner", wide: true },
  { src: weddingBuffetTower.url, alt: "Tiered wedding buffet centerpiece tower — premium presentation by Qfire Catering for a luxury reception", tall: true },
  { src: kabob.url, alt: "Antipasto kabob hors d'oeuvre — passed appetizer from the Signature Live Fire Steakhouse Catering menu by Qfire" },
  { src: peachCobbler.url, alt: "Warm Southern peach cobbler dessert served at a Qfire Catering wood-fire dinner" },
  { src: setUp6.url, alt: "Elegant Qfire Catering tablescape with charger plates, glassware and gold flatware for a luxury wedding reception", wide: true },
  { src: kabob.url, alt: "Caprese antipasto skewer with cherry tomato, mozzarella and basil — passed appetizer by Qfire Catering" },
  { src: peachCobbler.url, alt: "Individual peach cobbler dessert cup plated for a private party catered by Qfire Catering" },
];

function PicturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>A look at <span className="text-gold italic font-light">the table.</span></>}
        subtitle="Weddings. Corporate evenings. Private parties. The fire, the food, the rooms."
        image={weddingSd.url}
        imageAlt="Qfire Catering event gallery — luxury weddings, corporate dinners and private parties catered across Phoenix Metro and San Diego County"
      />
      <section className="py-20">
        <div className="container-luxe">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-2">
            {masonry.map((m, i) => (
              <div key={i} className={`relative overflow-hidden group ${m.tall ? "row-span-2" : ""} ${m.wide ? "md:col-span-2" : ""}`}>
                <img src={m.src} alt={m.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
