import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { steakhouseConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/steakhouse")({
  head: () => ({
    meta: [
      { title: "Steakhouse Catering | Plated Ribeye, Filet, Picanha & Prime Rib Catering Phoenix & San Diego — Qfire" },
      { name: "description", content: "Steakhouse catering and on-site steak dinner catering by Qfire. Hand-cut ribeye, New York strip, filet mignon, picanha, prime rib, salmon and surf & turf — plated with white-glove service for luxury wedding catering, corporate dinner catering and private party catering across Phoenix, Scottsdale, Paradise Valley, San Diego, La Jolla, Del Mar, Rancho Santa Fe and Coronado." },
      { property: "og:title", content: "Steakhouse Experience Catering — Qfire | Phoenix & San Diego" },
      { property: "og:description", content: "Hand-cut steaks, charcoal-finished, plated tableside. Luxury steakhouse wedding catering, corporate steak dinner catering and private party steak catering." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/steakhouse" },
      { name: "keywords", content: "steakhouse catering, steak dinner catering, ribeye catering, filet mignon catering, prime rib catering, picanha catering, surf and turf catering, plated wedding catering, luxury wedding catering, corporate dinner catering, private chef Phoenix, private chef San Diego, on-site steak catering, steakhouse wedding catering Scottsdale, steakhouse catering La Jolla" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/steakhouse" }],
  }),
  component: () => <ServicePage config={steakhouseConfig()} />,
});
