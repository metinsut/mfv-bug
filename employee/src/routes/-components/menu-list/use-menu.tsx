import type { SubMenuGroup } from "@workspace/shared";
import { m } from "@/paraglide/messages";

export function useMenu(): SubMenuGroup[] {
  return [
    {
      items: [
        {
          name: m.employees(),
          path: "/employees",
          visible: true,
        },
        {
          name: m.departments(),
          path: "/departments",
          visible: true,
        },
      ],
    },
  ];
}
