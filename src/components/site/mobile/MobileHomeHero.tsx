import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star, Flame, Award } from "lucide-react";
import heroImage from "@/assets/updated-background.png.asset.json";
import asSeenOnBadge from "@/assets/as-seen-on-food-network.png.asset.json";
import { contact } from "@/lib/contact";

// Mobile-only homepage hero. Answers who / what / why / what next in <3s.
// - Full-bleed image, high-contrast dark overlay for AA text contrast
// - 44px+ CTAs stacked for one-handed use
// - Trust chips (Food Network · 4.9★ · 15+ yrs · 2,000+ events) above the fold
export function MobileHomeHero() {
  return (
    <section className="md:hidden relative min-h-[100svh] flex flex-col overflow-hidden bg-ink">
      <img
        src={heroImage.url}
        alt="Chef Terry Matthews live-fire grilling at an outdoor wedding — Qfire Catering"
        className="absolute inset-0 w-full h-full object-cover"
        width={1200}
        height={1600}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />

      <div className="relative z-10 flex flex-col flex-1 px-5 pt-20 pb-6">
        {/* Trust chip strip */}
        <div className="flex items-center gap-2 mb-6">
          <img src={asSeenOnBadge.url} alt="" className="w-11 h-11 rounded-full shrink-0" />
          <div>
            <div className="text-[0.6rem] tracking-[0.25em] uppercase text-gold font-semibold">Featured on Food Network</div>
            <div className="flex items-center gap-1 text-bone/90 text-xs mt-0.5">
              <Star className="size-3 fill-gold text-gold" />
              <span className="font-semibold">4.9</span>
              <span className="text-bone/60">· 400+ reviews</span>
            </div>
          </div>
        </div>

        {/* Headline — answers who + what */}
        <h1 className="font-display text-[2.6rem] leading-[1.02] text-bone">
          <span className="text-gold italic font-light">BBQ</span> & Wood-Fire
          <br />Catering with
          <br /><span className="text-bone/70">steakhouse polish.</span>
        </h1>

        {/* Answers why + where */}
        <p className="mt-4 text-bone/85 text-base leading-relaxed">
          Weddings, corporate events & private parties. Phoenix Metro & San Diego County.
        </p>

        {/* Primary + secondary CTA — thumb reach, stacked */}
        <div className="mt-6 space-y-2.5">
          <Link
            to="/quote"
            className="flex items-center justify-center gap-2 w-full min-h-14 rounded-md bg-gold text-ink font-semibold text-base tracking-wide shadow-[0_10px_30px_-8px_rgba(201,162,86,0.55)] active:bg-gold/90"
          >
            See If My Date Is Available <ArrowRight className="size-5" />
          </Link>
          <a
            href={contact.phoneHref}
            className="flex items-center justify-center gap-2 w-full min-h-14 rounded-md border border-gold/50 text-gold font-semibold text-base active:bg-gold/10"
          >
            <Phone className="size-5" /> Call {contact.phone}
          </a>
        </div>

        {/* Trust row — why choose us */}
        <div className="mt-auto pt-8">
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { icon: Award, top: "15+", bot: "Years" },
              { icon: Flame, top: "2,000+", bot: "Events" },
              { icon: Star, top: "4.9★", bot: "Rated" },
            ].map((s) => (
              <div key={s.bot} className="rounded-md border border-gold/20 bg-ink/60 backdrop-blur-sm px-2 py-3">
                <s.icon className="size-4 text-gold mx-auto mb-1" />
                <div className="text-bone font-display text-lg leading-none">{s.top}</div>
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-bone/60 mt-1">{s.bot}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[0.65rem] tracking-[0.25em] uppercase text-bone/50">
            BBQ Brawl · Cutthroat Kitchen · Camp Cutthroat
          </p>
        </div>
      </div>
    </section>
  );
}
