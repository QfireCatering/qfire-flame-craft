import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — preserves SEO equity from legacy thebbqdaddy.com URL.
export const Route = createFileRoute("/all-inclusive-pricing")({
  beforeLoad: () => {
    throw redirect({ to: "/pricing", statusCode: 301 });
  },
  component: () => null,
});
