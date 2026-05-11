import { Link } from "@tanstack/react-router";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

export type SubMenuItem = {
  name: string;
  path?: string;
  visible?: boolean;
};

export type SubMenuGroup = {
  label?: string;
  items: SubMenuItem[];
};

type Props =
  | {
      items: SubMenuItem[];
      groups?: never;
    }
  | {
      items?: never;
      groups: SubMenuGroup[];
    };

export function SubMenuContent(props: Props) {
  const groups = props.groups ?? [{ items: props.items ?? [] }];

  return (
    <SidebarContent className="flex-none p-0 min-w-[150px] text-sidebar-foreground">
      {groups.map((group, index) => {
        const items = group.items.filter((menu) => menu.visible);

        if (!items.length) {
          return null;
        }

        return (
          <SidebarGroup
            key={`${group.label ?? "group"}-${index}`}
            className="md:p-0 p-2 overflow-x-auto"
          >
            {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {items.map((menu) => (
                  <SubMenuItem key={menu.name} {...menu} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        );
      })}
    </SidebarContent>
  );
}

function SubMenuItem(props: SubMenuItem) {
  const { name, path } = props;

  if (!path) {
    return null;
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className="p-2"
        render={
          <Link
            to={path}
            activeOptions={{ exact: false, includeSearch: false }}
            activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
          >
            {name}
          </Link>
        }
      />
    </SidebarMenuItem>
  );
}
