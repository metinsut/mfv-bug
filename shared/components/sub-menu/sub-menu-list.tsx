import { useSidebar } from "../ui/sidebar";
import type { SubMenuGroup, SubMenuItem } from "./sub-menu-content";
import { SubMenuContent } from "./sub-menu-content";
import { SubMenuMobileView } from "./sub-menu-mobile-view";

type Props = {
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
} & (
  | {
      items: SubMenuItem[];
      groups?: never;
    }
  | {
      items?: never;
      groups: SubMenuGroup[];
    }
);

export function SubMenuList(props: Props) {
  const { title, open, onOpenChange } = props;
  const { isMobile } = useSidebar();
  const menuContent =
    props.groups !== undefined ? (
      <SubMenuContent groups={props.groups} />
    ) : (
      <SubMenuContent items={props.items} />
    );

  if (isMobile) {
    return (
      <SubMenuMobileView title={title} open={open} onOpenChange={onOpenChange}>
        {menuContent}
      </SubMenuMobileView>
    );
  }

  return menuContent;
}
