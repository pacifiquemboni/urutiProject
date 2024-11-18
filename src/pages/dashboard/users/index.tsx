import DataTable, { ColumnType } from "@/components/table";
import { GetUsersThunk } from "@/redux/features/actions/users";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useCallback, useLayoutEffect, useMemo } from "react";
import Actions from "./actions";
import moment from "moment";
import { GetRolesThunk } from "@/redux/features/actions/roles";
import { IUser } from "@/types";

export default function DashUsersPage() {
  const dispatch = useAppDispatch();
  const { list, status, fetchTimes, info } = useAppSelector((s) => s.users);
  const { user } = useAppSelector((s) => s.user);
  const { fetchTimes: roleFetch } = useAppSelector((s) => s.roles);

  const columns = useMemo<ColumnType<IUser>[]>(
    () => [
      {
        accessor: "username",
        Header: "Username",
      },
      {
        accessor: "firstName",
        Header: "First Name",
      },
      {
        accessor: "lastName",
        Header: "Last Name",
      },

      {
        accessor: (row) => row?.groups?.map((s: any) => s?.name)?.join(",") || "-",
        id: "groups",
        Header: "Role",
      },
      {
        accessor: "email",
        Header: "Email",
      },
      {
        accessor: (row) => row?.attributes?.phoneNumber?.toString?.(),
        Header: "Phone Number",
      },
      {
        accessor: "emailVerified",
        Header: "Email Verified",
        Cell: ({ value }) => (
          <span className={value ? "text-green-500" : "text-red-500"}>
            {value ? "true" : "false"}
          </span>
        ),
      },
      {
        accessor: "enabled",
        Header: "Enabled",
        Cell: ({ value }) => (
          <span className={value ? "text-green-500" : "text-red-500"}>
            {value ? "true" : "false"}
          </span>
        ),
      },
      {
        id: "joinAt",
        accessor: "createdTimestamp",
        Header: "Joined At",
        Cell: ({ value }) => moment(value).format("LLL"),
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

        await dispatch(GetUsersThunk(data)).unwrap();
      } catch (error: any) {
        // error
      }
    },
    [dispatch, user?.attributes?.radioId],
  );

  const getRoles = useCallback(async () => {
    try {
      await dispatch(GetRolesThunk()).unwrap();
    } catch (error: any) {
      // error
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    if (roleFetch == 0) getRoles();
  }, [getRoles, roleFetch]);

  useLayoutEffect(() => {
    if (fetchTimes < 1) getData();
  }, [fetchTimes, getData]);

  const more = useCallback(
    (number?: number) => {
      getData({ pageNumber: (info?.currentPage || 0) + (number || 1) });
    },
    [getData, info?.currentPage],
  );

  return (
    <div className="p-4">
      <DataTable<any>
        title="Users"
        columns={columns}
        data={list}
        loading={status == "pending"}
        refresh={() => getData()}
        totalResults={info?.total}
        hidePageSizeSelector
        getMore={more}
        customPaginationActions
        currentPage={info?.currentPage}
        defaultSortBy={[{ id: "joinAt", desc: true }]}
      />
    </div>
  );
}
