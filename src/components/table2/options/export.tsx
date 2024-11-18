import { ExportIcon } from "@/assets/icons";
import Button from "@/components/button";
import { GetDataOptions, getDataType } from "../types";
import { useCallback, useState } from "react";
import css from "../style.module.scss";
import { ExportAsExcel, ExportAsPdf } from "react-export-table";

import Modal from "@/components/modal";
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import THead from "../tableContent/head";
import TBody from "../tableContent/body";
import TFooter from "../tableContent/footer";
import Loader2 from "@/components/etc/loader2";

export default function ExportButton<T>({
  getData,
  columns,
  pagination,
  filters,
  customPagination,
  data,
}: {
  data?: T[];
  filters?: any;
  getData?: (object: getDataType) => Promise<T[]>;
  columns: ColumnDef<T>[];
  customPagination?: boolean;
  pagination?: Partial<GetDataOptions["pagination"]>;
}) {
  const [viewPreview, setViewPreview] = useState(false);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [dataPreview, setDataPreview] = useState<T[]>([]);

  const preview = useCallback(async () => {
    try {
      setViewPreview(true);
      setLoadingPreview(true);

      const a = customPagination
        ? await getData?.({
            type: "export",
            options: {
              filters,
              pagination: { ...(pagination as any), pageSize: Number(pagination?.total) },
            },
          })
        : data;

      setDataPreview(a || []);
    } catch (error) {
      setViewPreview(false);
    } finally {
      setLoadingPreview(false);
    }
  }, [customPagination, data, filters, getData, pagination]);

  const tableInstance = useReactTable<T>({
    columns,
    data: dataPreview,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <Button onClick={preview} size="xsm" icon={<ExportIcon />}>
        export
      </Button>
      <Modal
        size="sm"
        isOpen={viewPreview}
        onRequestClose={() => {
          setViewPreview(false);
        }}
      >
        <div className="flex gap-2 flex-wrap">
          <ExportAsPdf
            data={tableInstance
              ?.getFilteredRowModel()
              ?.rows?.map((s) =>
                Object.fromEntries(
                  s?.getVisibleCells()?.map((c) => [c?.column?.id, c?.getValue()]),
                ),
              )}
            headers={tableInstance?.getAllColumns()?.map((c) => c.id)}
            fileName="Download"
          >
            {({ onClick }) => (
              <Button size="xsm" onClick={onClick}>
                PDF
              </Button>
            )}
          </ExportAsPdf>

          <ExportAsExcel
            data={tableInstance
              ?.getFilteredRowModel()
              ?.rows?.map((s) =>
                Object.fromEntries(
                  s?.getVisibleCells()?.map((c) => [c?.column?.id, c?.getValue()]),
                ),
              )}
            headers={tableInstance?.getAllColumns()?.map((c) => c.id)}
            fileName="Download"
          >
            {({ onClick }) => (
              <Button size="xsm" onClick={onClick}>
                Excel
              </Button>
            )}
          </ExportAsExcel>
        </div>
        <div className={css.container}>
          <main>
            <table className={css.table} cellSpacing={0}>
              <THead<T> headerGroups={tableInstance.getHeaderGroups()} />
              <TBody<T> rowModals={tableInstance.getRowModel()} />
            </table>
          </main>
          {loadingPreview ? (
            <div className={css.bottom_info}>
              <Loader2 />
            </div>
          ) : (
            !(tableInstance.getRowModel()?.rows?.length > 0) && (
              <div className={css.bottom_info}>
                <p style={{ color: "#888888" }}>No Data found</p>
              </div>
            )
          )}
        </div>
        <TFooter<T> tableInstance={tableInstance} rows={tableInstance.getRowModel()} />
      </Modal>
    </>
  );
}
