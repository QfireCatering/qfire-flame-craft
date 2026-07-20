import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — preserves SEO equity from legacy thebbqdaddy.com URL.
export const Route = createFileRoute("/wedding-catering-phoenix-san-diego")({
  beforeLoad: () => {
    throw redirect({ to: "/weddings", statusCode: 301 });
  },
  component: () => null,
});
