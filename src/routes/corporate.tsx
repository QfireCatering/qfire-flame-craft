import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { corporateConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Catering in Phoenix & San Diego — Qfire Catering" },
      { name: "description", content: "Executive dinners, holiday galas, investor events, board retreats and full-day offsites. Plated steakhouse service, live-fire stations and premium drop-off catering across Phoenix Metro and San Diego County. Net-30 billing, dedicated account managers." },
      { property: "og:title", content: "Corporate Catering — Qfire" },
      { property: "og:description", content: "Refined corporate hospitality at scale. Plated dinners, holiday parties, partner events and board retreats." },
      { property: "og:url", content: "/corporate" },
    ],
    links: [{ rel: "canonical", href: "/corporate" }],
  }),
  component: () => <ServicePage config={corporateConfig()} />,
});
