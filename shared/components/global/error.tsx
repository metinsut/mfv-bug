import { WarningCircleIcon } from "@phosphor-icons/react";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";

type Props = {
  error: ErrorComponentProps;
  title?: string;
  reset?: () => void;
  actionLabel?: string;
};

export function ErrorComponent(props: Props) {
  const { error, reset, title = "Something went wrong", actionLabel = "Try again" } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle />
      </CardHeader>
      <CardContent>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <WarningCircleIcon />
            </EmptyMedia>
            <EmptyTitle>{title}</EmptyTitle>
            <EmptyDescription className="font-mono text-left text-xs">
              {error.error.message}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="flex-row gap-2">
            {reset ? (
              <Button variant="outline" onClick={reset}>
                {actionLabel}
              </Button>
            ) : null}
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link to="/">{actionLabel}</Link>}
            />
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  );
}
