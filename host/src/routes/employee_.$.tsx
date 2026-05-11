import { createFileRoute, Navigate } from "@tanstack/react-router";
import { AreaLoading } from "@workspace/shared";
import { lazy, Suspense } from "react";
import { m } from "@/paraglide/messages";

const EmployeeApp = lazy(async () => import("employee/App"));

export const Route = createFileRoute("/employee_/$")({
  component: RouteComponent,
});

export function shouldRedirectEmployeeSplat(splat?: string) {
  return !splat;
}

function RouteComponent() {
  const { _splat } = Route.useParams();

  if (shouldRedirectEmployeeSplat(_splat)) {
    return <Navigate to="/employee/$" params={{ _splat: "employees/list" }} replace />;
  }

  return (
    <Suspense fallback={<AreaLoading isLoading={true} label={m.employee()} />}>
      <EmployeeApp />
    </Suspense>
  );
}
