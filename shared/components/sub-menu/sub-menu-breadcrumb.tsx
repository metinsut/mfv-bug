import { SubMenuNavigation } from "./sub-menu-navigation";

type Props = {
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SubMenuBreadcrumb(props: Props) {
  const { title, open, onOpenChange } = props;

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <SubMenuNavigation open={open} onOpenChange={onOpenChange} />
        <span className="font-semibold text-2xl">{title}</span>
      </div>
    </div>
  );
}
