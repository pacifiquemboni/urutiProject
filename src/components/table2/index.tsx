import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import THead from "./tableContent/head";
import TBody from "./tableContent/body";
import TFooter from "./tableContent/footer";
import css from "./style.module.scss";
import { GetDataOptions, asideProps, getDataType } from "./types";
import BigNumber from "../etc/bigNumber";
import ExportButton from "./options/export";
import Loader2 from "../etc/loader2";
import AsideFilters from "./filters/aside";
import { useCallback, useState } from "react";
import Button from "../button";
import { RefreshIcon } from "@/assets/icons";

type props<T> = {
  title?: string;
  data?: T[];
  columns: ColumnDef<T>[];
  getData?: (object: getDataType) => Promise<T[]>;
  AsideNode?: (data: asideProps<T>) => JSX.Element;
  RightNode?: () => JSX.Element;
  apiSort?: boolean;
  customPagination?: boolean;
  pagination?: Partial<GetDataOptions["pagination"]>;
  allowExport?: boolean;
  loading?: boolean;
  hideFilter?: boolean;
  emptyDataLabel?: string;
};

export default function DataTable<T>({
  title = "",
  data: defaultData = [],
  columns: columnsDef = [],
  pagination,
  customPagination,
  allowExport,
  getData,
  AsideNode,
  RightNode,
  loading,
  hideFilter,
  emptyDataLabel,
}: // apiSort = false,
props<T>) {
  const [filters, setFilters] = useState<any>({});

  const tableInstance = useReactTable<T>({
    columns: columnsDef,
    data: defaultData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const onFilter = useCallback(
    async (fi: any) => {
      await getData?.({ type: "filter", options: { filters: fi } });
      setFilters(fi);
    },
    [getData],
  );
  const refresh = useCallback(async () => {
    await getData?.({ type: "refresh", options: {} });
  }, [getData]);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.title}>
          <h2>{title}</h2>
          <small className={css.totalResults}>
            <BigNumber
              value={Number(pagination?.total || tableInstance.getRowCount() || 0)}
              clickToggle
            />
          </small>
        </div>
        <div>
          <AsideFilters<T>
            AsideNode={AsideNode}
            asideProps={{
              columns: tableInstance?.getAllColumns(),
              headerGroups: tableInstance.getHeaderGroups(),
            }}
            hideFilter={hideFilter}
            onFilter={onFilter}
          />
        </div>
        <div className={css.right_node}>
          {RightNode && typeof AsideNode == "function" && <RightNode />}
          <Button size="xsm2" className="!p-0.5 !h-fit !rounded-lg" outlined onClick={refresh}>
            <RefreshIcon />
          </Button>
          {allowExport && (
            <ExportButton<T>
              data={defaultData}
              filters={filters}
              getData={getData}
              columns={columnsDef}
              customPagination={customPagination}
              pagination={pagination}
            />
          )}
        </div>
      </header>
      <main>
        <table className={css.table} cellSpacing={0}>
          <THead<T> headerGroups={tableInstance.getHeaderGroups()} />
          <TBody<T> rowModals={tableInstance.getRowModel()} />
        </table>
        {loading ? (
          <div className={css.bottom_info}>
            <Loader2 />
          </div>
        ) : (
          !(tableInstance.getRowModel()?.rows?.length > 0) && (
            <div className={css.bottom_info}>
              <p style={{ color: "#888888" }}>{emptyDataLabel || "No Data found"}</p>
            </div>
          )
        )}
      </main>
      <TFooter<T>
        tableInstance={tableInstance}
        rows={tableInstance.getRowModel()}
        filters={filters}
        pagination={pagination}
        getData={getData}
        customPagination={customPagination}
      />
    </div>
  );
}
