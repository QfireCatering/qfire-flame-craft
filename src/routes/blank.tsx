import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — legacy URL (22 clicks, 1,766 impressions/12mo).
export const Route = createFileRoute("/blank")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
  component: () => null,
});
