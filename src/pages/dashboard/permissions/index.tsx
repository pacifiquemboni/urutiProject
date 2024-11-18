import { GetPermissionsThunk } from "@/redux/features/actions/permissions";
import DataTable, { ColumnType } from "@components/table";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useCallback, useLayoutEffect, useMemo } from "react";
import { List } from "./list";

export default function DashPermissionsPage() {
  const dispatch = useAppDispatch();
  const { list, status, info } = useAppSelector((s) => s.permissions);

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
    ],
    [],
  );

  const getData = useCallback(async () => {
    try {
      await dispatch(GetPermissionsThunk()).unwrap();
    } catch (error: any) {
      // error
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    if (list.length == 0) getData();
  }, [getData, list.length]);

  return (
    <div className="p-4 min-h-full">
      <DataTable
        title="Permissions"
        columns={columns}
        data={list}
        // inline
        loading={status == "pending"}
        refresh={() => getData()}
        hidePagination
        defaultPageSize={100}
        totalResults={info?.total}
        CustomTable={(props) => <List {...props} />}
      />
    </div>
  );
}
