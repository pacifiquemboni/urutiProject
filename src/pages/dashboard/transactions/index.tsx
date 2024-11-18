import {
  GetTransactionsExportThunk,
  GetTransactionsReportThunk,
  GetTransactionsThunk,
} from "@/redux/features/actions/transactions";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
// import Filters from "./filters";
// import { Input } from "@/components/form";
// import moment from "moment";
import Separator from "@/components/etc/separator";
import { Box } from "@/components/etc/box";
import Currency from "@/components/etc/currency";
import CheckRole from "@/components/etc/CheckRoles";
import DataTable from "@/components/table2";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { getDataType } from "@/components/table2/types";
import Filters from "./filters";
import Hits from "./hits";

export default function DashTransactionsPage() {
  const dispatch = useAppDispatch();
  const {
    list,
    status,
    info,
    // fetchTimes,
    // filters,
    reports: { data },
  } = useAppSelector((s) => s.transactions);

  const [fetched, setFetched] = useState(false);

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorFn: (row) => row?.transactionId,
        header: "transaction Id",
      },
      {
        accessorFn: (row) => row.phone_number,
        header: "Phone Number",
      },
      {
        accessorFn: (row) => row.product.productName,
        header: "prize",
      },
      {
        accessorFn: (row) => row.amount,
        header: "Amount",
        filterFn: "inNumberRange",
      },
      {
        accessorFn: (row) => row.telco,
        header: "Telco",
        // filterFn: (row, value, filterValue) => <><input type="text" onChange={se} /></>
      },
      {
        accessorFn: (row) => row.status,
        header: "Status",
        cell: ({ getValue }) => {
          const value = getValue() as string;
          return (
            <span
              className={`${value?.toLowerCase() == "successful" ? "text-green-600" : value?.toLowerCase() == "pending" ? "text-orange-500" : "text-red-600"}`}
            >
              {value?.toLowerCase()}
            </span>
          );
        },
        // Filter: ({ column }) => {
        //   const { filterValue = "", setFilter } = column;
        //   return (
        //     <>
        //       <Input
        //         label="select status"
        //         value={filterValue}
        //         onChange={(e) => setFilter(e.target.value)}
        //       />
        //     </>
        //   );
        // },
      },
      {
        accessorFn: (row) => row.created_at,
        header: "Transaction Date",
        cell: ({ getValue }) => moment(`${getValue()}`).format("LLL"),
      },
      {
        accessorFn: (row) => row.expired,
        header: "expired",
        cell: ({ getValue }) => (
          <span className={`${getValue() ? "text-green-600" : "text-red-600"}`}>
            {getValue() ? "true" : "false"}
          </span>
        ),
      },
    ],
    [],
  );

  const getReports = useCallback(
    async (data?: any) => {
      try {
        await dispatch(GetTransactionsReportThunk(data));
      } catch (error: any) {
        // error
      }
    },
    [dispatch],
  );

  const getData = useCallback(
    async ({ type, options }: Partial<getDataType>) => {
      try {
        const params: any = {
          ...options?.filters,
          pageSize: (options?.pagination && options?.pagination?.pageSize) || 10,
          pageNumber: options?.pagination && (options?.pagination?.pageNumber ?? 1) + 1,
        };

        if (["filter", "refresh"].includes(`${type}`)) {
          getReports(options?.filters);
        }

        if (type == "export") {
          const res = await dispatch(GetTransactionsExportThunk(params)).unwrap();
          return res?.list;
        } else {
          const res = await dispatch(GetTransactionsThunk(params)).unwrap();
          return res?.list;
        }
      } catch (error: any) {
        // error
      }
    },
    [dispatch, getReports],
  );

  useLayoutEffect(() => {
    if (!fetched) {
      getData({});
      getReports({
        from: moment().format("LLLL"),
        to: moment(moment().format("YYYY-MM-DD")).add(86369, "seconds").format("YYYY-MM-DD HH:mm"),
      });

      setFetched(true);
    }
  }, [fetched, getData, getReports]);

  // const onFilter = useCallback(
  //   (filters: any) => {
  //     const data = {
  //       ...filters,
  //       to: !filters?.to
  //         ? ""
  //         : moment(filters?.to)
  //             .add(moment(filters?.to).format("HH") == "23" ? 0 : 86369, "seconds")
  //             .format("YYYY-MM-DD HH:mm"),
  //     };
  //     getData(data);
  //     getReports(data);
  //   },
  //   [getData, getReports],
  // );

  // const more = useCallback(
  //   (number?: number) => {
  //     getData({ ...filters, pageNumber: (info?.currentPage || 0) + (number || 1) });
  //   },
  //   [filters, getData, info?.currentPage],
  // );

  return (
    <>
      <div className="p-4">
        <DataTable
          title="Transactions"
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
          // refresh={() => getData()}
          // totalResults={info?.total}
          AsideNode={Filters}
          RightNode={() => <Hits />}
          // minimizeFilter
          // hidePageSizeSelector
          // getMore={more}
          // onFilter={onFilter}
          // customPaginationActions
          // hideSearch
          // currentPage={info?.currentPage}
        />
      </div>
      <CheckRole permission={["view_reports"]}>
        <Separator className="!my-0 h-[0.8px]" />
        <section className="grid grid-cols-1 gap-2 md:grid-cols-3 p-2">
          <Box title="Transactions">
            <strong className="text-2xl">
              {data?.total_transaction?.cumulative?.transaction || 0}
            </strong>
            <p>
              <span className="text-grey">Current Tx</span>{" "}
              <b>{data?.total_transaction?.current?.transaction || 0}</b>
            </p>
          </Box>
          <Box title="Unique Transactions">
            <strong className="text-2xl">{data?.unique?.cumulative?.uniqueHits || 0}</strong>
            <p>
              <span className="text-grey">Current Unique Tx</span>{" "}
              <b>{data?.unique?.current?.uniqueHits || 0}</b>
            </p>
          </Box>
          <Box title="Revenue">
            <strong className="text-2xl">
              <Currency amount={data?.total_transaction?.cumulative?.revenue} />
            </strong>
            <p>
              <span className="text-grey">Current Revenue</span>{" "}
              <b>
                <Currency amount={data?.total_transaction?.current?.revenue} />
              </b>
            </p>
          </Box>
        </section>
      </CheckRole>
    </>
  );
}
