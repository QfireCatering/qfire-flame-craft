import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { bartendingConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/bartending")({
  head: () => ({
    meta: [
      { title: "Bartending Services — Qfire Catering" },
      { name: "description", content: "Licensed and insured bartending. Signature cocktails and full bar packages for events." },
      { property: "og:title", content: "Bartending Services — Qfire" },
      { property: "og:url", content: "/bartending" },
    ],
    links: [{ rel: "canonical", href: "/bartending" }],
  }),
  component: () => <ServicePage config={bartendingConfig()} />,
});
