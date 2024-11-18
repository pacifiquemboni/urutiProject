import DataTable, { ColumnType } from "@/components/table";
import { setTokenFilters } from "@/redux/features/slices/draw";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import moment from "moment";
import { useCallback, useLayoutEffect, useMemo } from "react";
import Filters from "./filters";
import { GetDrawListThunk } from "@/redux/features/actions/draw";

export default function DashDrawList() {
  const dispatch = useAppDispatch();
  const { list, status, fetchTimes, info, filters } = useAppSelector((s) => s.draw.table);
  const { user } = useAppSelector((s) => s.user);
  const columns = useMemo<ColumnType<any>[]>(
    () => [
      {
        accessor: "product[productPicture]",
        Header: "",
        sortType: () => undefined,
        style: {
          // width: "2rem",
          display: "grid",
          placeItems: "center",
          padding: "0.25rem",
        },
        Cell: ({ value }) => <img src={value} className="size-6 object-contain" />,
      },
      {
        accessor: "product[productName]",
        Header: "Prize",
        Filter: () => <></>,
      },
      {
        accessor: "startDate",
        Header: "start Date",
        Cell: ({ value }) => moment(value).format("ll"),
      },
      {
        accessor: "endDate",
        Header: "end Date",
        Cell: ({ value }) => moment(value).format("ll"),
      },
      {
        accessor: "product[isAvailable]",
        Header: "isAvailable",
        Cell: ({ value }) => (
          <span className={`${value ? "text-green-600" : "text-red-600"}`}>
            {value ? "true" : "false"}
          </span>
        ),
      },
      {
        accessor: "isPlayed",
        Header: "Played?",
        Cell: ({ value }) => (
          <span className={`${value ? "text-green-600" : "text-red-600"}`}>
            {value ? "true" : "false"}
          </span>
        ),
      },
    ],
    [],
  );

  const getData = useCallback(
    async (data?: any) => {
      try {
        if (user?.attributes?.radioId?.length == 1)
          data.radioId = user?.attributes?.radioId?.[0] || data?.radioId;

        await dispatch(GetDrawListThunk(data)).unwrap();
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
      dispatch(setTokenFilters(filters));
      getData({
        ...filters,
      });
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
          title="Draws List"
          columns={columns}
          data={list}
          loading={status == "pending"}
          refresh={() => getData({})}
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
