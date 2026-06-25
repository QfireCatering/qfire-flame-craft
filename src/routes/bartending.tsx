import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { bartendingConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/bartending")({
  head: () => ({
    meta: [
      { title: "Bartending & Bar Service for Weddings & Events — Qfire" },
      { name: "description", content: "Licensed, insured bartenders for weddings, corporate events and private parties. Signature cocktails, curated wine programs, full bar packages, mobile bars and elevated non-alcoholic menus across Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Bartending Services — Qfire" },
      { property: "og:description", content: "The bar, done right. Signature cocktails, full bar packages and licensed beverage service for weddings and events." },
      { property: "og:url", content: "/bartending" },
    ],
    links: [{ rel: "canonical", href: "/bartending" }],
  }),
  component: () => <ServicePage config={bartendingConfig()} />,
});
