import { createFileRoute } from "@tanstack/react-router";
import { WeddingPage, type WeddingRegionConfig } from "@/components/site/WeddingPage";

const config: WeddingRegionConfig = {
  region: "San Diego County",
  regionShort: "San Diego",
  regionSlug: "san-diego",
  path: "/wedding-catering-san-diego",
  cities: [
    "San Diego", "La Jolla", "Del Mar", "Carlsbad", "Encinitas",
    "Rancho Santa Fe", "Poway", "Coronado", "Escondido", "San Marcos",
    "Vista", "Oceanside", "Chula Vista", "Mission Valley",
    "Pacific Beach", "Point Loma", "Mission Hills", "North Park",
    "La Mesa", "El Cajon",
  ],
  venues: [
    "The Lodge at Torrey Pines", "Hotel del Coronado", "Rancho Valencia",
    "L'Auberge Del Mar", "Estancia La Jolla", "Park Hyatt Aviara",
    "The US Grant", "Mt. Woodson Castle",
  ],
  reviewCities: ["La Jolla", "Del Mar", "Carlsbad", "Rancho Santa Fe"],
};

export const Route = createFileRoute("/wedding-catering-san-diego")({
  head: () => ({
    meta: [
      { title: "San Diego County Wedding Reception Catering | Luxury Wedding Caterer in La Jolla, Del Mar & Carlsbad — Qfire" },
      { name: "description", content: "Award-winning San Diego County wedding reception catering by Chef Terry Matthews (Food Network's BBQ Brawl). Live charcoal grilling, premium steaks, full-service buffets & plated dinners across La Jolla, Del Mar, Carlsbad, Rancho Santa Fe, Coronado & all of San Diego County. 2,000+ weddings · 4.9★." },
      { property: "og:title", content: "San Diego County Wedding Reception Catering — Qfire | Live-Fire Steakhouse Experience Weddings" },
      { property: "og:description", content: "Luxury wedding reception catering across San Diego County — La Jolla, Del Mar, Carlsbad, Rancho Santa Fe, Coronado. Live charcoal grilling, premium steaks, professional staff." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/wedding-catering-san-diego" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "San Diego County wedding reception catering, San Diego wedding catering, La Jolla wedding caterer, Del Mar wedding catering, Carlsbad wedding caterer, Rancho Santa Fe wedding catering, Coronado wedding caterer, Encinitas wedding catering, Wood-Fire wedding catering San Diego, Steakhouse Experience wedding catering La Jolla, luxury wedding catering San Diego County" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/wedding-catering-san-diego" }],
  }),
  component: () => <WeddingPage config={config} />,
});
