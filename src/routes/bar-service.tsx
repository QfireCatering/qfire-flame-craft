import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — preserves SEO equity from legacy thebbqdaddy.com URL.
export const Route = createFileRoute("/bar-service")({
  beforeLoad: () => {
    throw redirect({ to: "/bartending", statusCode: 301 });
  },
  component: () => null,
});
