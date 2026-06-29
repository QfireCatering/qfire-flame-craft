import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { rentalsConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/rentals")({
  head: () => ({
    meta: [
      { title: "Event Rentals — Linens, China, Glassware & Bar | Qfire" },
      { name: "description", content: "Premium event rentals coordinated end-to-end: linens, gold-rim chinaware, stemmed glassware, chafers, carving stations, lounge furniture and mobile bars. One vendor, one invoice, white-glove setup and breakdown — Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Event Rentals — Qfire" },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/rentals" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/rentals" }],
  }),
  component: () => <ServicePage config={rentalsConfig()} />,
});
