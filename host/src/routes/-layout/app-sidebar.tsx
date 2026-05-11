import { Sidebar } from "@workspace/shared";
import { NavFooter } from "./nav-footer";
import { NavHeader } from "./nav-header";
import { NavMain } from "./nav-main";

type Props = React.ComponentProps<typeof Sidebar>;

export function AppSidebar({ ...props }: Props) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <NavHeader />
      <NavMain />
      <NavFooter />
    </Sidebar>
  );
}
