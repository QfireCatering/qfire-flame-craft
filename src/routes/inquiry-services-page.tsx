import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — preserves SEO equity from legacy thebbqdaddy.com URL.
export const Route = createFileRoute("/inquiry-services-page")({
  beforeLoad: () => {
    throw redirect({ to: "/quote", statusCode: 301 });
  },
  component: () => null,
});
