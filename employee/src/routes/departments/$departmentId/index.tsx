import { createFileRoute } from "@tanstack/react-router";
import { DepartmentForm } from "./-department-form";

export const Route = createFileRoute("/departments/$departmentId/")({
  component: DepartmentFormRoot,
});

function DepartmentFormRoot() {
  return <DepartmentForm />;
}
