import { createFileRoute } from "@tanstack/react-router";
import steakhouseBackyard from "@/assets/steakhouse-backyard.png.asset.json";
import { SteakhouseExperiencePage, type RegionCopy } from "@/components/site/SteakhouseExperiencePage";

const r: RegionCopy = {
  city: "Phoenix",
  region: "Phoenix Metro",
  serviceAreas:
    "Qfire Catering brings the Steakhouse Experience experience to every corner of the Phoenix Metro — Scottsdale, Paradise Valley, Arcadia, Phoenix, Cave Creek, Carefree, Fountain Hills, Mesa, Gilbert, Chandler, Tempe, Queen Creek, Peoria, Glendale and beyond. Onsite charcoal grilling, surf and turf, and luxury catering across the Valley.",
  shortAreas: ["Scottsdale", "Paradise Valley", "Arcadia", "Phoenix", "Cave Creek", "Fountain Hills", "Mesa", "Gilbert", "Chandler", "Tempe", "Peoria", "Glendale"],
};

export const Route = createFileRoute("/steakhouse-experience-phoenix")({
  head: () => ({
    meta: [
      { title: "Steakhouse Experience Phoenix — Surf & Turf, Onsite Charcoal Grilling | Qfire" },
      { name: "description", content: "Luxury Steakhouse Experience in the Phoenix Metro. Ribeye, filet mignon, prime rib, salmon and lobster — grilled live onsite at Phoenix, Scottsdale and Paradise Valley weddings, corporate events and private parties. Buffet from $74/pp · Plated from $128/pp." },
      { property: "og:title", content: "Steakhouse Experience Phoenix | Qfire" },
      { property: "og:description", content: "Live charcoal grilling, surf & turf and white-glove service across the Phoenix Metro — weddings, corporate dinners and luxury private parties." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/steakhouse-experience-phoenix" },
      { property: "og:image", content: steakhouseBackyard.url },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/steakhouse-experience-phoenix" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Steakhouse Experience — Phoenix Metro",
          serviceType: "Surf & Turf Steakhouse Experience",
          provider: { "@type": "FoodEstablishment", name: "Qfire Catering" },
          areaServed: [
            { "@type": "City", name: "Phoenix" },
            { "@type": "City", name: "Scottsdale" },
            { "@type": "City", name: "Paradise Valley" },
            { "@type": "City", name: "Mesa" },
            { "@type": "City", name: "Gilbert" },
            { "@type": "City", name: "Chandler" },
            { "@type": "City", name: "Tempe" },
            { "@type": "City", name: "Peoria" },
            { "@type": "City", name: "Glendale" },
            { "@type": "City", name: "Cave Creek" },
            { "@type": "City", name: "Fountain Hills" },
          ],
          offers: [
            { "@type": "Offer", name: "Buffet Style", price: "74", priceCurrency: "USD", description: "Per person — restaurant-quality buffet steakhouse dining in Phoenix." },
            { "@type": "Offer", name: "Family Style", price: "89", priceCurrency: "USD", description: "Per person — shared platter chef-attended steakhouse buffet experience in Phoenix Metro." },
            { "@type": "Offer", name: "Plated Service", price: "128", priceCurrency: "USD", description: "Per person — fully plated luxury upscale steakhouse catering in Phoenix." },
          ],
        }),
      },
    ],
  }),
  component: () => <SteakhouseExperiencePage r={r} />,
});
