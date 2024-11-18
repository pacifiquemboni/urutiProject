import BigNumber from "@/components/etc/bigNumber";
import Currency from "@/components/etc/currency";
import DataTable, { ColumnType } from "@/components/table";
import { GetTopPlayersThunk } from "@/redux/features/actions/reports";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useCallback, useLayoutEffect, useMemo } from "react";

export default function TopPlayersSection() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((s) => s.user);
  const { data, fetchTimes, status } = useAppSelector((s) => s.reports.topPlayers);

  const columns = useMemo<ColumnType<any>[]>(
    () => [
      {
        accessor: "phoneNumber",
        Header: "Phone Number",
      },
      {
        accessor: "count",
        Header: "Counts",
        Cell: ({ value }) => <BigNumber value={value} clickToggle />,
      },
      {
        accessor: "amount",
        Header: "Amount",
        Cell: ({ value }) => <Currency amount={value} />,
      },
    ],
    [],
  );

  const getData = useCallback(async () => {
    try {
      const filters: any = {};

      if (user?.attributes?.radioId?.length == 1)
        filters.radioId = user?.attributes?.radioId?.[0] || filters?.radioId;

      await dispatch(GetTopPlayersThunk(filters)).unwrap();
    } catch (error) {
      // error
    }
  }, [dispatch, user?.attributes?.radioId]);

  useLayoutEffect(() => {
    if (fetchTimes <= 0) getData();
  }, [fetchTimes, getData]);

  return (
    <section className="p-4">
      <DataTable
        title="Top Players"
        refresh={getData}
        hidePagination
        data={data}
        columns={columns}
        loading={status == "pending"}
        hideSearch
      />
    </section>
  );
}
