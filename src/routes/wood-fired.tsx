import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — Wood-Fired page removed; send traffic to Menus.
export const Route = createFileRoute("/wood-fired")({
  beforeLoad: () => {
    throw redirect({ to: "/menus", statusCode: 301 });
  },
  component: () => null,
});
