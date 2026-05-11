import { ChartBarIcon, FolderUserIcon, UserCircleIcon } from "@phosphor-icons/react";
import { m } from "@/paraglide/messages";

export function useMenu() {
  return [
    {
      title: m.dashboard(),
      to: "/dashboard",
      icon: <UserCircleIcon />,
    },
    {
      title: m.employee(),
      to: "/employee",
      icon: <FolderUserIcon />,
    },
    {
      title: m.reports(),
      to: "/reports",
      icon: <ChartBarIcon />,
    },
  ];
}
