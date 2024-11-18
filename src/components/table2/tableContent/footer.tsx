import { RowModel, Table } from "@tanstack/react-table";
import { useCallback, useMemo } from "react";
import { GetDataOptions, getDataType } from "../types";
import Button from "@/components/button";
import css from "../style.module.scss";

export default function TFooter<T>({
  tableInstance,
  rows,
  getData,
  filters,
  pagination,
  customPagination,
}: {
  tableInstance: Table<T>;
  rows: RowModel<T>;
  getData?: (object: getDataType) => void;
  customPagination?: boolean;
  filters?: any;
  pagination?: Partial<GetDataOptions["pagination"]>;
}) {
  const pageSize = useMemo(
    () =>
      customPagination
        ? pagination?.pageSize || tableInstance?.options?.state?.pagination?.pageSize
        : tableInstance?.options?.state?.pagination?.pageSize,
    [customPagination, pagination?.pageSize, tableInstance?.options?.state?.pagination?.pageSize],
  );
  const pageIndex = useMemo(
    () =>
      customPagination
        ? pagination?.pageNumber || tableInstance?.options?.state?.pagination?.pageIndex
        : tableInstance?.options?.state?.pagination?.pageIndex,
    [
      customPagination,
      pagination?.pageNumber,
      tableInstance?.options?.state?.pagination?.pageIndex,
    ],
  );
  const pageFrom = useMemo(() => (pageIndex || 0) * (pageSize || 10) + 1, [pageIndex, pageSize]);
  const pageTo = useMemo(
    () => pageFrom + (rows?.flatRows?.length || 10) - 1,
    [pageFrom, rows?.flatRows?.length],
  );

  const ChangePage = useCallback(
    (number: number, value?: number) => {
      if (customPagination) {
        getData?.({
          type: "pagination",
          options: {
            filters,
            pagination: {
              ...(pagination as any),
              pageNumber:
                number == 0 || number == -2
                  ? 0
                  : number == 2
                    ? (Number(pagination?.totalPages) ?? 1) - 1
                    : (Number(pagination?.pageNumber) ?? 1) + number,
              pageSize: number == 0 ? value : pagination?.pageSize,
              option: number as any,
            },
          },
        });
      } else {
        if (number == -2) tableInstance.setPageIndex(0);
        else if (number == -1) tableInstance.previousPage();
        else if (number == 1) tableInstance.nextPage();
        else if (number == 2) tableInstance.setPageIndex(tableInstance.getPageCount() - 1);
      }
    },
    [customPagination, filters, getData, pagination, tableInstance],
  );

  return (
    <footer className={css.pagination}>
      <div>
        <label>
          <span>Rows per page</span>
          <select
            value={tableInstance?.options?.state?.pagination?.pageSize}
            onChange={(e) => {
              if (customPagination) {
                ChangePage(0, Number(e?.target?.value) || 10);
              }
              tableInstance?.setPageSize(Number(e?.target?.value) || 10);
            }}
          >
            {[3, 5, 10, 20, 30, 50, 100, 200, 300, 500]?.map((one) => (
              <option value={one} key={one}>
                {one}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <span>
          {pageFrom} - {pageTo}{" "}
        </span>
        of{" "}
        <span>
          {customPagination
            ? pagination?.total || tableInstance.getRowCount()
            : tableInstance.getRowCount()}
        </span>
      </div>
      <div className={`${css.buttons}`}>
        <Button
          size="xsm3"
          className={`${css.button}`}
          disabled={
            customPagination ? pagination?.pageNumber == 0 : !tableInstance.getCanPreviousPage()
          }
          onClick={() => ChangePage(-2)}
        >{`<<`}</Button>
        <Button
          size="xsm3"
          className={`${css.button}`}
          disabled={
            customPagination ? pagination?.pageNumber == 0 : !tableInstance.getCanPreviousPage()
          }
          onClick={() => ChangePage(-1)}
        >{`<`}</Button>
        <Button
          size="xsm3"
          className={`${css.button}`}
          disabled={
            customPagination
              ? pageTo >= (Number(pagination?.total) || tableInstance.getRowCount())
              : !tableInstance.getCanNextPage()
          }
          onClick={() => ChangePage(1)}
        >{`>`}</Button>
        <Button
          size="xsm3"
          className={`${css.button}`}
          disabled={
            customPagination
              ? pageTo >= (Number(pagination?.total) || tableInstance.getRowCount())
              : !tableInstance.getCanNextPage()
          }
          onClick={() => ChangePage(2)}
        >{`>>`}</Button>
      </div>
    </footer>
  );
}
