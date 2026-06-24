import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { steakhouseConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/steakhouse")({
  head: () => ({
    meta: [
      { title: "Steakhouse Catering — Qfire Catering" },
      { name: "description", content: "Plated ribeye, filet mignon, picanha, prime rib and surf-and-turf. Upscale wedding and corporate catering." },
      { property: "og:title", content: "Steakhouse Catering — Qfire" },
      { property: "og:url", content: "/steakhouse" },
    ],
    links: [{ rel: "canonical", href: "/steakhouse" }],
  }),
  component: () => <ServicePage config={steakhouseConfig()} />,
});
