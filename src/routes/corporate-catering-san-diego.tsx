import { createFileRoute } from "@tanstack/react-router";
import { CorporatePage, type CorporateRegionConfig } from "@/components/site/CorporatePage";

const config: CorporateRegionConfig = {
  region: "San Diego County",
  regionShort: "San Diego",
  regionSlug: "san-diego",
  path: "/corporate-catering-san-diego",
  cities: [
    "San Diego", "La Jolla", "Carlsbad", "Encinitas", "Del Mar",
    "Rancho Santa Fe", "Coronado", "Poway", "Vista", "San Marcos",
    "Oceanside", "Escondido", "Mission Valley", "North Park",
    "Point Loma", "Pacific Beach", "Chula Vista", "La Mesa", "El Cajon",
  ],
  reviewCities: ["La Jolla", "Carlsbad", "Del Mar", "Coronado"],
};

export const Route = createFileRoute("/corporate-catering-san-diego")({
  head: () => ({
    meta: [
      { title: "San Diego Corporate Catering | Office, Executive & Holiday Party Catering — Qfire" },
      { name: "description", content: "Premium San Diego corporate catering by Chef Terry Matthews (Food Network's BBQ Brawl). Office lunches, executive dinners, holiday parties, construction-site catering & live-fire grilling across La Jolla, Carlsbad, Del Mar, Rancho Santa Fe, Coronado, Encinitas & all of San Diego County. 2,000+ events · 4.9★ · COI-ready · Net-30 billing." },
      { property: "og:title", content: "San Diego Corporate Catering — Qfire | Reliable Office & Executive Catering" },
      { property: "og:description", content: "On-time, professional, restaurant-quality corporate catering across San Diego County. Office lunches, executive dinners, holiday parties, construction-site lunches, live-fire grilling." },
      { property: "og:url", content: "/corporate-catering-san-diego" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "San Diego corporate catering, La Jolla corporate caterer, office catering San Diego, executive catering La Jolla, holiday party catering San Diego, employee appreciation catering San Diego, construction site catering San Diego, business catering Carlsbad, company catering Del Mar, corporate BBQ catering San Diego, corporate steakhouse catering La Jolla, office lunch catering Mission Valley, conference catering San Diego, Rancho Santa Fe corporate catering, Coronado corporate catering" },
    ],
    links: [{ rel: "canonical", href: "/corporate-catering-san-diego" }],
  }),
  component: () => <CorporatePage config={config} />,
});
