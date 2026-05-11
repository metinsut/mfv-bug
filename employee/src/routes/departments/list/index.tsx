import { createFileRoute } from "@tanstack/react-router";
import { DepartmentList } from "./-department-list";

export const Route = createFileRoute("/departments/list/")({
  component: DepartmentListRoot,
});

function DepartmentListRoot() {
  return <DepartmentList />;
}
