import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — legacy Wix menu-item URL.
export const Route = createFileRoute("/items-1")({
  beforeLoad: () => {
    throw redirect({ to: "/menus", statusCode: 301 });
  },
  component: () => null,
});
