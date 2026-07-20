import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — legacy URL (25 clicks, 7,263 impressions/12mo).
export const Route = createFileRoute("/cheatcode")({
  beforeLoad: () => {
    throw redirect({ to: "/menus", statusCode: 301 });
  },
  component: () => null,
});
