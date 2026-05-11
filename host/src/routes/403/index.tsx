import { createFileRoute } from "@tanstack/react-router";
import { ForbiddenComponent } from "@workspace/shared";

export const Route = createFileRoute("/403/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ForbiddenComponent className="flex-1" />;
}
