import { createFileRoute } from "@tanstack/react-router";
import { AreaLoading } from "@workspace/shared";
import { lazy, Suspense } from "react";
import { m } from "@/paraglide/messages";

const RentalApp = lazy(async () => import("rental/App"));

export const Route = createFileRoute("/rental/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Suspense fallback={<AreaLoading isLoading={true} label={m.reports()} />}>
      <RentalApp />
    </Suspense>
  );
}
