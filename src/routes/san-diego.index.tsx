import { createFileRoute } from "@tanstack/react-router";
import { RegionLanding } from "@/components/site/RegionPages";
import sanDiego from "@/assets/san-diego.png.asset.json";

export const Route = createFileRoute("/san-diego/")({
  head: () => ({
    meta: [
      { title: "San Diego Catering | BBQ Catering San Diego | Wedding & Corporate Catering San Diego — Qfire" },
      { name: "description", content: "San Diego catering company. BBQ catering San Diego, barbecue party catering, wedding catering San Diego, corporate catering San Diego, 4th of July catering, private event catering and live-fire steakhouse catering across San Diego County — La Jolla, Carlsbad, Encinitas, Del Mar, Rancho Santa Fe, Poway, Vista, Oceanside and Coronado. Featured on Food Network. Best BBQ caterers in San Diego." },
      { name: "keywords", content: "bbq catering san diego, san diego catering, barbecue party catering, bar b q catering, bbq caterer, barbeque caterer, bbq meat catering, bbq catering prices per person, bbq catering cost, 4th of july catering near me, bbq wedding catering, wedding catering san diego, corporate catering san diego, private party catering san diego, san diego bbq catering" },
      { property: "og:title", content: "San Diego Catering | BBQ, Wedding & Corporate Catering San Diego — Qfire" },
      { property: "og:description", content: "San Diego catering company — BBQ catering San Diego, wedding catering, corporate catering and live-fire steakhouse catering across San Diego County. Chef Terry Matthews — Food Network." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/san-diego" },
      { property: "og:image", content: sanDiego.url },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/san-diego" }],
  }),
  component: () => <RegionLanding regionKey="san-diego" />,
});
