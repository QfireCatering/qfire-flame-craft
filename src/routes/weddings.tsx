import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { weddingConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Wedding Catering — Qfire Catering" },
      { name: "description", content: "Full-service wedding catering. Plated dinners, live-fire stations, buffets. Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Wedding Catering — Qfire" },
      { property: "og:url", content: "/weddings" },
    ],
    links: [{ rel: "canonical", href: "/weddings" }],
  }),
  component: () => <ServicePage config={weddingConfig()} />,
});
