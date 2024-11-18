import DataTable, { ColumnType } from "@/components/table";
import { GetProductsThunk } from "@/redux/features/actions/products";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import moment from "moment";
import { useCallback, useLayoutEffect, useMemo } from "react";
import Filters from "./filters";
import Currency from "@/components/etc/currency";
import { List } from "./list";
import { setFilters } from "@/redux/features/slices/products";

export default function DashProductsPage() {
  const dispatch = useAppDispatch();
  const { list, status, info, filters } = useAppSelector((s) => s.products);
  const { user } = useAppSelector((s) => s.user);
  const columns = useMemo<ColumnType<any>[]>(
    () => [
      {
        accessor: "name",
        Header: "name",
      },
      {
        accessor: "description",
        Header: "description",
      },
      {
        accessor: "productCost",
        Header: "Cost",
        Cell: ({ value }) => <Currency amount={Number(value)} />,
      },
      {
        accessor: "numberOfWinners",
        Header: "Winners",
      },
      {
        accessor: "status",
        Header: "Status",
        Filter: () => <></>,
      },
      {
        accessor: "playAmount",
        Header: "play Amount",
        Cell: ({ value }) => <Currency amount={value} />,
      },
    ],
    [],
  );

  const getData = useCallback(
    async (data?: any) => {
      try {
        if (user?.attributes?.radioId?.length == 1)
          data.radioId = user?.attributes?.radioId?.[0] || data?.radioId;
        // user?.attributes?.radioId || data?.radioId
        console.log({ data });

        await dispatch(GetProductsThunk(data)).unwrap();
      } catch (error: any) {
        // error
      }
    },
    [dispatch, user?.attributes?.radioId],
  );

  useLayoutEffect(() => {
    getData({ pageSize: 10 });
  }, [getData]);

  const onFilter = useCallback(
    (filters: any) => {
      dispatch(setFilters(filters));
      getData({
        ...filters,
        to: moment(filters?.to)
          .add(moment(filters?.to).format("HH") == "23" ? 0 : 86369, "seconds")
          .format("YYYY-MM-DD HH:mm"),
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
          title="Prizes"
          columns={columns}
          data={list}
          loading={status == "pending"}
          refresh={() => getData()}
          totalResults={info?.total}
          allowExport
          CustomTable={List}
          AsideNode={Filters}
          minimizeFilter
          hidePageSizeSelector
          onFilter={onFilter}
          customPaginationActions
          currentPage={info?.currentPage}
          defaultPageSize={filters.pageSize || 10}
          getMore={more}
          hideSearch
        />
      </div>
    </>
  );
}
