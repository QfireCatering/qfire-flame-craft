import { createFileRoute } from "@tanstack/react-router";
import { RegionLanding } from "@/components/site/RegionPages";
import phoenixAsset from "@/assets/phoenix-metro.png.asset.json";
const phoenix = phoenixAsset.url;

export const Route = createFileRoute("/phoenix/")({
  head: () => ({
    meta: [
      { title: "Phoenix Catering — Wedding, Corporate & Private Event Catering | Qfire" },
      { name: "description", content: "Full-service wood-fired catering across Phoenix Metro — Phoenix, Scottsdale, Mesa, Chandler, Gilbert and surrounding communities. Featured on Food Network." },
      { property: "og:title", content: "Phoenix Catering — Qfire" },
      { property: "og:description", content: "Wood-fired catering across Phoenix Metro." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/phoenix" },
      { property: "og:image", content: phoenix },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/phoenix" }],
  }),
  component: () => <RegionLanding regionKey="phoenix" />,
});
