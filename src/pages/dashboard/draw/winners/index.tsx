import Currency from "@/components/etc/currency";
import {
  GetLatestWonTokenThunk,
  GetWonTokenExportsThunk,
  GetWonTokenThunk,
} from "@/redux/features/actions/draw/won";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import moment from "moment";
import { useCallback, useLayoutEffect, useMemo } from "react";
import Filters from "./filters";
import Actions from "./actions";
import { getDataType } from "@/components/table2/types";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/table2";
import useQueryPages from "@/hooks/queryPage";

export default function WinnersPage() {
  const dispatch = useAppDispatch();
  const { openPage, closePage, opened } = useQueryPages("tab");
  const { list, status, fetchTimes, info } = useAppSelector((s) => s.draw.won);
  const { user } = useAppSelector((s) => s.user);
  const {
    list: latest_list,
    fetchTimes: latest_times,
    status: latest_status,
  } = useAppSelector((s) => s.draw.latest_won);
  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "tokenId",
        header: "token",
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone Number",
      },
      {
        accessorFn: (row) =>
          moment(`${row.draw.startDate}`).format("ll") +
          " - " +
          moment(row?.draw?.endDate).format("ll"),
        header: "draw",
      },

      {
        accessorFn: (row) => row.draw.product.productName,
        header: "Prize",
      },
      {
        accessorFn: (row) => row.draw.product.playAmount,
        header: "Pray Amount",
        cell: ({ getValue }) => <Currency amount={Number(getValue())} />,
      },
      {
        accessorFn: (row) => moment(row.created_at).format("llll"),
        header: "created date",
        // cell: ({ getValue }) =>,
      },
      {
        accessorKey: "handedOver",
        header: "handedOver",
        cell: ({ getValue }) => (
          <span className={`${getValue() ? "text-green-600" : "text-red-600"}`}>
            {getValue() ? "true" : "false"}
          </span>
        ),
      },
      {
        accessorFn: (row) => (row.handedOverDate ? moment(row.handedOverDate).format("llll") : "-"),
        header: "handedOver Date",
      },
      {
        id: "action",
        cell: ({ row }) => <Actions data={row} />,
      },
    ],
    [],
  );

  const getData = useCallback(
    async ({ type, options }: Partial<getDataType>) => {
      try {
        if (options?.filters?.to)
          options.filters.to = moment(options.filters.to)
            .add(moment(options.filters.to).format("HH") == "23" ? 0 : 86369, "seconds")
            .format("YYYY-MM-DD HH:mm");

        const params: any = {
          ...options?.filters,
          pageSize: (options?.pagination && options?.pagination?.pageSize) || 10,
          pageNumber: options?.pagination && (options?.pagination?.pageNumber ?? 1) + 1,
        };

        if (user?.attributes?.radioId?.length == 1)
          params.radioId = user?.attributes?.radioId?.[0] || params?.radioId;

        if (type == "export") {
          const res = await dispatch(GetWonTokenExportsThunk(params)).unwrap();
          return res?.list;
        } else {
          const res = await dispatch(GetWonTokenThunk(params)).unwrap();
          return res?.list;
        }
      } catch (error: any) {
        // error
      }
    },
    [dispatch, user?.attributes?.radioId],
  );

  const getLatestData = useCallback<any>(async () => {
    try {
      const data: any = {};

      if (user?.attributes?.radioId?.length == 1)
        data.radioId = user?.attributes?.radioId?.[0] || data?.radioId;

      await dispatch(GetLatestWonTokenThunk(data)).unwrap();
    } catch (error) {
      console.log({ error });
    }
  }, [dispatch, user?.attributes?.radioId]);

  useLayoutEffect(() => {
    if (fetchTimes == 0) getData({});
    if (latest_times == 0) getLatestData();
  }, [fetchTimes, getData, getLatestData, latest_times]);

  return (
    <>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-4 [&>.active]:bg-primary [&>.active]:font-semibold [&>.active]:text-white [&>*]:inline-block [&>*]:cursor-pointer [&>*]:rounded-md [&>*]:p-2 [&>*]:px-4 [&>*]:bg-light-grey">
          <span onClick={() => closePage()} className={`${opened == null ? "active" : ""}`}>
            Latest Winners
          </span>
          <span onClick={() => openPage("all")} className={`${opened == "all" ? "active" : ""}`}>
            All Winners
          </span>
        </div>
        {opened == "all" ? (
          <DataTable
            key="all"
            title="winners"
            columns={columns}
            data={list}
            loading={status == "pending"}
            allowExport
            AsideNode={Filters}
            customPagination
            getData={getData}
            pagination={{
              totalPages: info?.lastPage,
              pageNumber: (info?.currentPage || 1) - 1,
              pageSize: list?.length < 10 ? 10 : list?.length,
              total: info?.total,
            }}
          />
        ) : (
          <DataTable
            key="latest"
            title="Latest winners"
            columns={columns}
            data={latest_list}
            loading={latest_status == "pending"}
            getData={getLatestData}
            allowExport
          />
        )}
      </div>
    </>
  );
}
