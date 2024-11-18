import DataTable, { ColumnType } from "@/components/table";
import { GetRecentPlayersThunk } from "@/redux/features/actions/reports";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import moment from "moment";
import { useCallback, useLayoutEffect, useMemo } from "react";

export default function RecentPlayersSection() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((s) => s.user);
  const { data, fetchTimes, status } = useAppSelector((s) => s.reports.recentPlayers);

  const columns = useMemo<ColumnType<any>[]>(
    () => [
      {
        accessor: "phone_number",
        Header: "Phone Number",
      },
      {
        accessor: "amount",
        Header: "Amount",
      },
      {
        accessor: "product[productName]",
        Header: "Prize",
      },
      {
        accessor: "telco",
        Header: "Telco",
      },
      {
        accessor: "status",
        Header: "Status",
      },
      {
        accessor: "transaction_date",
        Header: "Date",
        Cell: ({ value }) => moment(value).fromNow(),
      },
      {
        accessor: "expired",
        Header: "expired",
        Cell: ({ value }) => (
          <span className={`${value ? "text-green-600" : "text-red-600"}`}>
            {value ? "true" : "false"}
          </span>
        ),
      },
    ],
    [],
  );

  const getData = useCallback(async () => {
    try {
      const filters: any = {};

      if (user?.attributes?.radioId?.length == 1)
        filters.radioId = user?.attributes?.radioId?.[0] || filters?.radioId;

      await dispatch(GetRecentPlayersThunk(filters)).unwrap();
    } catch (error) {
      // error
    }
  }, [dispatch, user?.attributes?.radioId]);

  useLayoutEffect(() => {
    if (fetchTimes <= 0) getData();
  }, [fetchTimes, getData]);

  return (
    <section className="p-4 md:col-span-2">
      <DataTable
        title="Recent Participants"
        refresh={getData}
        hidePagination
        data={data}
        columns={columns}
        loading={status == "pending"}
      />
    </section>
  );
}
