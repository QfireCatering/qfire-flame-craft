import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — preserves SEO equity from legacy thebbqdaddy.com URL.
export const Route = createFileRoute("/faq-s")({
  beforeLoad: () => {
    throw redirect({ to: "/faq", statusCode: 301 });
  },
  component: () => null,
});
