import { BellIcon, CaretDownIcon, GearIcon, SignOutIcon } from "@phosphor-icons/react";
import { useNavigate } from "@tanstack/react-router";
import {
  Avatar,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/shared";
import { m } from "@/paraglide/messages";
import { useUserStore } from "@/store/user-store";

export function NavFooter() {
  const navigate = useNavigate();
  const { fullName, email } = useUserStore();

  const avatarFallback = fullName
    ?.split(" ")
    .map((name: string) => name.charAt(0))
    .join("");

  const handleLogout = async () => {
    console.log("logout");
  };

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    {/* <AvatarImage src={avatar} alt="avatar" /> */}
                    <AvatarFallback className="rounded-lg">{avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{fullName}</span>
                    <span className="truncate text-xs">{email}</span>
                  </div>
                  <CaretDownIcon className="ml-auto size-4" />
                </SidebarMenuButton>
              }
            />
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side="top"
              align="start"
              sideOffset={4}
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      {/* <AvatarImage src={avatar} alt={fullName} /> */}
                      <AvatarFallback className="rounded-lg">{avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{fullName}</span>
                      <span className="truncate text-xs">{email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => void navigate({ to: "/settings" })}>
                  <GearIcon />
                  {m.settings()}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => void navigate({ to: "/notification" })}>
                  <BellIcon />
                  {m.notification()}
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <SignOutIcon />
                {m.logout()}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
