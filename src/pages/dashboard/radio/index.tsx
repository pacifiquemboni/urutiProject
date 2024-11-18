import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useCallback, useLayoutEffect, useMemo } from "react";
// import Filters from "./filters";
// import { Input } from "@/components/form";
// import moment from "moment";
import DataTable from "@/components/table2";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { getDataType } from "@/components/table2/types";
import Filters from "./filters";
import { GetRadiosExportThunk, GetCategoriesThunk } from "@/redux/features/actions/radios";
import Actions, { Add } from "./actions";

export default function DashRadioPage() {
  const dispatch = useAppDispatch();
  const { list, status, info, fetchTimes } = useAppSelector((s) => s.radio);

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      // {
      //   accessorFn: (row) => row?.transactionId,
      //   header: "Id",
      // },
      {
        accessorFn: (row) => row.name,
        header: "Name",
      },
      {
        accessorFn: (row) => row.description,
        header: "Description",
      },
      {
        accessorFn: (row) => row.status,
        header: "Status",
        cell: ({ getValue }) => {
          const value = getValue() as string;
          return (
            <span
              className={`${value?.toLowerCase() == "active" ? "text-green-600" : "text-red-600"}`}
            >
              {value?.toLowerCase()}
            </span>
          );
        },
      },
      {
        accessorFn: (row) => row.created_at,
        header: "Date",
        cell: ({ getValue }) => moment(`${getValue()}`).format("LLL"),
      },
      {
        header: "Products",
        id: "products",
        cell: ({ row: { original } }) => {
          const number = original?.product?.length;
          return !number ? (
            "-"
          ) : (
            <>
              {number} {number == 1 ? "Product" : "Products"}
            </>
          );
        },
      },
      {
        header: "Actions",
        id: "actions",
        cell: ({ row }) => <Actions data={row} />,
      },
    ],
    [],
  );

  const getData = useCallback(
    async ({ type, options }: Partial<getDataType>) => {
      try {
        const params = {
          ...options?.filters,
          pageSize: (options?.pagination && options?.pagination?.pageSize) || 10,
          pageNumber: options?.pagination && (options?.pagination?.pageNumber ?? 1) + 1,
        };

        if (type == "export") {
          const res = await dispatch(GetRadiosExportThunk(params)).unwrap();
          return res?.list;
        } else {
          const res = await dispatch(GetCategoriesThunk(params)).unwrap();
console.log("categories,",res);

          return res?.list;
        }
      } catch (error: any) {
        // error
      }
    },
    [dispatch],
  );

  useLayoutEffect(() => {
    if (fetchTimes == 0) {
      getData({});
    }
  }, [fetchTimes, getData, list.length]);

  return (
    <>
      <div className="p-4">
        <DataTable
          title="Radio"
          columns={columns}
          data={list}
          getData={getData}
          customPagination
          pagination={{
            totalPages: info?.lastPage,
            pageNumber: (info?.currentPage || 1) - 1,
            pageSize: list?.length < 10 ? 10 : list?.length,
            total: info?.total,
          }}
          loading={status == "pending"}
          allowExport
          AsideNode={Filters}
          RightNode={() => (
            <>
              <Add />
            </>
          )}
        />
      </div>
    </>
  );
}
