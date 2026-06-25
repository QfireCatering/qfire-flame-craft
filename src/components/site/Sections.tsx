import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { RegionKey } from "@/lib/site";
import { PhoenixPricingBanner } from "./PhoenixPricingBanner";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
  regionKey,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  children?: ReactNode;
  regionKey?: RegionKey;
}) {
  return (
    <>
      <section className="relative min-h-[78vh] flex items-end overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover slow-zoom"
            style={{ filter: 'contrast(1.08) saturate(1.12) brightness(1.03)', imageRendering: '-webkit-optimize-contrast' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        </div>
        <div className="container-luxe relative z-10 pt-40 pb-20 lg:pb-28">
          {eyebrow && <div className="eyebrow mb-8">{eyebrow}</div>}
          <h1 className="heading-xl text-bone max-w-4xl">{title}</h1>
          {subtitle && (
            <p className="mt-8 max-w-2xl text-lg lg:text-xl text-bone/75 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
        </div>
      </section>
      {regionKey === "phoenix" && <PhoenixPricingBanner />}
    </>
  );
}

export function CTASection({
  title = "Let's plan something unforgettable.",
  subtitle = "Tell us about your event. We'll send a custom proposal within 24 hours.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-charcoal/40 to-ink" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-burgundy/30 blur-[140px]" />
      </div>
      <div className="container-luxe relative text-center">
        <div className="eyebrow justify-center mb-8">Request a Quote</div>
        <h2 className="heading-lg text-bone max-w-3xl mx-auto">{title}</h2>
        <p className="mt-6 max-w-xl mx-auto text-bone/70 text-lg">{subtitle}</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/quote" className="btn-primary">
            Request a Quote <ArrowRight className="size-4" />
          </Link>
          <Link to="/pictures" className="btn-ghost">View Gallery</Link>
        </div>
      </div>
    </section>
  );
}

export function SectionShell({
  eyebrow,
  title,
  intro,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-luxe">
        {(eyebrow || title || intro) && (
          <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-16`}>
            {eyebrow && <div className={`eyebrow mb-6 ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</div>}
            {title && <h2 className="heading-lg text-bone">{title}</h2>}
            {intro && <p className="mt-6 text-lg text-bone/70 leading-relaxed">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function BulletGrid({ items }: { items: { title: string; body?: string }[] }) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
      {items.map((it, i) => (
        <li key={i} className="bg-ink p-8 lg:p-10 group hover:bg-charcoal/60 transition-colors duration-500">
          <div className="text-gold/70 text-[0.65rem] tracking-[0.3em] mb-4">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="text-xl font-display text-bone mb-3">{it.title}</h3>
          {it.body && <p className="text-sm text-bone/65 leading-relaxed">{it.body}</p>}
        </li>
      ))}
    </ul>
  );
}
