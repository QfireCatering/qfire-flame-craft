import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { weddingConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Wedding Catering in Phoenix & San Diego — Qfire Catering" },
      { name: "description", content: "Luxury wedding catering by Qfire — plated dinners, family-style, live-fire stations and full bar service for weddings across Phoenix Metro and San Diego County. White-glove staffing, custom tasting menus, stress-free execution." },
      { property: "og:title", content: "Luxury Wedding Catering — Qfire" },
      { property: "og:description", content: "Wood-fired flavors, steakhouse polish. Full-service wedding catering by Chef Terry Matthews — Phoenix & San Diego." },
      { property: "og:url", content: "/weddings" },
    ],
    links: [{ rel: "canonical", href: "/weddings" }],
  }),
  component: () => <ServicePage config={weddingConfig()} />,
});
