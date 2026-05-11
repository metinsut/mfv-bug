import { CaretDoubleRightIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SubMenuNavigation(props: Props) {
  const { open, onOpenChange } = props;

  return (
    <div className="md:hidden flex">
      <Button
        size="icon-sm"
        variant="secondary"
        className="bg-background"
        onClick={() => onOpenChange(!open)}
      >
        <CaretDoubleRightIcon />
      </Button>
    </div>
  );
}
