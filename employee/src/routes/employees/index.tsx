import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/employees/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Navigate to="/employees/list" />;
}
