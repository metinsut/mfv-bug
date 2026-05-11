import { SubMenuList } from "@workspace/shared";
import { m } from "@/paraglide/messages";
import { useEmployeeMenuStore } from "./employee-menu-store";
import { useMenu } from "./use-menu";

export function EmployeeMenuList() {
  const menuList = useMenu();
  const { open, setOpen } = useEmployeeMenuStore();

  return (
    <SubMenuList
      title={m.employeeMenuListTitle()}
      groups={menuList}
      open={open}
      onOpenChange={setOpen}
    />
  );
}
