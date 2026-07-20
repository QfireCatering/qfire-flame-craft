import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — preserves SEO equity from legacy thebbqdaddy.com URL.
// This page ranked for "bbq wedding catering", "bar b q catering",
// "barbecue party catering", "4th of july catering near me".
export const Route = createFileRoute("/san-diego-catering")({
  beforeLoad: () => {
    throw redirect({ to: "/san-diego", statusCode: 301 });
  },
  component: () => null,
});
