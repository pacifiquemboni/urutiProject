import { CSSProperties, Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import {
  useFilters,
  useRowSelect,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  Column,
  Row,
  useExpanded,
  HeaderGroup,
  TableHeaderGroupProps,
} from "react-table";
import DataPagination from "./pagination";
import css from "./style.module.scss";
import Button from "../button";
import RefreshIcon from "@assets/icons/refresh";
import THead from "./thead";
import GlobalFilter from "./filters/global";
import AsideFilters from "./filters/aside";
import SelectionCheckbox from "./selection/checkbox";
import ExportData from "./export";
import Loader2 from "@components/etc/loader2";
import BigNumber from "../etc/bigNumber";
import ExpandRow from "./expand/row";

export type FiltersType<T extends object> = {
  column: Required<ColumnType<T>>;
  state: {
    filters: { id: string; value: string }[];
  };
  value: string | number;
};

export type ColumnType<T extends object> = Column<T> & {
  disableFilters?: boolean;
  canSearch?: boolean;
  Filter?: (filters: FiltersType<T>) => JSX.Element | undefined;
  Searcher?: (filters: FiltersType<T>) => JSX.Element | undefined;
  sortType?: (a: any, b: any) => string | number | boolean | any;
  filterValue?: string;
  columns?: ColumnType<T>[];
  style?: CSSProperties;
  setFilter?: (
    // e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    value: string,
  ) => void;
};

export type RowType<T extends object> = Row<T> & {
  original: T | any;
  isExpanded?: boolean;
};

export type asideProps<T extends object> = {
  columns: Required<ColumnType<T>>;
  headerGroups: HeaderGroup[];
  onFilter?: (filters: any) => any;
};

export type customTableProps<T extends object> = {
  loading: boolean;
  headerGroups: TableHeaderGroupProps;
  rows: RowType<T>[];
  page: RowType<T>[];
};

type props<T extends object> = {
  title: ReactNode | string;
  searchBoxLabel?: string;
  emptyDataLabel?: ReactNode | string;
  data: T[];
  searchedList?: T[];
  columns: ColumnType<T>[];
  hiddenColumns?: string[];
  searchParams?: URLSearchParams;
  totalResults?: number | string;
  currentPage?: number | string;
  defaultPageSize?: number;
  RightNode?: () => ReactNode;
  AsideNode?: (data: asideProps<T>) => ReactNode;
  topNode?: ReactNode;
  loading?: boolean;
  breakWord?: boolean;
  allowSelection?: boolean;
  allowExpand?: boolean;
  allowExport?: boolean;
  minimizeFilter?: boolean;
  hideFilter?: boolean;
  hidePageSizeSelector?: boolean;
  hideSearch?: boolean;
  customPaginationActions?: boolean;
  hidePagination?: boolean;
  hideTop?: boolean;
  inline?: boolean;
  refresh?: () => any;
  getMore?: () => any;
  onSelect?: (data: T[]) => void;
  defaultSortBy?: { id: string; desc?: boolean }[];
  onRowClick?: (props: { row: RowType<T> }) => void;
  onSearch?: (props: { data?: T[]; value?: string }) => void;
  rowId?: (row: RowType<T>) => string | number | any;
  onExpand?: (props: { row: RowType<T> }) => Promise<void>;
  SubRow?: (props: { row: RowType<T> }) => JSX.Element;
  CustomTable?: (props: customTableProps<T>) => JSX.Element;
  onFilter?: (filters: any) => any;
};

function DataTable<T extends object>({
  data,
  columns = [],
  title,
  searchBoxLabel,
  emptyDataLabel,
  loading,
  breakWord,
  searchParams,
  totalResults,
  currentPage,
  refresh,
  getMore,
  RightNode,
  AsideNode,
  topNode,
  allowSelection,
  allowExpand,
  allowExport,
  onSelect,
  minimizeFilter,
  hideFilter,
  hidePagination,
  hideTop,
  hiddenColumns = [],
  hidePageSizeSelector,
  hideSearch,
  customPaginationActions,
  defaultSortBy = [],
  onRowClick,
  onSearch,
  rowId,
  searchedList,
  inline,
  defaultPageSize,
  onExpand,
  SubRow,
  CustomTable,
  onFilter,
}: props<T>) {
  const [toSearch, setToSearch] = useState(false);
  const sortedColumns = useMemo(() => [...columns], [columns]);
  const sortedData = useMemo(() => {
    if (toSearch && searchedList) return searchedList || [];
    else return data ? data : [];
  }, [data, searchedList, toSearch]);
  const TableInstance = useTable<any>(
    {
      data: sortedData,
      columns: sortedColumns as any,
      initialState: {
        pageSize: Number(searchParams?.get("_pS")) || defaultPageSize || 10,
        pageIndex: Number(searchParams?.get("_pI")) || 0,
        globalFilter: searchParams?.get("_gF") || "",
        hiddenColumns,
        sortBy: defaultSortBy,
      } as any,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        if (allowSelection)
          columns = [
            {
              id: "delection",
              Header: ({ getToggleAllRowsSelectedProps }: any) => (
                <SelectionCheckbox {...getToggleAllRowsSelectedProps()} />
              ),
              Cell: ({ row }: any) => <SelectionCheckbox {...row.getToggleRowSelectedProps()} />,
              style: {
                width: "fit-content",
              },
            } as any,
            ...columns,
          ];
        if (allowExpand)
          columns = [
            {
              id: "expansion",
              Header: () => null,
              Cell: (data: any) => ExpandRow({ ...data, onExpand }),
              style: {
                width: "fit-content",
              },
            } as any,
            ...columns,
          ];

        return columns;
      });
      if (rowId && typeof rowId == "function")
        hooks.useInstance.push(({ rows: instanceRows }) => {
          instanceRows.forEach((row) => {
            row.id = rowId(row);
          });
        });
    },
  );

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    state,
    headerGroups,
    flatRows,
    setGlobalFilter,
    initialRows,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    setPageSize,
    pageOptions,
    selectedFlatRows,
    columns: tableColumns,
  } = useMemo<any>(() => TableInstance, [TableInstance]);
  const { globalFilter, pageIndex, pageSize } = state;

  // get filters in one array
  const filters = useMemo(
    () =>
      headerGroups
        .map((headerGroup: any) =>
          headerGroup.headers.filter((c: any) => !!c?.Filter && !c?.canSearch),
        )
        .flat(),
    [headerGroups],
  );

  // set selected data
  useEffect(() => {
    if (onSelect)
      onSelect(
        selectedFlatRows.map((row: any) => ({
          original: row.original,
          values: row.values,
        })),
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFlatRows]);

  return (
    <>
      <div
        className={`${css.container} ${!filters.length ? css.no_side : ""} 
            ${minimizeFilter ? css.min_filter : ""} ${
              inline ? css.inline : ""
            } ${topNode ? css.topped : ""}`}
      >
        {topNode && <div className={css.topNode}>{topNode}</div>}
        <AsideFilters
          filters={filters}
          AsideNode={AsideNode}
          asideProps={{ columns: tableColumns, headerGroups }}
          hideFilter={hideFilter}
          onFilter={onFilter}
        />
        {!hideTop && (
          <>
            <div className={`${css.title}`}>
              <h2>{title}</h2>
              <small className={css.totalResults}>
                <BigNumber value={Number(totalResults || data?.length || 0)} clickToggle />
              </small>
            </div>
            <div className={css.heading}>
              <header className={css.header}>
                {!hideSearch && (
                  <GlobalFilter
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                    onSearch={onSearch}
                    toSearch={toSearch}
                    searchedList={searchedList}
                    setToSearch={setToSearch}
                    searchBoxLabel={searchBoxLabel}
                  />
                )}
                <div className={css.left}>
                  {RightNode && <RightNode />}
                  {refresh && (
                    <Button
                      size="xsm2"
                      className="!p-0.5 !h-fit !rounded-lg"
                      outlined
                      onClick={refresh}
                    >
                      <RefreshIcon />
                    </Button>
                  )}
                  {allowExport && (
                    <ExportData
                      filtered={flatRows.map((r: any) => r.values)}
                      allData={initialRows.map((r: any) => r.values)}
                      currentData={page.map((r: any) => r.values)}
                      allowSelection={allowSelection}
                      selectedData={selectedFlatRows.map((r: any) => r.values)}
                    />
                  )}
                </div>
              </header>
            </div>
          </>
        )}
        <main className={css.content} style={hideTop ? { marginTop: 0 } : {}}>
          {CustomTable ? (
            <CustomTable
              rows={initialRows}
              headerGroups={headerGroups}
              page={page}
              loading={Boolean(loading)}
            />
          ) : (
            <>
              <div style={{ overflowX: "auto" }}>
                <table
                  className={`${css.table} ${breakWord && css.breakWord}`}
                  cellSpacing={0}
                  {...getTableProps()}
                >
                  <THead headerGroups={headerGroups} />
                  <tbody {...getTableBodyProps()}>
                    {page.length > 0 &&
                      page.map((row: any) => {
                        prepareRow(row);
                        const { key, ...props } = row.getRowProps();

                        return (
                          <Fragment key={key}>
                            <tr
                              className={`${css.row} ${row.isSelected || row.isExpanded ? css.selected : ""}`}
                              {...props}
                            >
                              {row.cells.map((cell: any) => {
                                const { key, ...props } = cell.getCellProps();
                                props.style = { ...props?.style, ...cell?.column?.style };

                                return (
                                  <td
                                    key={key}
                                    className={`${css.datacell} ${onRowClick ? css.clickable : ""}`}
                                    {...props}
                                    onClick={() => {
                                      if (!["delection"].includes(cell.column.id))
                                        onRowClick?.({ row });
                                    }}
                                  >
                                    {cell.render("Cell")}
                                  </td>
                                );
                              })}
                            </tr>
                            {row.isExpanded && SubRow ? (
                              <tr>
                                <td colSpan={columns.length + 1}>{SubRow?.({ row })}</td>
                              </tr>
                            ) : null}
                          </Fragment>
                        );
                      })}
                  </tbody>
                </table>
                {loading ? (
                  <div className={css.bottom_info}>
                    <Loader2 />
                  </div>
                ) : (
                  !(page.length > 0) && (
                    <div className={css.bottom_info}>
                      <p style={{ color: "#888888" }}>{emptyDataLabel || "No Data found"}</p>
                    </div>
                  )
                )}
              </div>
            </>
          )}
        </main>
        {!hidePagination && (
          <DataPagination
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
            columnLength={columns.length}
            gotoPage={gotoPage}
            nextPage={nextPage}
            previousPage={previousPage}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
            pageCount={pageCount}
            pageSize={pageSize}
            currentSize={page?.length}
            setPageSize={setPageSize}
            totalResults={totalResults || data?.length}
            loading={loading}
            hidePageSizeSelector={hidePageSizeSelector}
            customPaginationActions={customPaginationActions}
            getMore={getMore}
            currentPage={currentPage}
          />
        )}
      </div>
      {/* <Modal /> */}
    </>
  );
}

export default DataTable;
