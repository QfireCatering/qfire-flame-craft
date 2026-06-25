import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/site/Sections";
import { blogPosts } from "@/lib/blog-posts";
import weddingCoupleAsset from "@/assets/wedding-couple.png.asset.json";

const heroImage = weddingCoupleAsset.url;

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Qfire Catering Journal — Wedding, Corporate & BBQ Insights" },
      {
        name: "description",
        content:
          "Field notes from the fire: wedding planning playbooks, corporate catering strategy, private party hosting, venue spotlights, seasonal menu inspiration and pitmaster technique from Chef Terry Matthews — The BBQ Daddy.",
      },
      { property: "og:title", content: "The Qfire Catering Journal" },
      {
        property: "og:description",
        content:
          "Wedding, corporate and private party catering insight from Chef Terry Matthews — written for the host who wants every detail right.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const cats = Array.from(new Set(blogPosts.map((p) => p.category)));

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            Field notes from{" "}
            <span className="text-gold italic font-light">the fire.</span>
          </>
        }
        subtitle="Wedding tips, venue spotlights, planning guides and the occasional brisket philosophy."
        image={heroImage}
      />
      <section className="py-20">
        <div className="container-luxe">
          <div className="flex flex-wrap gap-3 mb-14">
            {cats.map((c) => (
              <span
                key={c}
                className="text-[0.65rem] tracking-[0.25em] uppercase px-5 py-3 border border-white/15 text-bone/80"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-3">
                  {p.category}
                </div>
                <h3 className="text-2xl font-display text-bone leading-tight group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-bone/65 text-sm leading-relaxed line-clamp-2">
                  {p.excerpt}
                </p>
                <div className="mt-4 text-xs text-muted-foreground tracking-wider uppercase">
                  {p.date} · {p.readMinutes} min read
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
