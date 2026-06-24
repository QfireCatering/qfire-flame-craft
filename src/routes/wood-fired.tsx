import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { woodFiredConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/wood-fired")({
  head: () => ({
    meta: [
      { title: "Wood-Fired Catering — Qfire Catering" },
      { name: "description", content: "Live-fire and slow-smoked catering. Brisket, tri-tip, pulled pork. Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Wood-Fired Catering — Qfire" },
      { property: "og:url", content: "/wood-fired" },
    ],
    links: [{ rel: "canonical", href: "/wood-fired" }],
  }),
  component: () => <ServicePage config={woodFiredConfig()} />,
});
