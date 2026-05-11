import { cn } from "../../lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>;

export function Wrapper(props: Props) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex flex-col flex-1 min-w-0 min-h-0 rounded-md bg-background lg:p-4 p-2",
        className,
      )}
      {...rest}
    />
  );
}
