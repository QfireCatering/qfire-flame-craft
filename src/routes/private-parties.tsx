import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { privatePartyConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/private-parties")({
  head: () => ({
    meta: [
      { title: "Private Party Catering — Qfire Catering" },
      { name: "description", content: "Backyard luxury for milestone birthdays, anniversaries and private gatherings. Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Private Party Catering — Qfire" },
      { property: "og:url", content: "/private-parties" },
    ],
    links: [{ rel: "canonical", href: "/private-parties" }],
  }),
  component: () => <ServicePage config={privatePartyConfig()} />,
});
