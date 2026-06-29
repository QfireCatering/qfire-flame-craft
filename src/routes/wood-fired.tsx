import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { woodFiredConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/wood-fired")({
  head: () => ({
    meta: [
      { title: "Wood-Fired BBQ Catering — Brisket, Tri-Tip, Live-Fire | Qfire" },
      { name: "description", content: "Live-fire and slow-smoked catering by The BBQ Daddy — 12-hour brisket, wood-fired tri-tip, pulled pork, hot links and tableside carving stations. Oak, mesquite and pecan smoke, served at its peak across Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Wood-Fired BBQ Catering — Qfire" },
      { property: "og:description", content: "Oak. Mesquite. Pecan. Slow-smoked brisket, tri-tip and live-fire stations — backyard cooking at a wedding-night standard." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/wood-fired" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/wood-fired" }],
  }),
  component: () => <ServicePage config={woodFiredConfig()} />,
});
