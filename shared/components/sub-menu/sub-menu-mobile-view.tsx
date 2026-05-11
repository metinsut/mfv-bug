import type { ReactNode } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

type Props = {
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export function SubMenuMobileView(props: Props) {
  const { title, open, onOpenChange, children } = props;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="sm:max-w-2xs [&>button]:hidden">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
