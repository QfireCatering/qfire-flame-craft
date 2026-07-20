import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — preserves SEO equity from legacy thebbqdaddy.com URL.
// Ranked for "bbq wedding catering", "catering phoenix az" tail.
export const Route = createFileRoute("/phoenix-catering")({
  beforeLoad: () => {
    throw redirect({ to: "/phoenix", statusCode: 301 });
  },
  component: () => null,
});
