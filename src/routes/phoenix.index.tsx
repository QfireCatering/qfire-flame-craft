import { createFileRoute } from "@tanstack/react-router";
import { RegionLanding } from "@/components/site/RegionPages";
import phoenix from "@/assets/phoenix.jpg";

export const Route = createFileRoute("/phoenix/")({
  head: () => ({
    meta: [
      { title: "Phoenix Catering — Wedding, Corporate & Private Event Catering | Qfire" },
      { name: "description", content: "Full-service wood-fired catering across Phoenix Metro — Phoenix, Scottsdale, Mesa, Chandler, Gilbert and surrounding communities. Featured on Food Network." },
      { property: "og:title", content: "Phoenix Catering — Qfire" },
      { property: "og:description", content: "Wood-fired catering across Phoenix Metro." },
      { property: "og:url", content: "/phoenix" },
      { property: "og:image", content: phoenix },
    ],
    links: [{ rel: "canonical", href: "/phoenix" }],
  }),
  component: () => <RegionLanding regionKey="phoenix" />,
});
