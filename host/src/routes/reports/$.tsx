import { createFileRoute } from "@tanstack/react-router";
import { AreaLoading } from "@workspace/shared";
import { lazy, Suspense } from "react";
import { m } from "@/paraglide/messages";

const ReportsApp = lazy(async () => import("reports/App"));

export const Route = createFileRoute("/reports/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Suspense fallback={<AreaLoading isLoading={true} label={m.reports()} />}>
      <ReportsApp />
    </Suspense>
  );
}
