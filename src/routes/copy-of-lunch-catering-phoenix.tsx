import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — legacy Wix duplicate.
export const Route = createFileRoute("/copy-of-lunch-catering-phoenix")({
  beforeLoad: () => {
    throw redirect({ to: "/corporate-catering-phoenix", statusCode: 301 });
  },
  component: () => null,
});
