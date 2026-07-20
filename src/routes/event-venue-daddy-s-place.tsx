import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect — legacy URL (121 clicks, 5,890 impressions/12mo).
// Original page featured Chef Terry's private event venue; /about is the closest
// modern equivalent (Chef Terry's story + private-event work).
export const Route = createFileRoute("/event-venue-daddy-s-place")({
  beforeLoad: () => {
    throw redirect({ to: "/private-parties", statusCode: 301 });
  },
  component: () => null,
});
