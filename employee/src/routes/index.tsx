import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: EmployeeHome,
});

function EmployeeHome() {
  return <Navigate to="/employees" />;
}
