import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { steakhouseConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/steakhouse")({
  head: () => ({
    meta: [
      { title: "Steakhouse Experience — Plated Ribeye, Filet, Picanha, Prime Rib | Qfire" },
      { name: "description", content: "The Steakhouse Experience experience, brought to you. Hand-cut ribeye, New York strip, filet mignon, picanha, slow-roasted prime rib, salmon and surf & turf — plated under candlelight with white-glove service for luxury weddings, corporate dinners and private events." },
      { property: "og:title", content: "Steakhouse Experience — Qfire" },
      { property: "og:description", content: "Hand-cut steaks, charcoal-finished, plated tableside. The Steakhouse Experience experience anywhere you need it." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/steakhouse" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/steakhouse" }],
  }),
  component: () => <ServicePage config={steakhouseConfig()} />,
});
