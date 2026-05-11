import { CaretLeftIcon, HouseIcon, ShieldWarningIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";
import { Wrapper } from "./wrapper";

type ForbiddenComponentProps = {
  actionLabel?: string;
  actionTo?: "/" | "/app";
  backLabel?: string;
  className?: string;
  description?: string;
  showBackAction?: boolean;
  title?: string;
};

export function ForbiddenComponent(props: ForbiddenComponentProps) {
  const {
    actionLabel = "Go to dashboard",
    actionTo = "/app",
    backLabel = "Go back",
    className,
    description = "You do not have permission to view this area. If this looks wrong, ask an administrator to update your access.",
    showBackAction = true,
    title = "Access denied",
  } = props;

  const handleBack = () => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign(actionTo);
  };

  return (
    <Wrapper className={cn("relative isolate flex-row justify-center items-center", className)}>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-45",
          "bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]",
          "bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_at_center,black,transparent_72%)]",
          className,
        )}
      />
      <Empty className="max-w-lg border bg-card/90 p-8 shadow-sm backdrop-blur">
        <EmptyHeader className="max-w-md gap-2">
          <EmptyMedia
            variant="icon"
            className="size-12 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15 [&_svg:not([class*='size-'])]:size-6"
          >
            <ShieldWarningIcon />
          </EmptyMedia>
          <EmptyTitle className="text-base">{title}</EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row flex-wrap justify-center gap-2">
          <Button
            nativeButton={false}
            render={
              <Link to={actionTo}>
                <HouseIcon data-icon="inline-start" />
                {actionLabel}
              </Link>
            }
          />
          {showBackAction ? (
            <Button type="button" variant="outline" onClick={handleBack}>
              <CaretLeftIcon data-icon="inline-start" />
              {backLabel}
            </Button>
          ) : null}
        </EmptyContent>
      </Empty>
    </Wrapper>
  );
}
