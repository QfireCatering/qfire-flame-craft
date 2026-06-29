import { createFileRoute } from "@tanstack/react-router";
import { PrivatePartyPage, type PrivatePartyRegionConfig } from "@/components/site/PrivatePartyPage";

const config: PrivatePartyRegionConfig = {
  region: "Phoenix Metro",
  regionShort: "Phoenix",
  regionSlug: "phoenix",
  path: "/private-party-catering-phoenix",
  cities: [
    "Phoenix", "Scottsdale", "Mesa", "Tempe", "Chandler", "Gilbert",
    "Queen Creek", "Goodyear", "Avondale", "Surprise", "Peoria", "Glendale",
    "Paradise Valley", "Buckeye", "Litchfield Park", "Cave Creek",
    "Fountain Hills", "Apache Junction",
  ],
  reviewCities: ["Scottsdale", "Paradise Valley", "Gilbert", "Chandler"],
};

export const Route = createFileRoute("/private-party-catering-phoenix")({
  head: () => ({
    meta: [
      { title: "Phoenix Private Party Catering | Birthday, Backyard & Anniversary Catering — Qfire" },
      { name: "description", content: "Premium Phoenix private party catering by Chef Terry Matthews (Food Network's BBQ Brawl). Birthdays, backyard BBQs, anniversaries, graduations, holidays, family reunions & luxury private dinners across Scottsdale, Mesa, Tempe, Chandler, Gilbert, Paradise Valley & all of Phoenix Metro. Live charcoal grilling, Signature Live Fire Steakhouse Catering plates, full bar." },
      { property: "og:title", content: "Phoenix Private Party Catering — Qfire | Backyard, Birthday & Anniversary Catering" },
      { property: "og:description", content: "Restaurant-quality private party catering across Phoenix Metro. Live charcoal grilling, premium steaks, authentic Wood-Fire, professional service." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/private-party-catering-phoenix" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "Phoenix private party catering, Scottsdale birthday party caterer, backyard party catering Phoenix, anniversary catering Scottsdale, graduation party catering Phoenix, holiday party catering Mesa, family reunion catering Gilbert, bachelor party catering Scottsdale, bachelorette catering Phoenix, pool party catering Paradise Valley, private chef Phoenix, luxury private dinner Scottsdale, backyard Wood-Fire catering Chandler, private event catering Tempe" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/private-party-catering-phoenix" }],
  }),
  component: () => <PrivatePartyPage config={config} />,
});
