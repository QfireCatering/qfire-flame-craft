import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/site/Sections";
import weddingTable from "@/assets/wedding-table.jpg";
import brisket from "@/assets/brisket.jpg";
import steak from "@/assets/steak.jpg";
import corporate from "@/assets/corporate.jpg";
import privateParty from "@/assets/private-party.jpg";
import buffet from "@/assets/buffet.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Qfire Catering" },
      { name: "description", content: "Wedding tips, corporate catering, private party ideas, venue spotlights, planning guides and food inspiration." },
      { property: "og:title", content: "Qfire Catering Blog" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { img: weddingTable, cat: "Wedding Tips", title: "Plated, buffet, or stations? Choosing your wedding service style.", date: "March 2026" },
  { img: brisket, cat: "Food Inspiration", title: "Why brisket belongs on your wedding menu (and how to serve it right).", date: "February 2026" },
  { img: corporate, cat: "Corporate Catering", title: "The investor dinner playbook: hospitality that closes the room.", date: "February 2026" },
  { img: steak, cat: "Planning Guides", title: "Steakhouse at home: a guide to upscale catering for private dinners.", date: "January 2026" },
  { img: privateParty, cat: "Private Party Ideas", title: "Backyard luxury: turning your home into the venue of the year.", date: "January 2026" },
  { img: buffet, cat: "Venue Spotlights", title: "Our favorite outdoor venues across Phoenix Metro and San Diego County.", date: "December 2025" },
];

const cats = ["Wedding Tips", "Corporate Catering", "Private Party Ideas", "Venue Spotlights", "Planning Guides", "Food Inspiration"];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={<>Field notes from <span className="text-gold italic font-light">the fire.</span></>}
        subtitle="Wedding tips, venue spotlights, planning guides and the occasional brisket philosophy."
        image={weddingTable}
      />
      <section className="py-20">
        <div className="container-luxe">
          <div className="flex flex-wrap gap-3 mb-14">
            {cats.map(c => (
              <button key={c} className="text-[0.65rem] tracking-[0.25em] uppercase px-5 py-3 border border-white/15 text-bone/80 hover:border-gold hover:text-gold transition-colors">
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p, i) => (
              <Link key={i} to="/blog" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <img src={p.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-3">{p.cat}</div>
                <h3 className="text-2xl font-display text-bone leading-tight group-hover:text-gold transition-colors">{p.title}</h3>
                <div className="mt-4 text-xs text-muted-foreground tracking-wider uppercase">{p.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
