import { createFileRoute } from "@tanstack/react-router";
import steakhouseBackyard from "@/assets/steakhouse-backyard.png.asset.json";
import { SteakhouseExperiencePage, type RegionCopy } from "@/components/site/SteakhouseExperiencePage";

const r: RegionCopy = {
  city: "San Diego",
  region: "San Diego County",
  serviceAreas:
    "Qfire Catering brings the steakhouse experience across San Diego County — La Jolla, Del Mar, Rancho Santa Fe, Coronado, Carmel Valley, Encinitas, Solana Beach, Cardiff, Carlsbad, Oceanside, Poway, Rancho Bernardo, Chula Vista, Mission Hills and Downtown San Diego. Onsite charcoal grilling, surf and turf, and luxury catering up and down the coast.",
  shortAreas: ["La Jolla", "Del Mar", "Rancho Santa Fe", "Coronado", "Carmel Valley", "Encinitas", "Solana Beach", "Carlsbad", "Oceanside", "Poway", "Chula Vista", "Downtown San Diego"],
};

export const Route = createFileRoute("/steakhouse-experience-san-diego")({
  head: () => ({
    meta: [
      { title: "Steakhouse Catering San Diego — Surf & Turf, Onsite Charcoal Grilling | Qfire" },
      { name: "description", content: "Luxury steakhouse catering across San Diego County. Ribeye, filet mignon, prime rib, salmon and lobster — grilled live onsite at La Jolla, Del Mar, Rancho Santa Fe and Coronado weddings, corporate events and private parties. Buffet from $79/pp · Plated from $133/pp." },
      { property: "og:title", content: "Steakhouse Catering San Diego | Qfire" },
      { property: "og:description", content: "Live charcoal grilling, surf & turf and white-glove service across San Diego County — weddings, corporate dinners and luxury private parties." },
      { property: "og:url", content: "/steakhouse-experience-san-diego" },
      { property: "og:image", content: steakhouseBackyard.url },
    ],
    links: [{ rel: "canonical", href: "/steakhouse-experience-san-diego" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Steakhouse Catering — San Diego County",
          serviceType: "Surf & Turf Steakhouse Catering",
          provider: { "@type": "FoodEstablishment", name: "Qfire Catering" },
          areaServed: [
            { "@type": "City", name: "San Diego" },
            { "@type": "City", name: "La Jolla" },
            { "@type": "City", name: "Del Mar" },
            { "@type": "City", name: "Rancho Santa Fe" },
            { "@type": "City", name: "Coronado" },
            { "@type": "City", name: "Carmel Valley" },
            { "@type": "City", name: "Encinitas" },
            { "@type": "City", name: "Solana Beach" },
            { "@type": "City", name: "Carlsbad" },
            { "@type": "City", name: "Oceanside" },
            { "@type": "City", name: "Poway" },
            { "@type": "City", name: "Chula Vista" },
          ],
          offers: [
            { "@type": "Offer", name: "Buffet Style", price: "79", priceCurrency: "USD", description: "Per person — restaurant-quality buffet steakhouse catering in San Diego." },
            { "@type": "Offer", name: "Family Style", price: "94", priceCurrency: "USD", description: "Per person — shared platter steakhouse experience in San Diego County." },
            { "@type": "Offer", name: "Plated Service", price: "133", priceCurrency: "USD", description: "Per person — fully plated luxury steakhouse catering in San Diego." },
          ],
        }),
      },
    ],
  }),
  component: () => <SteakhouseExperiencePage r={r} />,
});
