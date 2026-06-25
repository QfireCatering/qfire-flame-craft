import { createFileRoute } from "@tanstack/react-router";
import { PrivatePartyPage, type PrivatePartyRegionConfig } from "@/components/site/PrivatePartyPage";

const config: PrivatePartyRegionConfig = {
  region: "San Diego County",
  regionShort: "San Diego",
  regionSlug: "san-diego",
  path: "/private-party-catering-san-diego",
  cities: [
    "San Diego", "La Jolla", "Del Mar", "Carlsbad", "Encinitas",
    "Rancho Santa Fe", "Poway", "Coronado", "Vista", "San Marcos",
    "Oceanside", "Escondido", "Mission Valley", "Pacific Beach",
    "Point Loma", "North Park", "Chula Vista", "La Mesa", "El Cajon",
  ],
  reviewCities: ["La Jolla", "Del Mar", "Rancho Santa Fe", "Coronado"],
};

export const Route = createFileRoute("/private-party-catering-san-diego")({
  head: () => ({
    meta: [
      { title: "San Diego Private Party Catering | Birthday, Backyard & Anniversary Catering — Qfire" },
      { name: "description", content: "Premium San Diego County private party catering by Chef Terry Matthews (Food Network's BBQ Brawl). Birthdays, backyard parties, anniversaries, graduations, family reunions & luxury private dinners across La Jolla, Del Mar, Carlsbad, Encinitas, Rancho Santa Fe, Coronado, Poway & all of San Diego County. Live charcoal grilling, steakhouse plates, full bar service." },
      { property: "og:title", content: "San Diego Private Party Catering — Qfire | Backyard, Birthday & Anniversary Catering" },
      { property: "og:description", content: "Restaurant-quality private party catering across San Diego County. Live charcoal grilling, premium steaks, authentic BBQ, professional service." },
      { property: "og:url", content: "/private-party-catering-san-diego" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "San Diego private party catering, La Jolla birthday catering, Del Mar private chef, Carlsbad backyard party catering, Encinitas anniversary catering, Rancho Santa Fe luxury party catering, Coronado private event catering, Poway family reunion catering, Oceanside graduation party catering, bachelor party catering San Diego, bachelorette catering La Jolla, pool party catering Del Mar, backyard BBQ catering Encinitas, private event catering San Diego County" },
    ],
    links: [{ rel: "canonical", href: "/private-party-catering-san-diego" }],
  }),
  component: () => <PrivatePartyPage config={config} />,
});
