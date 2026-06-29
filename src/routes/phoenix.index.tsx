import { createFileRoute } from "@tanstack/react-router";
import { RegionLanding } from "@/components/site/RegionPages";
import phoenixAsset from "@/assets/phoenix-metro.png.asset.json";
const phoenix = phoenixAsset.url;

export const Route = createFileRoute("/phoenix/")({
  head: () => ({
    meta: [
      { title: "BBQ Catering Phoenix | Wedding, Corporate & Private Party Catering — Qfire" },
      { name: "description", content: "BBQ catering Phoenix, wood-fired catering and live-fire steakhouse catering across Phoenix Metro — Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Sedona, Flagstaff and Tucson. Weddings, corporate events and private parties. Featured on Food Network. BBQ catering near me, done right." },
      { property: "og:title", content: "BBQ & Wood-Fire Catering Phoenix — Qfire Catering" },
      { property: "og:description", content: "BBQ catering, wood-fired catering and steakhouse catering across Phoenix Metro. Weddings, corporate, private parties. Chef Terry Matthews — Food Network." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/phoenix" },
      { property: "og:image", content: phoenix },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/phoenix" }],
  }),
  component: () => <RegionLanding regionKey="phoenix" />,
});
