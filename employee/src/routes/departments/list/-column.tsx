import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { m } from "@/paraglide/messages";
import { Actions } from "./-actions";

export function useColumns() {
  return useMemo(
    (): ColumnDef<{ id: string; name: string }>[] => [
      {
        header: m.id(),
        accessorKey: "id",
      },
      {
        header: m.departmentName(),
        accessorKey: "name",
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          return row.original.id ? <Actions departmentId={row.original.id} /> : null;
        },
        meta: {
          headerClassName: "text-right",
          rowClassName: "text-right",
        },
      },
    ],
    [],
  );
}
