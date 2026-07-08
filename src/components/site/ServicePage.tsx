import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { RegionKey } from "@/lib/site";
import { PageHero, BulletGrid, CTASection } from "@/components/site/Sections";
import { TrustBar } from "@/components/site/TrustBar";
import { DefinitiveContent } from "@/components/site/DefinitiveContent";
import { definitiveCopy } from "@/lib/definitive-copy";

export interface ServicePageConfig {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  heroImage: string;
  heroObjectPosition?: string;
  intro: { heading: string; body: string[] };
  highlights: { title: string; body: string }[];
  menu?: { heading: string; columns: { title: string; items: string[] }[]; ctaLabel?: string; ctaUrl?: string };
  galleryImages: string[];
  reviews?: { q: string; a: string; e: string }[];
  faqs?: { q: string; a: string }[];
  ctaTitle?: string;
  showGalleryLink?: boolean;
  definitiveTopic?: string;
  definitiveKey?: keyof typeof definitiveCopy;
}

export function ServicePage({ config, regionKey }: { config: ServicePageConfig; regionKey?: RegionKey }) {
  return (
    <>
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        subtitle={config.subtitle}
        image={config.heroImage}
        objectPosition={config.heroObjectPosition}
        regionKey={regionKey}
      >
        <Link to="/quote" className="btn-primary">
          See If My Date Is Open <ArrowRight className="size-4" />
        </Link>
        {config.showGalleryLink !== false && (
          <Link to="/pictures" className="btn-ghost">View Pictures</Link>
        )}
      </PageHero>

      <TrustBar />


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

      {/* Service Styles — every service page covers all formats */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">Service Styles</div>
            <h2 className="heading-lg text-bone">Six ways to serve the room.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              Every Qfire menu can be served in the format that fits your venue, your guest count, and the night you want them to remember.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { title: "Buffet", body: "Beautifully set, chef-attended buffet lines. Hot food, fast lines, no chaos." },
              { title: "Family Style", body: "Shared platters down the center of the table. Warm, generous, and dinner-party intimate." },
              { title: "Plated Service", body: "Coursed, white-glove plated dinners with synchronized service for every table." },
              { title: "Onsite Live-Fire Grilling", body: "We roll in the grill and cook over hardwood at your venue. Guests gather. Memories form." },
              { title: "Action Stations", body: "Chef-driven carving and live-cook stations — picanha, brisket, pasta, raw bar." },
              { title: "Drop-Off Catering", body: "Premium daytime catering for boardrooms and offsites — packaged, labeled, on time." },
            ].map((s, i) => (
              <div key={s.title} className="bg-ink p-8 lg:p-10">
                <div className="text-gold/70 text-[0.65rem] tracking-[0.3em] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-display text-bone mb-3">{s.title}</h3>
                <p className="text-sm text-bone/65 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
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
            {config.menu.ctaUrl && (
              <div className="mt-16 flex justify-center">
                <a
                  href={config.menu.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-ink font-display text-lg tracking-wide uppercase border-2 border-gold hover:bg-transparent hover:text-gold transition-colors shadow-[0_0_40px_rgba(212,175,55,0.35)]"
                >
                  {config.menu.ctaLabel || "Click Here to View Menu and Pricing"}
                  <ArrowRight className="size-5" />
                </a>
              </div>
            )}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-6">
            {config.galleryImages.map((img, i) => {
              const regionLabel = regionKey === "phoenix" ? "Phoenix Metro" : regionKey === "san-diego" ? "San Diego County" : "";
              const captions = [
                `Live-fire carving station${regionLabel ? ` — ${regionLabel}` : ""}`,
                `Wood-fire buffet line${regionLabel ? ` — ${regionLabel}` : ""}`,
                `Plated tasting course${regionLabel ? ` — ${regionLabel}` : ""}`,
                `Backyard luxury setup${regionLabel ? ` — ${regionLabel}` : ""}`,
              ];
              const caption = captions[i % captions.length];
              return (
                <figure key={i} className="group">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={img}
                      alt={`${config.eyebrow} by Qfire Catering${regionLabel ? ` in ${regionLabel}` : ""} — recent event photo ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      width={800}
                      height={800}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.7rem] tracking-[0.22em] uppercase text-bone/70">
                    <Link to="/quote" className="hover:text-gold transition-colors">
                      {caption} <span className="text-gold/70">→</span>
                    </Link>
                  </figcaption>
                </figure>
              );
            })}
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

      {/* FAQs */}
      {config.faqs && config.faqs.length > 0 && (
        <>
          <section className="py-24 lg:py-32">
            <div className="container-luxe">
              <div className="max-w-2xl mb-14">
                <div className="eyebrow mb-6">Frequently Asked</div>
                <h2 className="heading-lg text-bone">Answers, before you ask.</h2>
              </div>
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                {config.faqs.map((f, i) => (
                  <details key={i} className="group py-7">
                    <summary className="flex cursor-pointer items-start justify-between gap-8 list-none">
                      <h3 className="text-lg lg:text-xl text-bone font-display">{f.q}</h3>
                      <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45 shrink-0">+</span>
                    </summary>
                    <p className="mt-5 text-bone/75 text-base lg:text-lg leading-relaxed font-light max-w-3xl">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: config.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </>
      )}

      {config.definitiveKey && definitiveCopy[config.definitiveKey] && (
        <DefinitiveContent
          topic={config.definitiveTopic ?? config.eyebrow}
          {...definitiveCopy[config.definitiveKey]}
        />
      )}

      <CTASection title={config.ctaTitle ?? "Let's plan something unforgettable."} />
    </>
  );
}
