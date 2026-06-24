import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { corporateConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Catering — Qfire Catering" },
      { name: "description", content: "Executive dinners, holiday parties, investor events and corporate offsites. Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Corporate Catering — Qfire" },
      { property: "og:url", content: "/corporate" },
    ],
    links: [{ rel: "canonical", href: "/corporate" }],
  }),
  component: () => <ServicePage config={corporateConfig()} />,
});
