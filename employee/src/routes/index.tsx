import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: EmployeeHome,
});

function EmployeeHome() {
  // return <Navigate to="/employees" />;
  return <div>Employee Home</div>;
}
