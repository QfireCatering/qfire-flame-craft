import { createFileRoute } from "@tanstack/react-router";
import { RegionLanding } from "@/components/site/RegionPages";
import sanDiego from "@/assets/san-diego.png.asset.json";

export const Route = createFileRoute("/san-diego/")({
  head: () => ({
    meta: [
      { title: "BBQ Catering San Diego | Wedding, Corporate & Private Party Catering — Qfire" },
      { name: "description", content: "BBQ catering San Diego, wood-fired catering and live-fire steakhouse catering across San Diego County — La Jolla, Carlsbad, Encinitas, Del Mar, Rancho Santa Fe, Poway, Vista, Oceanside and Coronado. Weddings, corporate events and private parties. Featured on Food Network." },
      { property: "og:title", content: "BBQ & Wood-Fire Catering San Diego — Qfire Catering" },
      { property: "og:description", content: "BBQ catering, wood-fired catering and steakhouse catering across San Diego County. Weddings, corporate, private parties. Chef Terry Matthews — Food Network." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/san-diego" },
      { property: "og:image", content: sanDiego.url },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/san-diego" }],
  }),
  component: () => <RegionLanding regionKey="san-diego" />,
});
