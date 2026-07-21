import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — Steakhouse Experience page removed; send traffic to Menus.
export const Route = createFileRoute("/steakhouse")({
  beforeLoad: () => {
    throw redirect({ to: "/menus", statusCode: 301 });
  },
  component: () => null,
});
