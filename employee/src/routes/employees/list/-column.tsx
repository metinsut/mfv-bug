import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { m } from "@/paraglide/messages";
import { Actions } from "./-actions";

export function useColumns() {
  return useMemo(
    (): ColumnDef<{ id: string; firstName: string; lastName: string; email: string }>[] => [
      {
        header: m.employeeNumber(),
        accessorKey: "id",
      },
      {
        header: m.fullName(),
        accessorKey: "firstName",
      },
      {
        header: m.lastName(),
        accessorKey: "lastName",
      },
      {
        header: m.email(),
        accessorKey: "email",
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          return row.original.id ? <Actions employeeId={row.original.id} /> : null;
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
