import { createFileRoute } from "@tanstack/react-router";
import { WeddingPage, type WeddingRegionConfig } from "@/components/site/WeddingPage";

const config: WeddingRegionConfig = {
  region: "Phoenix Metro",
  regionShort: "Phoenix",
  regionSlug: "phoenix",
  path: "/wedding-catering-phoenix",
  cities: [
    "Phoenix", "Scottsdale", "Mesa", "Tempe", "Chandler", "Gilbert",
    "Queen Creek", "Goodyear", "Avondale", "Surprise", "Peoria",
    "Paradise Valley", "Glendale", "Buckeye", "Litchfield Park",
    "Cave Creek", "Fountain Hills", "Apache Junction",
  ],
  venues: [
    "The Wrigley Mansion", "El Chorro", "The Royal Palms Resort",
    "The Phoenician", "Sanctuary Camelback", "Andaz Scottsdale",
    "The Farm at South Mountain", "Saguaro Lake Ranch",
  ],
  reviewCities: ["Scottsdale", "Paradise Valley", "Gilbert", "Mesa"],
};

export const Route = createFileRoute("/wedding-catering-phoenix")({
  head: () => ({
    meta: [
      { title: "Phoenix Wedding Catering | Luxury Wedding Caterer in Scottsdale, Mesa & Paradise Valley — Qfire" },
      { name: "description", content: "Award-winning Phoenix wedding catering by Chef Terry Matthews (Food Network's BBQ Brawl). Live charcoal grilling, premium steaks, full-service buffets & plated dinners across Scottsdale, Mesa, Chandler, Gilbert, Paradise Valley & all of Phoenix Metro. 2,000+ weddings · 4.9★." },
      { property: "og:title", content: "Phoenix Wedding Catering — Qfire | Live-Fire Signature Live Fire Steakhouse Catering Weddings" },
      { property: "og:description", content: "Luxury wedding catering across Phoenix, Scottsdale, Paradise Valley & all of Phoenix Metro. Live charcoal grilling, premium steaks, professional staff, stress-free execution." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/wedding-catering-phoenix" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "Phoenix wedding catering, Scottsdale wedding caterer, Paradise Valley wedding catering, Mesa wedding caterer, Chandler wedding catering, Gilbert wedding caterer, Wood-Fire wedding catering Phoenix, Signature Live Fire Steakhouse Catering wedding catering Scottsdale, luxury wedding catering Phoenix Metro" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/wedding-catering-phoenix" }],
  }),
  component: () => <WeddingPage config={config} />,
});
