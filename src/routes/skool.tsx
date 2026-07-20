import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — legacy URL (4 clicks, 2,661 impressions/12mo).
export const Route = createFileRoute("/skool")({
  beforeLoad: () => {
    throw redirect({ to: "/about", statusCode: 301 });
  },
  component: () => null,
});
