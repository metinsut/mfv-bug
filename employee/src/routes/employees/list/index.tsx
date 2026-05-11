import { createFileRoute } from "@tanstack/react-router";
import { EmployeeList } from "./-employee-list";

export const Route = createFileRoute("/employees/list/")({
  component: EmployeeListRoot,
});

function EmployeeListRoot() {
  return <EmployeeList />;
}
