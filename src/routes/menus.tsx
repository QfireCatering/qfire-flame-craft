import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import bbqPlatter1 from "@/assets/bbq-platter1.png.asset.json";
import steakhouseMenu from "@/assets/steakhouse-menu.png.asset.json";
import phoenixMetro from "@/assets/phoenix-metro.png.asset.json";
import sanDiego from "@/assets/san-diego.png.asset.json";
import { CTASection } from "@/components/site/Sections";
import { DefinitiveContent } from "@/components/site/DefinitiveContent";
import { definitiveCopy } from "@/lib/definitive-copy";

export const Route = createFileRoute("/menus")({
  head: () => ({
    meta: [
      { title: "Catering Menus — Wood-Fired BBQ & Signature Live Fire Steakhouse Catering | Qfire" },
      { name: "description", content: "Explore Qfire Catering menus: slow-smoked wood-fired Wood-Fire and hand-cut Signature Live Fire Steakhouse Catering plates. Phoenix Metro & San Diego County." },
      { property: "og:title", content: "Menus — Qfire" },
      { property: "og:url", content: "/menus" },
    ],
    links: [{ rel: "canonical", href: "/menus" }],
  }),
  component: MenusPage,
});

type Region = "phoenix" | "san-diego";

const MENUS_BY_REGION: Record<Region, { img: string; label: string; body: string; href: string }[]> = {
  phoenix: [
    { img: bbqPlatter1.url, label: "Wood-Fired — Phoenix Metro", body: "Slow-smoked brisket, tri-tip, pulled meats and comfort sides. Backyard elegance across the Valley.", href: "https://fs17.formsite.com/matthews3404/BBQDADDYLLC/index" },
    { img: steakhouseMenu.url, label: "Steakhouse — Phoenix Metro", body: "Ribeye, filet, picanha, prime rib. Plated dinners and family-style service. Phoenix pricing.", href: "/steak-seafood-menu" },
  ],
  "san-diego": [
    { img: bbqPlatter1.url, label: "Wood-Fired — San Diego County", body: "Slow-smoked brisket, tri-tip, pulled meats and comfort sides. Coastal backyard elegance.", href: "https://fs17.formsite.com/matthews3404/SanDiego/index" },
    { img: steakhouseMenu.url, label: "Steakhouse — San Diego County", body: "Ribeye, filet, picanha, prime rib. Plated dinners and family-style service. San Diego pricing.", href: "/steak-seafood-menu-san-diego" },
  ],
};

function MenuCard({ m }: { m: { img: string; label: string; body: string; href: string } }) {
  const content = (
    <>
      <img src={m.img} alt={m.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
        <div className="heading-md text-bone group-hover:text-gold transition-colors">{m.label}</div>
        <p className="mt-4 text-bone/70 max-w-sm">{m.body}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
          View Menu <ArrowRight className="size-3" />
        </div>
      </div>
    </>
  );
  const cls = "group relative aspect-[5/4] overflow-hidden border border-white/5";
  if (m.href.startsWith("http")) {
    return <a href={m.href} target="_blank" rel="noopener noreferrer" className={cls}>{content}</a>;
  }
  return <Link to={m.href} className={cls}>{content}</Link>;
}

function LocationCard({ img, label, sub, onClick }: { img: string; label: string; sub: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group relative aspect-[4/5] overflow-hidden border-2 border-gold/40 hover:border-gold transition-all hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]">
      <img src={img} alt={label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left">
        <MapPin className="size-6 text-gold mb-3" />
        <div className="heading-md text-bone group-hover:text-gold transition-colors">{label}</div>
        <p className="mt-2 text-bone/70 text-sm">{sub}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
          View Menus <ArrowRight className="size-3" />
        </div>
      </div>
    </button>
  );
}

function MenusPage() {
  const [region, setRegion] = useState<Region | null>(null);

  if (!region) {
    return (
      <>
        <section className="pt-32 lg:pt-40 pb-16">
          <div className="container-luxe max-w-4xl text-center">
            <div className="eyebrow mb-6">Menus</div>
            <h1 className="heading-xl text-bone">Which location are you planning your event in?</h1>
            <p className="mt-8 text-xl text-bone/70 leading-relaxed font-light">
              Select your service area to see the right menus, pricing, and local options.
            </p>
          </div>
        </section>
        <section className="pb-24">
          <div className="container-luxe max-w-5xl">
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
              <LocationCard img={phoenixMetro.url} label="Phoenix Metro" sub="Scottsdale · Paradise Valley · Tempe · Gilbert" onClick={() => setRegion("phoenix")} />
              <LocationCard img={sanDiego.url} label="San Diego County" sub="La Jolla · Del Mar · Rancho Santa Fe · Coronado" onClick={() => setRegion("san-diego")} />
            </div>
          </div>
        </section>
        <CTASection />
      </>
    );
  }

  const menus = MENUS_BY_REGION[region];
  const regionLabel = region === "phoenix" ? "Phoenix Metro" : "San Diego County";

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16">
        <div className="container-luxe max-w-4xl">
          <button onClick={() => setRegion(null)} className="text-[0.65rem] tracking-[0.3em] uppercase text-gold hover:text-bone transition-colors mb-6">
            ← Change Location
          </button>
          <div className="eyebrow mb-6">{regionLabel} Menus</div>
          <h1 className="heading-xl text-bone">Two ways to set the table.</h1>
          <p className="mt-8 text-xl text-bone/70 leading-relaxed font-light">
            Every Qfire menu is fully customized to your event, your guests and your vision — with {regionLabel} pricing and local service.
          </p>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {menus.map((m) => (
              <MenuCard key={m.label} m={m} />
            ))}
          </div>
        </div>
      </section>
      <DefinitiveContent topic="Catering Menus" region="every event we cater" {...definitiveCopy.menus} />
      <CTASection />
    </>
  );
}
