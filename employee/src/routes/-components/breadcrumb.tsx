import { SubMenuBreadcrumb } from "@workspace/shared";
import { m } from "@/paraglide/messages";
import { useEmployeeMenuStore } from "./menu-list/employee-menu-store";

export function Breadcrumb() {
  const { open, setOpen } = useEmployeeMenuStore();

  return <SubMenuBreadcrumb title={m.title()} open={open} onOpenChange={setOpen} />;
}
