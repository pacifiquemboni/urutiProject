import Currency from "@/components/etc/currency";
import DataTable, { ColumnType } from "@/components/table";
import { setTempWonFilters } from "@/redux/features/slices/draw";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import moment from "moment";
import { useCallback, useLayoutEffect, useMemo } from "react";
import Filters from "./filters";
import { GetTempWonThunk } from "@/redux/features/actions/draw/tempWon";
import Actions from "./actions";

export default function DashTempTokensPage() {
  const dispatch = useAppDispatch();
  const { list, status, fetchTimes, info, filters } = useAppSelector((s) => s.draw.tempWon);
  const { user } = useAppSelector((s) => s.user);
  const columns = useMemo<ColumnType<any>[]>(
    () => [
      {
        accessor: "tokenId",
        Header: "token",
        Filter: () => <></>,
      },
      {
        accessor: "phoneNumber",
        Header: "Phone",
      },
      {
        accessor: "created_at",
        Header: "created date",
        Cell: ({ value }) => moment(value).format("llll"),
      },
      {
        accessor: "draw[startDate]",
        Header: "draw",
        Cell: ({ value, row: { original } }) => (
          <>
            {moment(value).format("ll")} - {moment(original?.draw?.endDate).format("ll")}
          </>
        ),
      },

      {
        accessor: "draw[product[productName]]",
        Header: "Prize",
      },
      {
        accessor: "product[playAmount]",
        Header: "Pray Amount",
        Cell: ({ value }) => <Currency amount={Number(value)} />,
      },
      {
        id: "actions",
        Cell: ({ row }) => <Actions data={row} />,
      },
    ],
    [],
  );

  const getData = useCallback(
    async (data?: any) => {
      try {
        if (user?.attributes?.radioId?.length == 1)
          data.radioId = user?.attributes?.radioId?.[0] || data?.radioId;

        await dispatch(GetTempWonThunk(data)).unwrap();
      } catch (error: any) {
        // error
      }
    },
    [dispatch, user?.attributes?.radioId],
  );

  useLayoutEffect(() => {
    if (fetchTimes == 0) getData();
  }, [fetchTimes, getData, list.length]);

  const onFilter = useCallback(
    (filters: any) => {
      dispatch(setTempWonFilters(filters));
      getData(filters);
    },
    [dispatch, getData],
  );

  const more = useCallback(
    (number?: number) => {
      getData({ ...filters, pageNumber: (info?.currentPage || 0) + (number || 1) });
    },
    [filters, getData, info?.currentPage],
  );

  return (
    <>
      <div className="p-4">
        <DataTable<any>
          title="Temporaly Winners"
          columns={columns}
          data={list}
          loading={status == "pending"}
          refresh={() => getData()}
          totalResults={info?.total}
          allowExport
          AsideNode={Filters}
          minimizeFilter
          hidePageSizeSelector
          hideSearch
          onFilter={onFilter}
          customPaginationActions
          currentPage={info?.currentPage}
          defaultPageSize={filters.pageSize || 10}
          getMore={more}
        />
      </div>
    </>
  );
}
