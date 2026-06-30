import { createFileRoute } from "@tanstack/react-router";
import { CorporatePage, type CorporateRegionConfig } from "@/components/site/CorporatePage";
import phoenixCorpHero from "@/assets/corp-catering-split-phoenix.png.asset.json";

const config: CorporateRegionConfig = {
  region: "Phoenix Metro",
  regionShort: "Phoenix",
  regionSlug: "phoenix",
  path: "/corporate-catering-phoenix",
  cities: [
    "Phoenix", "Scottsdale", "Mesa", "Tempe", "Chandler", "Gilbert",
    "Glendale", "Peoria", "Goodyear", "Avondale", "Surprise",
    "Queen Creek", "Paradise Valley", "Buckeye", "Litchfield Park",
    "Cave Creek", "Fountain Hills", "Apache Junction",
    "Sedona", "Tucson", "Flagstaff", "Pinetop",
  ],
  reviewCities: ["Scottsdale", "Tempe", "Phoenix", "Chandler"],
  heroImage: phoenixCorpHero.url,
};

export const Route = createFileRoute("/corporate-catering-phoenix")({
  head: () => ({
    meta: [
      { title: "Phoenix Corporate Catering | Office, Executive & Holiday Party Catering — Qfire" },
      { name: "description", content: "Premium Phoenix corporate catering by Chef Terry Matthews (Food Network's BBQ Brawl). Office lunches, executive dinners, holiday parties, construction-site catering & live-fire grilling across Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria & all of Phoenix Metro. 2,000+ events · 4.9★ · COI-ready." },
      { property: "og:title", content: "Phoenix Corporate Catering — Qfire | Reliable Office & Executive Catering" },
      { property: "og:description", content: "On-time, professional, restaurant-quality corporate catering across Phoenix Metro. Office lunches, executive dinners, holiday parties, construction-site lunches, live-fire grilling." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/corporate-catering-phoenix" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "Phoenix corporate catering, Scottsdale corporate caterer, office catering Phoenix, executive catering Scottsdale, holiday party catering Phoenix, employee appreciation catering Phoenix, construction site catering Phoenix, business catering Mesa, company catering Chandler, corporate Wood-Fire catering Phoenix, corporate Steakhouse Experience Scottsdale, office lunch catering Tempe, conference catering Phoenix" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/corporate-catering-phoenix" }],
  }),
  component: () => <CorporatePage config={config} />,
});
