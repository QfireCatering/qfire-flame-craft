import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { woodFiredConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/wood-fired")({
  head: () => ({
    meta: [
      { title: "Wood-Fire/BBQ Catering | Brisket, Tri-Tip & Live-Fire BBQ Catering Phoenix & San Diego — Qfire" },
      { name: "description", content: "Wood-fire and BBQ catering by The BBQ Daddy — 12-hour smoked brisket, wood-fired tri-tip, pulled pork, ribs, hot links and live-fire carving stations. BBQ catering near me for weddings, corporate events, private parties, backyard BBQs, holiday parties, graduations and family reunions across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, San Diego, La Jolla, Carlsbad, Del Mar and Encinitas." },
      { property: "og:title", content: "Wood-Fire/BBQ Catering — Qfire | Phoenix & San Diego BBQ Caterer" },
      { property: "og:description", content: "Oak. Mesquite. Pecan. Slow-smoked brisket, tri-tip and live-fire BBQ stations. Wedding BBQ catering, corporate BBQ catering, backyard BBQ catering across Phoenix Metro and San Diego County." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/wood-fired" },
      { name: "keywords", content: "BBQ catering near me, wood-fire catering, wood-fired catering, BBQ catering Phoenix, BBQ catering Scottsdale, BBQ catering San Diego, wedding BBQ catering, corporate BBQ catering, backyard BBQ catering, brisket catering, tri-tip catering, pulled pork catering, live-fire catering, on-site BBQ catering, smoked meat catering, BBQ caterer Phoenix, BBQ caterer San Diego, holiday BBQ catering, graduation BBQ catering, birthday BBQ catering" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/wood-fired" }],
  }),
  component: () => <ServicePage config={woodFiredConfig()} />,
});
