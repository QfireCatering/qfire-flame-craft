import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { steakhouseConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/steakhouse")({
  head: () => ({
    meta: [
      { title: "Premium Steakhouse Catering | Live Steak Grilling — Ribeye, Filet, Picanha & Prime Rib | Phoenix & San Diego — Qfire" },
      { name: "description", content: "Premium steakhouse catering and live steak grilling by Food Network veteran Chef Terry Matthews (BBQ Brawl, Cutthroat Kitchen). 13+ years, 2,500+ events. Hand-cut ribeye, New York strip, filet mignon, picanha, prime rib, salmon and surf & turf — charcoal-finished and plated with white-glove service for luxury wedding catering, premium corporate dinners and private party catering across Phoenix, Scottsdale, Paradise Valley, San Diego, La Jolla, Del Mar, Rancho Santa Fe and Coronado." },
      { property: "og:title", content: "Premium Steakhouse Catering — Qfire | Live Steak Grilling in Phoenix & San Diego" },
      { property: "og:description", content: "Food Network veteran Chef Terry Matthews. Hand-cut steaks, charcoal-finished, plated tableside. Premium steakhouse wedding catering, corporate steak dinner catering and private party steak catering." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/steakhouse" },
      { name: "keywords", content: "premium steakhouse catering, luxury steakhouse catering, live steak grilling, charcoal grilling catering, steakhouse catering, steak dinner catering, ribeye catering, filet mignon catering, prime rib catering, picanha catering, surf and turf catering, plated wedding catering, luxury wedding catering, corporate dinner catering, private chef Phoenix, private chef San Diego, on-site steak catering, steakhouse wedding catering Scottsdale, steakhouse catering La Jolla" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/steakhouse" }],
  }),
  component: () => <ServicePage config={steakhouseConfig()} />,
});
