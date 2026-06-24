import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import brisket from "@/assets/brisket.jpg";
import steak from "@/assets/steak.jpg";
import chefTerry from "@/assets/chef-terry.jpg.asset.json";
import buffet from "@/assets/buffet.jpg";
import { CTASection } from "@/components/site/Sections";

export const Route = createFileRoute("/menus")({
  head: () => ({
    meta: [
      { title: "Menus — Qfire Catering" },
      { name: "description", content: "Wood-fired, steakhouse and private chef menus from Qfire Catering." },
      { property: "og:title", content: "Menus — Qfire" },
      { property: "og:url", content: "/menus" },
    ],
    links: [{ rel: "canonical", href: "/menus" }],
  }),
  component: MenusPage,
});

function MenusPage() {
  const menus = [
    { img: brisket, label: "Wood-Fired", body: "Slow-smoked brisket, tri-tip, pulled meats and comfort sides. Backyard elegance.", href: "/wood-fired" as const },
    { img: steak, label: "Steakhouse", body: "Ribeye, filet, picanha, prime rib. Plated dinners and family-style service.", href: "/steakhouse" as const },
    { img: chefTerry, label: "Private Chef", body: "Intimate, multi-course chef's dinners in your home or venue.", href: "/private-chef" as const },
    { img: buffet, label: "Buffet & Stations", body: "Live-fire stations and full buffet packages for large gatherings.", href: "/wood-fired" as const },
  ];
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16">
        <div className="container-luxe max-w-4xl">
          <div className="eyebrow mb-6">Menus</div>
          <h1 className="heading-xl text-bone">Four ways to set the table.</h1>
          <p className="mt-8 text-xl text-bone/70 leading-relaxed font-light">
            Choose a starting point. Every Qfire menu is fully customized to your event, your guests and your vision.
          </p>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {menus.map((m) => (
              <Link key={m.label} to={m.href} className="group relative aspect-[5/4] overflow-hidden border border-white/5">
                <img src={m.img} alt={m.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                  <div className="heading-md text-bone group-hover:text-gold transition-colors">{m.label}</div>
                  <p className="mt-4 text-bone/70 max-w-sm">{m.body}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
                    View Menu <ArrowRight className="size-3" />
                  </div>
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
