import { createFileRoute } from "@tanstack/react-router";
import { AreaLoading } from "@workspace/shared";
import { lazy, Suspense } from "react";
import { m } from "@/paraglide/messages";

const EmployeeApp = lazy(async () => import("employee/App"));

export const Route = createFileRoute("/employee/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Suspense fallback={<AreaLoading isLoading={true} label={m.employee()} />}>
      <EmployeeApp />
    </Suspense>
  );
}
