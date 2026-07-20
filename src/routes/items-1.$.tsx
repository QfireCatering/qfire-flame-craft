import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — catch-all for legacy Wix /items-1/* URLs
// (e.g. /items-1/-meat-carving-station, /items-1/onsite-grilling).
export const Route = createFileRoute("/items-1/$")({
  beforeLoad: () => {
    throw redirect({ to: "/menus", statusCode: 301 });
  },
  component: () => null,
});
