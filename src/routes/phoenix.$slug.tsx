import { createFileRoute } from "@tanstack/react-router";
import { RegionSlugPage } from "@/components/site/RegionPages";

const titles: Record<string, { t: string; d: string }> = {
  weddings: { t: "Phoenix Wedding Catering", d: "Wedding catering across Phoenix Metro — Scottsdale, Mesa, Chandler, Gilbert and beyond." },
  corporate: { t: "Phoenix Corporate Catering", d: "Executive dinners, holiday parties and corporate events across Phoenix Metro." },
  "private-parties": { t: "Phoenix Private Party Catering", d: "Backyard luxury catering for milestone events across Phoenix Metro." },
  "wood-fired": { t: "Phoenix Wood-Fired Catering", d: "Slow-smoked, live-fire catering across Phoenix Metro." },
  steakhouse: { t: "Phoenix Steakhouse Experience", d: "Plated Steakhouse Experience for weddings and corporate dinners across Phoenix Metro." },
  bartending: { t: "Phoenix Bartending Services", d: "Licensed and insured bartending across Phoenix Metro." },
  rentals: { t: "Phoenix Event Rentals", d: "Linens, china, glassware and event rentals across Phoenix Metro." },
  faq: { t: "Phoenix Catering FAQ", d: "Frequently asked questions about catering across Phoenix Metro." },
  gallery: { t: "Phoenix Gallery", d: "Photos from recent Phoenix Metro events catered by Qfire." },
  reviews: { t: "Phoenix Reviews", d: "Five-star Phoenix Metro reviews from Qfire Catering clients." },
  blog: { t: "Phoenix Journal", d: "Wedding tips, venue spotlights and catering guides for Phoenix Metro." },
  holiday: { t: "Phoenix Metro Holiday Catering", d: "Office holiday parties, family dinners and client appreciation events across Phoenix Metro." },
  backyard: { t: "Phoenix Metro Backyard Catering", d: "Graduations, birthdays and milestone backyard parties across Phoenix Metro." },
  venues: { t: "Phoenix Venues", d: "Beautiful event venues across Phoenix Metro where we cater regularly." },
};

export const Route = createFileRoute("/phoenix/$slug")({
  head: ({ params }) => {
    const meta = titles[params.slug] ?? { t: `Phoenix ${params.slug}`, d: "" };
    const url = `https://qfire-flame-craft.lovable.app/phoenix/${params.slug}`;
    return {
      meta: [
        { title: `${meta.t} | Qfire Catering` },
        { name: "description", content: meta.d },
        { property: "og:title", content: meta.t },
        { property: "og:description", content: meta.d },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: meta.t },
        { name: "twitter:description", content: meta.d },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://qfire-flame-craft.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Phoenix Metro", item: "https://qfire-flame-craft.lovable.app/phoenix" },
              { "@type": "ListItem", position: 3, name: meta.t, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: function PhoenixSlug() {
    const { slug } = Route.useParams();
    return <RegionSlugPage regionKey="phoenix" slug={slug} />;
  },
});
