import Currency from "@/components/etc/currency";
import DataTable, { ColumnType } from "@/components/table";
import { setTokenFilters } from "@/redux/features/slices/draw";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import moment from "moment";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import Filters from "./filters";
import { GetTokenThunk } from "@/redux/features/actions/draw/tokens";
import { Input } from "@/components/form";
import Button from "@/components/button";
import { IconSearch } from "@tabler/icons-react";
import Modal from "@/components/modal";
import { axios } from "@/redux/axios";
import PhoneModal from "./modal";

export default function DashTokensPage() {
  const dispatch = useAppDispatch();
  const [searchModal, setSearchModal] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const { list, status, fetchTimes, info, filters } = useAppSelector((s) => s.draw.tokens);
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
        Header: "Phone Number",
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
        accessor: "product[productName]",
        Header: "product",
      },
      {
        accessor: "product[playAmount]",
        Header: "Pray Amount",
        Cell: ({ value }) => <Currency amount={Number(value)} />,
      },
      {
        accessor: "created_at",
        Header: "created date",
        Cell: ({ value }) => moment(value).format("llll"),
      },
    ],
    [],
  );

  const getData = useCallback(
    async (data?: any) => {
      try {
        if (user?.attributes?.radioId?.length == 1)
          data.radioId = user?.attributes?.radioId?.[0] || data?.radioId;

        await dispatch(GetTokenThunk(data)).unwrap();
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

  const SearchByNumber = useCallback<React.FormEventHandler<HTMLFormElement>>(
    async (e) => {
      try {
        setSearchLoading(true);
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const data = Object.fromEntries(form);
        setSearchValue(`${data?.phoneNumber}`);
        setSearchModal(true);

        if (user?.attributes?.radioId?.length == 1)
          data.radioId = user?.attributes?.radioId?.[0] || data?.radioId;

        const res = await axios.get("/v1/transactions/getTokenByPhoneNumber", { params: data });
        setSearchData(res?.data);
      } catch (error) {
        // error
      } finally {
        setSearchLoading(false);
      }
    },
    [user?.attributes?.radioId],
  );

  return (
    <>
      <div className="p-4">
        <DataTable<any>
          title="Tokens"
          columns={columns}
          data={list}
          loading={status == "pending"}
          refresh={() => getData()}
          totalResults={info?.total}
          allowExport
          AsideNode={Filters}
          RightNode={() => (
            <form
              onSubmit={SearchByNumber}
              className="!mr-auto w-fit bg-light-grey rounded contain-paint flex"
            >
              <Input name="phoneNumber" placeholder="Search by Phone Number" required />
              <Button
                size="xsm3"
                type="submit"
                className="flex-grow-0 !px-2 !text-primary !bg-transparent"
              >
                <IconSearch />
              </Button>
            </form>
          )}
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
      <Modal size="sm" isOpen={searchModal} onRequestClose={() => setSearchModal(false)}>
        <PhoneModal
          loading={searchLoading}
          data={searchData}
          value={searchValue}
          setSearchModal={setSearchModal}
          SearchByNumber={SearchByNumber}
        />
      </Modal>
    </>
  );
}
