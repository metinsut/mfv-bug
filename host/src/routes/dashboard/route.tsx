import { createFileRoute } from "@tanstack/react-router";
import { Wrapper } from "@workspace/shared";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Wrapper>Hello "/dashboard"!</Wrapper>;
}
