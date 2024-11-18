import Button from "@/components/button";
import BigNumber from "@/components/etc/bigNumber";
import useModal from "@/components/etc/modal";
import Modal from "@/components/modal";
import DataTable from "@/components/table2";
import { getDataType } from "@/components/table2/types";
import { GetTransactionsHitsThunk } from "@/redux/features/actions/transactions";
import { useAppDispatch } from "@/redux/hook";
import { ColumnDef } from "@tanstack/react-table";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";

export default function Hits() {
  const dispatch = useAppDispatch();
  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorFn: (row) => row.phone_number,
        header: "Phone Number",
      },
      {
        accessorFn: (row) => row?.totalHits,
        header: "Total Hits",
        cell: ({ getValue }) => <BigNumber value={Number(getValue())} clickToggle />,
      },
      {
        accessorFn: (row) => row.totalSuccess,
        header: "Success Hits",
        cell: ({ getValue }) => <BigNumber value={Number(getValue())} clickToggle />,
      },
      {
        accessorFn: (row) => row.totalFailed,
        header: "Failed Hits",
        cell: ({ getValue }) => <BigNumber value={Number(getValue())} clickToggle />,
      },
    ],
    [],
  );
  const [data, setData] = useState<any[]>([]);
  const [info, setInfo] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const hitPage = useModal("hits");

  const getData = useCallback(
    async ({ type, options }: Partial<getDataType>) => {
      try {
        if (type != "export") setLoading(true);

        const params = {
          pageSize: (options?.pagination && options?.pagination?.pageSize) || 10,
          pageNumber: options?.pagination && (options?.pagination?.pageNumber ?? 1) + 1,
        };

        if (type == "export") {
          const res = await dispatch(GetTransactionsHitsThunk(params)).unwrap();
          return res?.list;
        } else {
          const res = await dispatch(GetTransactionsHitsThunk(params)).unwrap();
          const { list, ...other } = res;
          setData(list);
          setInfo(other);
          return res?.list;
        }
      } catch (error: any) {
        // error
      } finally {
        setLoading(false);
      }
    },
    [dispatch],
  );

  useLayoutEffect(() => {
    getData({});
  }, [getData]);

  return (
    <>
      <Button size="xsm" onClick={() => hitPage?.open()}>
        Get Hits
      </Button>
      <Modal isOpen={hitPage?.isOpen} size="sm" onRequestClose={() => hitPage?.close()}>
        <DataTable
          title="Hits"
          columns={columns}
          data={data}
          loading={loading}
          getData={getData}
          customPagination
          allowExport
          pagination={{
            totalPages: Math.ceil(info?.total / (data?.length < 10 ? 10 : data?.length)),
            pageNumber: (info?.currentPage || 1) - 1,
            pageSize: data?.length < 10 ? 10 : data?.length,
            total: info?.total,
          }}
        />
      </Modal>
    </>
  );
}
