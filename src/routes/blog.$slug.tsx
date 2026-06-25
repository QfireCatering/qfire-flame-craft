import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/Sections";
import { blogPosts, getPost } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    const post = loaderData;
    if (!post) {
      return {
        meta: [{ title: "Post not found — Qfire Catering" }],
      };
    }
    return {
      meta: [
        { title: `${post.title} — Qfire Catering` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.image },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: post.image },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: [post.image],
            datePublished: post.isoDate,
            dateModified: post.isoDate,
            articleSection: post.category,
            author: {
              "@type": "Person",
              name: "Chef Terry Matthews",
              alternateName: "The BBQ Daddy",
            },
            publisher: {
              "@type": "Organization",
              name: "Qfire Catering",
            },
            mainEntityOfPage: `/blog/${params.slug}`,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center text-bone">
      <div className="text-center">
        <div className="eyebrow mb-6 justify-center">404</div>
        <h1 className="heading-lg mb-6">Post not found.</h1>
        <Link to="/blog" className="btn-primary">
          Back to the journal
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-[60vh] flex items-center justify-center text-bone">
      <div className="text-center">
        <h1 className="heading-lg mb-6">Something went wrong.</h1>
        <button className="btn-primary" onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-ink" />
          <div className="container-luxe relative">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-bone/60 hover:text-gold transition-colors mb-10"
            >
              <ArrowLeft className="size-3" /> The Journal
            </Link>
            <div className="eyebrow text-gold mb-6">{post.category}</div>
            <h1 className="heading-xl text-bone max-w-4xl">{post.title}</h1>
            <div className="mt-8 flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-bone/55">
              <span>{post.date}</span>
              <span aria-hidden>•</span>
              <span>{post.readMinutes} min read</span>
            </div>
          </div>
        </header>

        <div className="relative aspect-[16/8] overflow-hidden">
          <img
            src={post.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="container-luxe py-20 lg:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl text-bone/85 leading-relaxed font-light mb-14">
              {post.excerpt}
            </p>
            {post.body.map((section) => (
              <section key={section.h2} className="mb-12">
                <h2 className="font-display text-3xl lg:text-4xl text-bone mb-6">
                  {section.h2}
                </h2>
                {section.p.map((para, i) => (
                  <p
                    key={i}
                    className="text-bone/75 text-lg leading-relaxed mb-5 font-light"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}

            <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary">
                Request a Quote <ArrowRight className="size-4" />
              </Link>
              <Link to="/menus" className="btn-ghost">
                See the Menus
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="py-20 border-t border-white/5">
        <div className="container-luxe">
          <div className="eyebrow mb-8">Keep Reading</div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
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
                <h3 className="text-xl font-display text-bone leading-tight group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
