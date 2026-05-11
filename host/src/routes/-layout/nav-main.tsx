import { Link } from "@tanstack/react-router";
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/shared";
import { useMenu } from "./use-menu";

export function NavMain() {
  const menu = useMenu();
  return (
    <SidebarContent className="mt-3">
      <SidebarGroup>
        <SidebarMenu className="gap-2">
          {menu.map((item) => (
            <SidebarMenuItem key={item.to}>
              <SidebarMenuButton
                render={
                  <Link
                    to={item.to}
                    activeOptions={{ exact: false, includeSearch: false }}
                    activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                }
              />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}
