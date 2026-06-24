import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero, BulletGrid, CTASection } from "@/components/site/Sections";

export interface ServicePageConfig {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  heroImage: string;
  intro: { heading: string; body: string[] };
  highlights: { title: string; body: string }[];
  menu?: { heading: string; columns: { title: string; items: string[] }[] };
  galleryImages: string[];
  reviews?: { q: string; a: string; e: string }[];
  ctaTitle?: string;
}

export function ServicePage({ config }: { config: ServicePageConfig }) {
  return (
    <>
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        subtitle={config.subtitle}
        image={config.heroImage}
      >
        <Link to="/quote" className="btn-primary">
          Request a Quote <ArrowRight className="size-4" />
        </Link>
        <Link to="/pictures" className="btn-ghost">View Pictures</Link>
      </PageHero>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <div className="gold-rule mb-8" />
            <h2 className="heading-md text-bone">{config.intro.heading}</h2>
          </div>
          <div className="space-y-6 text-lg text-bone/75 leading-relaxed font-light">
            {config.intro.body.map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">What's Included</div>
            <h2 className="heading-md text-bone">Full-service from first call to final pour.</h2>
          </div>
          <BulletGrid items={config.highlights} />
        </div>
      </section>

      {/* Menu */}
      {config.menu && (
        <section className="py-24 lg:py-32">
          <div className="container-luxe">
            <div className="max-w-2xl mb-14">
              <div className="eyebrow mb-6">Menu</div>
              <h2 className="heading-lg text-bone">{config.menu.heading}</h2>
            </div>
            <div className={`grid md:grid-cols-${Math.min(config.menu.columns.length, 3)} gap-12 lg:gap-16`}>
              {config.menu.columns.map((col, i) => (
                <div key={i}>
                  <h3 className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-6 pb-4 border-b border-white/10">
                    {col.title}
                  </h3>
                  <ul className="space-y-3.5">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-bone/85">
                        <Check className="size-4 text-gold/70 mt-1.5 shrink-0" strokeWidth={1.5} />
                        <span className="text-base font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {config.galleryImages.length > 0 && (
        <section className="py-20">
          <div className="container-luxe mb-10">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="heading-md text-bone">From recent events.</h2>
              <Link to="/pictures" className="text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {config.galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reviews */}
      {config.reviews && (
        <section className="py-24 bg-onyx">
          <div className="container-luxe">
            <div className="eyebrow mb-6">Client Reviews</div>
            <h2 className="heading-md text-bone mb-12">In their words.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {config.reviews.map((r, i) => (
                <figure key={i} className="bg-ink border border-white/5 p-8 lg:p-10">
                  <div className="text-gold text-5xl font-display leading-none mb-4">"</div>
                  <blockquote className="text-bone/85 text-lg leading-relaxed font-light">{r.q}</blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-white/5">
                    <div className="text-bone font-medium">{r.a}</div>
                    <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{r.e}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title={config.ctaTitle ?? "Let's plan something unforgettable."} />
    </>
  );
}
