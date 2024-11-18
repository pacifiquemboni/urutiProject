import DataTable, { ColumnType } from "@/components/table";
import { GetRolesThunk } from "@/redux/features/actions/roles";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useCallback, useLayoutEffect, useMemo } from "react";
import { List } from "./list";
import { GetPermissionsThunk } from "@/redux/features/actions/permissions";

export default function DashRolesPage() {
  const dispatch = useAppDispatch();
  const { list, status, fetchTimes, info } = useAppSelector((s) => s.roles);
  const { fetchTimes: permissions } = useAppSelector((s) => s.permissions);

  const columns = useMemo<ColumnType<any>[]>(
    () => [
      {
        accessor: "name",
        Header: "name",
      },
      {
        accessor: "path",
        Header: "path",
      },
    ],
    [],
  );

  const getData = useCallback(async () => {
    try {
      await dispatch(GetRolesThunk()).unwrap();
    } catch (error: any) {
      // error
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    if (fetchTimes == 0) getData();
  }, [getData, fetchTimes]);

  const getPermissions = useCallback(async () => {
    try {
      await dispatch(GetPermissionsThunk()).unwrap();
    } catch (error: any) {
      // error
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    if (permissions == 0) getPermissions();
  }, [getPermissions, permissions]);

  return (
    <div className="p-4">
      <DataTable
        title="Roles"
        columns={columns}
        data={list}
        loading={status == "pending"}
        refresh={() => getData()}
        totalResults={info?.total}
        hidePagination
        defaultPageSize={100}
        CustomTable={(props) => <List {...props} />}
      />
    </div>
  );
}
