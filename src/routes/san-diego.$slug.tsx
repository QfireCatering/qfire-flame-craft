import { createFileRoute } from "@tanstack/react-router";
import { RegionSlugPage } from "@/components/site/RegionPages";

const titles: Record<string, { t: string; d: string }> = {
  weddings: { t: "San Diego Wedding Catering", d: "Wedding catering across San Diego County — La Jolla, Carlsbad, Del Mar, Rancho Santa Fe and beyond." },
  corporate: { t: "San Diego Corporate Catering", d: "Executive dinners, holiday parties and corporate events across San Diego County." },
  "private-parties": { t: "San Diego Private Party Catering", d: "Coastal luxury catering for milestone events across San Diego County." },
  "wood-fired": { t: "San Diego Wood-Fired Catering", d: "Slow-smoked, live-fire catering across San Diego County." },
  Signature Live Fire Steakhouse Catering: { t: "San Diego Signature Live Fire Signature Live Fire Steakhouse Catering Catering", d: "Plated Signature Live Fire Signature Live Fire Steakhouse Catering Catering for weddings and corporate dinners across San Diego County." },
  bartending: { t: "San Diego Bartending Services", d: "Licensed and insured bartending across San Diego County." },
  rentals: { t: "San Diego Event Rentals", d: "Linens, china, glassware and event rentals across San Diego County." },
  faq: { t: "San Diego Catering FAQ", d: "Frequently asked questions about catering across San Diego County." },
  gallery: { t: "San Diego Gallery", d: "Photos from recent San Diego County events catered by Qfire." },
  reviews: { t: "San Diego Reviews", d: "Five-star San Diego County reviews from Qfire Catering clients." },
  blog: { t: "San Diego Journal", d: "Wedding tips, venue spotlights and catering guides for San Diego County." },
  holiday: { t: "San Diego County Holiday Catering", d: "Office holiday parties, family dinners and client appreciation events across San Diego County." },
  backyard: { t: "San Diego County Backyard Catering", d: "Graduations, birthdays and milestone backyard parties across San Diego County." },
  venues: { t: "San Diego Venues", d: "Beautiful event venues across San Diego County where we cater regularly." },
};

export const Route = createFileRoute("/san-diego/$slug")({
  head: ({ params }) => {
    const meta = titles[params.slug] ?? { t: `San Diego ${params.slug}`, d: "" };
    return {
      meta: [
        { title: `${meta.t} | Qfire Catering` },
        { name: "description", content: meta.d },
        { property: "og:title", content: meta.t },
        { property: "og:description", content: meta.d },
        { property: "og:url", content: `/san-diego/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/san-diego/${params.slug}` }],
    };
  },
  component: function SanDiegoSlug() {
    const { slug } = Route.useParams();
    return <RegionSlugPage regionKey="san-diego" slug={slug} />;
  },
});
