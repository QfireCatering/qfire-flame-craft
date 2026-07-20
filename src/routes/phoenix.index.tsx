import { createFileRoute } from "@tanstack/react-router";
import { RegionLanding } from "@/components/site/RegionPages";
import phoenixAsset from "@/assets/phoenix-metro.png.asset.json";
const phoenix = phoenixAsset.url;

export const Route = createFileRoute("/phoenix/")({
  head: () => ({
    meta: [
      { title: "Phoenix Catering | BBQ Catering Phoenix AZ | Wedding & Corporate Catering Phoenix Metro — Qfire" },
      { name: "description", content: "Phoenix catering company. BBQ catering Phoenix AZ, barbecue catering Phoenix, wedding catering Phoenix, corporate catering Phoenix, private party catering and live-fire steakhouse catering across Phoenix Metro — Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Goodyear, Peoria, Sedona, Flagstaff and Tucson. Featured on Food Network. Best BBQ caterers in Phoenix — done right." },
      { name: "keywords", content: "catering phoenix az, bbq catering phoenix az, bbq catering phoenix, barbecue catering phoenix az, bbq catering scottsdale, bbq catering scottsdale az, caterers phoenix, catering in goodyear az, catering glendale az, bbq caterers for weddings, bbq wedding catering, phoenix catering, wedding catering phoenix, corporate catering phoenix, private party catering phoenix" },
      { property: "og:title", content: "Phoenix Catering | BBQ, Wedding & Corporate Catering Phoenix AZ — Qfire" },
      { property: "og:description", content: "Phoenix catering company — BBQ catering Phoenix AZ, wedding catering, corporate catering and live-fire steakhouse catering across Phoenix Metro. Chef Terry Matthews — Food Network." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/phoenix" },
      { property: "og:image", content: phoenix },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/phoenix" }],
  }),
  component: () => <RegionLanding regionKey="phoenix" />,
});
