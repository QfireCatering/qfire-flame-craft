import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { rentalsConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/rentals")({
  head: () => ({
    meta: [
      { title: "Event Rentals — Qfire Catering" },
      { name: "description", content: "Linens, chinaware, glassware, chafers, lounge furniture. Sourced, delivered and coordinated." },
      { property: "og:title", content: "Event Rentals — Qfire" },
      { property: "og:url", content: "/rentals" },
    ],
    links: [{ rel: "canonical", href: "/rentals" }],
  }),
  component: () => <ServicePage config={rentalsConfig()} />,
});
