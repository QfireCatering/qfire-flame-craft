import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — legacy Wix duplicate.
export const Route = createFileRoute("/copy-of-home")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
  component: () => null,
});
