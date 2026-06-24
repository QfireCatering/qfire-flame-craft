import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/san-diego")({
  component: () => <Outlet />,
});
