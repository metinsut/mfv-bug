import "@tanstack/react-table";
import type { RowData } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface ColumnMeta<_TData extends RowData, _TValue> {
    headerClassName?: string;
    rowClassName?: string;
    filterVariant?: "text" | "range" | "select";
  }

  interface TableMeta<_TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}
