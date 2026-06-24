import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/site/Sections";
import weddingTable from "@/assets/wedding-table.jpg";
import brisket from "@/assets/brisket.jpg";
import steak from "@/assets/steak.jpg";
import chefTerry from "@/assets/chef-terry.jpg.asset.json";
import terryChefBlack from "@/assets/terry-chef-black.jpg.asset.json";
import terryBlackShirt from "@/assets/terry-black-shirt.jpg.asset.json";
import terryRedChef from "@/assets/terry-red-chef.jpg.asset.json";

export const Route = createFileRoute("/pictures")({
  head: () => ({
    meta: [
      { title: "Gallery — Qfire Catering" },
      { name: "description", content: "Photo gallery of Qfire Catering weddings, corporate events, private parties, food and Chef Terry." },
      { property: "og:title", content: "Gallery — Qfire" },
      { property: "og:url", content: "/pictures" },
    ],
    links: [{ rel: "canonical", href: "/pictures" }],
  }),
  component: PicturesPage,
});

const masonry: { src: string; tall?: boolean; wide?: boolean }[] = [
  { src: weddingTable, wide: true }, { src: brisket }, { src: chefTerry.url, tall: true },
  { src: steak }, { src: terryBlackShirt.url }, { src: terryChefBlack.url, wide: true },
  { src: terryRedChef.url }, { src: terryChefBlack.url, tall: true }, { src: weddingTable },
  { src: brisket, wide: true }, { src: steak }, { src: terryBlackShirt.url },
];

function PicturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>A look at <span className="text-gold italic font-light">the table.</span></>}
        subtitle="Weddings. Corporate evenings. Private parties. The fire, the food, the rooms."
        image={weddingTable}
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
