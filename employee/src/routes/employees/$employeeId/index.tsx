import { createFileRoute } from "@tanstack/react-router";
import { EmployeeForm } from "./-employee-form";

export const Route = createFileRoute("/employees/$employeeId/")({
  component: EmployeeFormRoot,
});

function EmployeeFormRoot() {
  return <EmployeeForm />;
}
