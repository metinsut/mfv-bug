/// <reference path="../../type.d.ts" />
import type { Column, Row, Table as TableType } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Spinner } from "../ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type Props<T> = {
  table: TableType<T>;
  className?: string;
  thCommonClassName?: string;
  tdCommonClassName?: string;
  tdEmptyClassName?: string;
  tableRowClassName?: string;
  headerClassName?: string;
  isPending?: boolean;
  pendingComponent?: ReactNode;
  isFetching?: boolean;
  onRowClick?: (row: Row<T>) => void;
  hideHeader?: boolean;
  noResult?: ReactNode;
};

function getCommonPinningStyles<T>(column: Column<T>): CSSProperties {
  const isPinned = column.getIsPinned();
  return {
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    width: isPinned ? column.getSize() : undefined,
  };
}

function getCommonHeaderPinningClasses<T>(column: Column<T>): string {
  const isPinned = column.getIsPinned();
  return cn("relative opacity-100", {
    "sticky z-20 bg-muted/85 backdrop-blur supports-[backdrop-filter]:bg-muted/70": isPinned,
  });
}

function getCommonBodyPinningClasses<T>(column: Column<T>): string {
  const isPinned = column.getIsPinned();
  return cn("relative opacity-100", {
    "sticky z-10 bg-card": isPinned,
  });
}

export function CustomTable<T>(props: Props<T>) {
  const {
    table,
    className,
    thCommonClassName,
    tdCommonClassName,
    tdEmptyClassName,
    tableRowClassName,
    headerClassName,
    isPending,
    pendingComponent,
    isFetching,
    onRowClick,
    hideHeader = false,
    noResult,
  } = props;

  const rows = table.getRowModel().rows;
  const visibleColumnCount = table.getVisibleFlatColumns().length || table.getAllColumns().length;

  return (
    <div
      aria-busy={isPending || isFetching}
      className={cn("relative overflow-hidden", { "min-h-96": isPending }, className)}
    >
      <div
        className={cn("pointer-events-none absolute inset-x-0 top-0 z-30 h-0.5 overflow-hidden", {
          hidden: !isFetching,
        })}
      >
        <div className="absolute h-full w-1/2 rounded-full bg-primary/70 animate-loading-line" />
      </div>
      <Table>
        <TableHeader
          className={cn("bg-muted", headerClassName, {
            hidden: hideHeader,
          })}
        >
          {table.getHeaderGroups().map((headerGroup, rowIndex) => (
            <TableRow key={headerGroup.id} className={cn("border-none hover:bg-transparent")}>
              {headerGroup.headers.map((header, cellIndex) => {
                const pinned = header.column.getIsPinned();
                const isFirstRow = rowIndex === 0;
                const isLastRow = rowIndex === table.getHeaderGroups().length - 1;
                const isFirstCell = cellIndex === 0;
                const isLastCell = cellIndex === headerGroup.headers.length - 1;
                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    data-pinned={pinned || undefined}
                    style={{ ...getCommonPinningStyles(header?.column) }}
                    className={cn(
                      "text-muted-foreground font-semibold",
                      {
                        "rounded-tl-md": isFirstRow && isFirstCell,
                        "rounded-tr-md": isFirstRow && isLastCell,
                        "rounded-bl-md": isLastRow && isFirstCell,
                        "rounded-br-md": isLastRow && isLastCell,
                      },
                      getCommonHeaderPinningClasses(header.column),
                      thCommonClassName,
                      header.column.columnDef.meta?.headerClassName,
                    )}
                    title={
                      typeof header.column.columnDef.header === "string"
                        ? header.column.columnDef.header
                        : ""
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rows.length ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
                onClick={() => onRowClick?.(row)}
                className={cn(
                  {
                    "cursor-pointer": !!onRowClick,
                  },
                  tableRowClassName,
                )}
              >
                {row.getVisibleCells().map((cell) => {
                  const pinned = cell.column.getIsPinned();
                  return (
                    <TableCell
                      key={cell.id}
                      data-pinned={pinned || undefined}
                      style={{ ...getCommonPinningStyles(cell.column) }}
                      className={cn(
                        "transition-colors",
                        { "animate-pulse": isFetching },
                        getCommonBodyPinningClasses(cell.column),
                        tdCommonClassName,
                        cell.column.columnDef.meta?.rowClassName,
                      )}
                      title={String(cell?.getValue() ?? "")}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-transparent">
              <TableCell
                colSpan={visibleColumnCount}
                className={cn(
                  "h-40 px-4 py-10 text-center text-muted-foreground",
                  tdEmptyClassName,
                )}
              >
                {noResult ? (
                  <div className="flex min-h-24 items-center justify-center">{noResult}</div>
                ) : (
                  <p>No result</p>
                )}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {isPending && (
        <div
          className={cn(
            "absolute inset-0 z-40 flex flex-col items-center justify-center gap-3 bg-background/80 text-muted-foreground backdrop-blur-sm",
          )}
        >
          {pendingComponent ?? <Spinner />}
          <p>Loading</p>
        </div>
      )}
    </div>
  );
}
