import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — legacy URL.
export const Route = createFileRoute("/phoenix-menu")({
  beforeLoad: () => {
    throw redirect({ to: "/menus", statusCode: 301 });
  },
  component: () => null,
});
