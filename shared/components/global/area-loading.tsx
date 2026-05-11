import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Spinner } from "../ui/spinner";

type Props = {
  label?: string;
  children?: ReactNode;
  className?: string;
  isLoading?: boolean;
  loadingComponent?: ReactNode;
  ref?: React.RefObject<HTMLDivElement | null>;
};

export function AreaLoading(props: Props) {
  const { label, children, className, isLoading, loadingComponent, ref, ...rest } = props;

  return (
    <div className={cn("relative min-h-96 h-full", className)} ref={ref} {...rest}>
      {isLoading ? (
        <div
          className={cn(
            "grid gap-4 place-items-center place-content-center",
            "absolute inset-0 rounded-md bg-background z-20",
          )}
        >
          {loadingComponent ?? (
            <>
              <Spinner className="size-16 text-muted-foreground" />
              <span className="text-xl text-muted-foreground">{label}</span>
            </>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
