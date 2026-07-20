import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — HIGH VALUE legacy URL (134 clicks, 14,551 impressions/12mo).
// Original page was the AZ vs. CA region picker; /locations is the modern equivalent.
export const Route = createFileRoute("/azorcali")({
  beforeLoad: () => {
    throw redirect({ to: "/locations", statusCode: 301 });
  },
  component: () => null,
});
