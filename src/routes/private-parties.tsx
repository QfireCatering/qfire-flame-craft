import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { privatePartyConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/private-parties")({
  head: () => ({
    meta: [
      { title: "Private Party Catering in Phoenix & San Diego — Qfire" },
      { name: "description", content: "Backyard luxury for milestone birthdays, anniversaries, graduations, holidays and intimate chef's dinners. Onsite wood-fired grilling, plated multi-course service and full bar packages across Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Private Party Catering — Qfire" },
      { property: "og:description", content: "The steakhouse, the smoker, and the bar — brought to your home. Private party catering by Chef Terry Matthews." },
      { property: "og:url", content: "/private-parties" },
    ],
    links: [{ rel: "canonical", href: "/private-parties" }],
  }),
  component: () => <ServicePage config={privatePartyConfig()} />,
});
