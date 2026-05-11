import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { CustomTable, Wrapper } from "@workspace/shared";
import { useMemo } from "react";
import { useGetDepartments } from "../-queries";
import { useColumns } from "./-column";
import { Toolbar } from "./-toolbar";

export function DepartmentList() {
  const { data, isFetching, isPending } = useGetDepartments();
  const columns = useColumns();
  const tableData = useMemo(() => data || [], [data]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnPinning: {
        right: ["actions"],
      },
    },
  });

  return (
    <Wrapper className="gap-4">
      <Toolbar />
      <CustomTable table={table} isFetching={isFetching} isPending={isPending} />
    </Wrapper>
  );
}
