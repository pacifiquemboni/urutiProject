import DataTable, { ColumnType } from "@/components/table";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useCallback, useLayoutEffect, useMemo } from "react";
import Filters from "./filters";
import moment from "moment";
import { GetPaymentsThunk } from "@/redux/features/actions/payment";

export default function DashPaymentPage() {
  const dispatch = useAppDispatch();
  const { list, status, info, fetchTimes, filters } = useAppSelector((s) => s.payments);
  const { user } = useAppSelector((s) => s.user);

  const columns = useMemo<ColumnType<any>[]>(
    () => [
      {
        accessor: "phone_number",
        Header: "Phone Number",
      },
      {
        accessor: "product[productName]",
        Header: "prize",
      },
      {
        accessor: "amount",
        Header: "Amount",
      },

      {
        accessor: "status",
        Header: "Status",
        Filter: () => <></>,
        Cell: ({ value }) => (
          <span
            className={`${value?.toLowerCase() == "successful" ? "text-green-600" : value?.toLowerCase() == "pending" ? "text-orange-500" : "text-red-600"}`}
          >
            {value?.toLowerCase()}
          </span>
        ),
      },
      {
        accessor: "transaction_date",
        Header: "Transaction Date",
        Cell: ({ value }) => moment(value).format("LLL"),
      },
      {
        accessor: "updated_at",
        Header: "Updated Date",
        Cell: ({ value }) => moment(value).format("LLL"),
      },
    ],
    [],
  );

  const getData = useCallback(
    async (data?: any) => {
      try {
        if (user?.attributes?.radioId?.length == 1)
          data.radioId = user?.attributes?.radioId?.[0] || data?.radioId;

        await dispatch(GetPaymentsThunk(data)).unwrap();
      } catch (error: any) {
        // error
      }
    },
    [dispatch, user?.attributes?.radioId],
  );

  useLayoutEffect(() => {
    if (fetchTimes == 0) {
      getData();
    }
  }, [fetchTimes, getData]);

  const onFilter = useCallback(
    (filters: any) => {
      const data = {
        ...filters,
        to: !filters?.to
          ? ""
          : moment(filters?.to)
              .add(moment(filters?.to).format("HH") == "23" ? 0 : 86369, "seconds")
              .format("YYYY-MM-DD HH:mm"),
      };

      if (user?.attributes?.radioId?.length == 1)
        data.radioId = user?.attributes?.radioId?.[0] || data?.radioId;

      getData(data);
    },
    [getData, user?.attributes?.radioId],
  );

  const more = useCallback(
    (number?: number) => {
      getData({ ...filters, pageNumber: (info?.currentPage || 0) + (number || 1) });
    },
    [filters, getData, info?.currentPage],
  );

  return (
    <div className="p-4">
      <DataTable<any>
        title="Payment"
        columns={columns}
        data={list}
        loading={status == "pending"}
        refresh={() => getData()}
        totalResults={info?.total}
        allowExport
        AsideNode={Filters}
        minimizeFilter
        hidePageSizeSelector
        getMore={more}
        onFilter={onFilter}
        customPaginationActions
        hideSearch
        currentPage={info?.currentPage}
      />
    </div>
  );
}
