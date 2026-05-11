import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/departments/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Navigate to="/departments/list" />;
}
