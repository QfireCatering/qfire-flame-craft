import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — preserves SEO equity from legacy thebbqdaddy.com URL.
export const Route = createFileRoute("/privatechef")({
  beforeLoad: () => {
    throw redirect({ to: "/menus", statusCode: 301 });
  },
  component: () => null,
});
