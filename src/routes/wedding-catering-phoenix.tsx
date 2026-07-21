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
    "Sedona", "Tucson", "Flagstaff", "Pinetop",
  ],
  venues: [
    "The Wrigley Mansion", "El Chorro", "The Royal Palms Resort",
    "The Phoenician", "Sanctuary Camelback", "Andaz Scottsdale",
    "The Farm at South Mountain", "Saguaro Lake Ranch",
  ],
  reviewCities: ["Scottsdale", "Paradise Valley", "Gilbert", "Mesa"],
  heroReview: {
    q: "Chef Terry and his staff were amazing at our daughter's wedding last month. He served 90+ people and the food was amazing! Guests were asking for his especially delicious Mac'N Cheese recipe :-) The appetizers meatballs were yummy as well. The chicken was so juicy and that's not easy to do with a large group. Chef Terry was so patient and kind with my daughter and her now husband's menu changes. We had great communication with his staff as well and everything went so smoothly. My daughter later told me that when Terry said a few words at the wedding that her friends just loved him! He's Excellent!!!",
    a: "Karri Rowe",
    e: "Wedding · 90+ guests · Google review",
  },
};

export const Route = createFileRoute("/wedding-catering-phoenix")({
  head: () => ({
    meta: [
      { title: "Phoenix Metro Wedding Reception Catering | Luxury Wedding Caterer in Scottsdale, Mesa & Paradise Valley — Qfire" },
      { name: "description", content: "Award-winning Phoenix Metro wedding reception catering by Chef Terry Matthews (Food Network's BBQ Brawl). Live charcoal grilling, premium steaks, full-service buffets & plated dinners across Scottsdale, Mesa, Chandler, Gilbert, Paradise Valley & all of Phoenix Metro. 2,500+ weddings · 4.9★." },
      { property: "og:title", content: "Phoenix Metro Wedding Reception Catering — Qfire | Live-Fire Steakhouse Experience Weddings" },
      { property: "og:description", content: "Luxury wedding reception catering across Phoenix, Scottsdale, Paradise Valley & all of Phoenix Metro. Live charcoal grilling, premium steaks, professional staff, stress-free execution." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/wedding-catering-phoenix" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "Phoenix Metro wedding reception catering, Phoenix wedding catering, Scottsdale wedding caterer, Paradise Valley wedding catering, Mesa wedding caterer, Chandler wedding catering, Gilbert wedding caterer, Wood-Fire wedding catering Phoenix, Steakhouse Experience wedding catering Scottsdale, luxury wedding catering Phoenix Metro" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/wedding-catering-phoenix" }],
  }),
  component: () => <WeddingPage config={config} />,
});
