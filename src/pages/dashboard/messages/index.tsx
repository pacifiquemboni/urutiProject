import Modal, { ModalTitle } from "@/components/modal";
import DataTable, { ColumnType } from "@/components/table";
import { GetContactsThunk } from "@/redux/features/actions/contacts";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import moment from "moment";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import Filters from "./filters";
import { setFilters } from "@/redux/features/slices/contacts";

export default function DashMessagesPage() {
  const dispatch = useAppDispatch();
  const { list, status, fetchTimes, info } = useAppSelector((s) => s.contacts);
  const [MOpen, setMOpen] = useState(false);
  const [MData, setMData] = useState<any>(null);

  const columns = useMemo<ColumnType<any>[]>(
    () => [
      {
        accessor: "name",
        Header: "name",
        Filter: () => <></>,
      },
      {
        accessor: "email",
        Header: "email",
      },
      {
        accessor: "message",
        Header: "message",
        Cell: ({ value }) => (
          <p className="line-clamp-1 text-wrap break-all !max-w-[45ch]">{value}</p>
        ),
      },
      {
        accessor: "created_at",
        Header: "Send at",
        Cell: ({ value }) => (
          <>
            {moment().diff(value, "weeks") > 2
              ? moment(value).format("ll")
              : `${moment(value).fromNow()},`}{" "}
            {moment(value).format("LT")}
          </>
        ),
      },
    ],
    [],
  );

  const getData = useCallback(
    async (data?: any) => {
      try {
        await dispatch(GetContactsThunk(data)).unwrap();
      } catch (error: any) {
        return { error };
      }
    },
    [dispatch],
  );

  const openModal = useCallback((data: any) => {
    setMData(data);
    setMOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setMOpen(false);
    setMData(null);
  }, []);

  useLayoutEffect(() => {
    if (fetchTimes < 1) getData();
  }, [fetchTimes, getData]);

  const more = useCallback(
    (number?: number) => {
      getData({ pageNumber: (info?.currentPage || 0) + (number || 1) });
    },
    [getData, info?.currentPage],
  );

  const onFilter = useCallback(
    async (filters: any) => {
      const data = {
        ...filters,
        to: moment(filters?.to)
          .add(moment(filters?.to).format("HH") == "23" ? 0 : 86369, "seconds")
          .format("YYYY-MM-DD HH:mm"),
      };
      const out = await getData(data);
      if (!out?.error) dispatch(setFilters(data));
    },
    [dispatch, getData],
  );

  return (
    <div className="p-4">
      <DataTable<any>
        title="Messages"
        columns={columns}
        data={list}
        loading={status == "pending"}
        refresh={() => getData()}
        totalResults={info?.total}
        hidePageSizeSelector
        hideSearch
        minimizeFilter
        onFilter={onFilter}
        AsideNode={Filters}
        getMore={more}
        customPaginationActions
        currentPage={info?.currentPage}
        onRowClick={({ row: { original } }) => openModal(original)}
        defaultSortBy={[{ id: "created_at", desc: true }]}
      />
      <Modal className="max-w-[50ch]" size="sm" isOpen={MOpen} onRequestClose={closeModal}>
        <ModalTitle
          title={
            <div>
              <h3>{MData?.name}</h3>
              <small className="text-grey">{MData?.email}</small>
            </div>
          }
          onClose={closeModal}
        />
        <div className="max-w-[100%] grid gap-1">
          <p className="p-2 px-3 rounded-md bg-light-grey bg-opacity-50">{MData?.message}</p>
          <small className="text-grey block w-full text-end">
            {moment(MData?.updated_at).fromNow()}, {moment(MData?.updated_at).format("lll")}
          </small>
        </div>
      </Modal>
    </div>
  );
}
