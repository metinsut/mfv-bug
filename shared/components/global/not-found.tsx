import { FileSearchIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";

type NotFoundComponentProps = {
  actionLabel?: string;
  actionTo?: "/" | "/app";
  className?: string;
  description?: string;
  title?: string;
};

export function NotFoundComponent(props: NotFoundComponentProps) {
  const {
    actionLabel = "Home",
    actionTo = "/",
    className,
    description,
    title = "Page Not Found",
  } = props;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle />
        <CardDescription />
      </CardHeader>
      <CardContent>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FileSearchIcon />
            </EmptyMedia>
            <EmptyTitle>{title}</EmptyTitle>
            {description ? <EmptyDescription>{description}</EmptyDescription> : null}
          </EmptyHeader>
          <EmptyContent>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link to={actionTo}>{actionLabel}</Link>}
            />
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  );
}
