import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, CTASection } from "@/components/site/Sections";
import heroFire from "@/assets/hero-fire.jpg";

const tiers = [
  {
    name: "Wood-Fired",
    href: "/wood-fired",
    cta: "See the Wood-Fire Menu",
    headline: "From $12.99 / guest (Phoenix) · From $15.99 / guest (San Diego)",
    blurb:
      "Slow-smoked brisket, tri-tip, pulled pork, and wood-fired chicken. Comfort sides. Fresh-baked rolls. House sauces.",
    bullets: [
      "Onsite live-fire grilling",
      "Buffet, family-style, or plated",
      "Professional staff included",
      "Setup, service, full breakdown",
    ],
  },
  {
    name: "Signature Live Fire Steakhouse Catering Experience",
    href: "/steakhouse",
    cta: "Tour the Steakhouse Experience",
    headline: "From $74 / guest (Buffet) · $128 / guest (Plated)",
    blurb:
      "Charcoal-grilled ribeye, NY strip, filet, picanha, salmon, surf & turf. White-glove plating.",
    bullets: [
      "Tableside carving stations",
      "Family-style or plated service",
      "Linens, glassware, china available",
      "Black-tie staff team",
    ],
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Catering Pricing — Qfire Catering (Phoenix & San Diego)" },
      {
        name: "description",
        content:
          "Transparent catering pricing. Wood-fired catering from $12.99/guest (Phoenix) and $15.99/guest (San Diego). Signature Live Fire Steakhouse Catering buffet from $74/guest, plated from $128/guest.",
      },
      { property: "og:title", content: "Catering Pricing — Qfire Catering" },
      { property: "og:description", content: "What it actually costs to cater your event with Qfire." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Pricing", item: "/pricing" },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Real numbers. <span className="italic text-gold font-light">No surprises.</span>
          </>
        }
        subtitle="Most catering quotes are vague on purpose. Here's what we actually charge — before you ask."
        image={heroFire}
      >
        <Link to="/quote" className="btn-primary">
          Get My Itemized Proposal <ArrowRight className="size-4" />
        </Link>
      </PageHero>

      <section className="py-24 lg:py-32 bg-ink">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {tiers.map((t) => (
              <div key={t.name} className="bg-onyx p-10 lg:p-12 flex flex-col">
                <div className="eyebrow mb-5">{t.name}</div>
                <div className="heading-md text-gold mb-4 font-light">{t.headline}</div>
                <p className="text-bone/70 leading-relaxed mb-8">{t.blurb}</p>
                <ul className="space-y-3 mb-10">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-bone/85">
                      <Check className="size-4 text-gold shrink-0 mt-1" /> {b}
                    </li>
                  ))}
                </ul>
                <Link to={t.href} className="btn-ghost mt-auto">
                  {t.cta} <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl">
            <div className="eyebrow mb-6">What's Included</div>
            <h2 className="heading-md text-bone mb-6">
              Every quote covers food, fire, and the team that runs it.
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3 text-bone/80">
              {[
                "Professional service staff",
                "Onsite live-fire grilling",
                "Full setup + breakdown",
                "Disposable serviceware (upgrades available)",
                "Travel within metro",
                "Menu consultation with Chef Terry",
              ].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="size-4 text-gold" /> {i}
                </div>
              ))}
            </div>

            <div className="eyebrow mb-6 mt-16">What's Not</div>
            <p className="text-bone/70 leading-relaxed">
              Bar service, china/linen rentals, tasting fees for non-booked
              clients, gratuity, and venue-specific surcharges are quoted
              separately. We itemize everything — no hidden lines on the invoice.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want a number for your event?"
        subtitle="Send us the date and guest count. Custom proposal back within 24 hours."
      />
    </>
  );
}
