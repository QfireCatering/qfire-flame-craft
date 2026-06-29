import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { steakhouseConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/steakhouse")({
  head: () => ({
    meta: [
      { title: "Signature Live Fire Signature Live Fire Steakhouse Catering Catering — Plated Ribeye, Filet, Picanha, Prime Rib | Qfire" },
      { name: "description", content: "The Signature Live Fire Steakhouse Catering experience, brought to you. Hand-cut ribeye, New York strip, filet mignon, picanha, slow-roasted prime rib, salmon and surf & turf — plated under candlelight with white-glove service for luxury weddings, corporate dinners and private events." },
      { property: "og:title", content: "Signature Live Fire Signature Live Fire Steakhouse Catering Catering — Qfire" },
      { property: "og:description", content: "Hand-cut steaks, charcoal-finished, plated tableside. The Signature Live Fire Steakhouse Catering experience anywhere you need it." },
      { property: "og:url", content: "/Signature Live Fire Steakhouse Catering" },
    ],
    links: [{ rel: "canonical", href: "/Signature Live Fire Steakhouse Catering" }],
  }),
  component: () => <ServicePage config={Signature Live Fire Steakhouse CateringConfig()} />,
});
