import { Link } from "@tanstack/react-router";
import {
  cn,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@workspace/shared";

export function NavHeader() {
  const { isMobile, open } = useSidebar();

  return (
    <SidebarHeader
      className={cn("flex flex-row items-center", {
        "flex-col": !open,
      })}
    >
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            render={
              <Link to="/">
                MFV
                {/* <img
                  src={
                    open ? "/mf-vite-bug-example-logo-text.png" : "/mf-vite-bug-example-logo.png"
                  }
                  alt="MF Vite Bug Example Logo"
                  className={cn("object-cover", {
                    "h-12": open,
                    "h-8": !open,
                  })}
                /> */}
              </Link>
            }
          ></SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      {!isMobile && <SidebarTrigger />}
    </SidebarHeader>
  );
}
