import { createFileRoute } from "@tanstack/react-router";
import { RegionLanding } from "@/components/site/RegionPages";
import sanDiego from "@/assets/san-diego.png.asset.json";

export const Route = createFileRoute("/san-diego/")({
  head: () => ({
    meta: [
      { title: "San Diego Catering — Wedding, Corporate & Private Event Catering | Qfire" },
      { name: "description", content: "Full-service wood-fired catering across San Diego County — La Jolla, Carlsbad, Del Mar, Rancho Santa Fe and surrounding communities." },
      { property: "og:title", content: "San Diego Catering — Qfire" },
      { property: "og:description", content: "Wood-fired catering across San Diego County." },
      { property: "og:url", content: "/san-diego" },
      { property: "og:image", content: sanDiego },
    ],
    links: [{ rel: "canonical", href: "/san-diego" }],
  }),
  component: () => <RegionLanding regionKey="san-diego" />,
});
