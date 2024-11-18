import Button from "@/components/button";
import DropDown, { DropDownItem } from "@/components/dropdown";
import { Input } from "@/components/form";
import { ModalTitle } from "@/components/modal";
import DataTable, { ColumnType } from "@/components/table";
import { ResendTokenThunk } from "@/redux/features/actions/draw/tokens";
import { useAppDispatch } from "@/redux/hook";
import { IconSearch } from "@tabler/icons-react";
import moment from "moment";
import { useCallback, useMemo, useState } from "react";

type props = {
  loading?: boolean;
  data: any[];
  SearchByNumber: React.FormEventHandler<HTMLFormElement>;
  setSearchModal: (value: React.SetStateAction<boolean>) => void;
  value?: string;
};

export default function PhoneModal({
  loading,
  data,
  SearchByNumber,
  setSearchModal,
  value,
}: props) {
  const dispatch = useAppDispatch();
  const [resendLoading, setLoading] = useState(false);

  const resendToken = useCallback(
    async (token: string) => {
      setLoading(true);
      await dispatch(ResendTokenThunk(token)).unwrap();
      setLoading(false);
    },
    [dispatch],
  );

  const searchColumns = useMemo<ColumnType<any>[]>(
    () => [
      {
        accessor: "transaction[transaction_date]",
        id: "date",
        Header: "Transaction Date",
        Cell: ({ value }) =>
          moment().diff(value, "day") < 1
            ? `${moment(value).fromNow()}, ${moment(value).format("LT")}`
            : moment(value).format("LLL"),
      },
      {
        accessor: "token[id]",
        Header: "token",
      },
      {
        accessor: "transaction[amount]",
        Header: "Amount",
      },
      {
        accessor: "transaction[product[name]]",
        Header: "Prize",
      },
      {
        accessor: "transaction[telco]",
        Header: "Telco",
      },
      {
        accessor: "transaction[status]",
        Header: "Status",
        Cell: ({ value }) => (
          <span
            className={`${value?.toLowerCase() == "success" ? "text-green-600" : value?.toLowerCase() == "pending" ? "text-orange-500" : "text-red-600"}`}
          >
            {value?.toLowerCase()}
          </span>
        ),
      },
      {
        accessor: "transaction[expired]",
        Header: "expired",
        Cell: ({ value }) => (
          <span className={`${value ? "text-green-600" : "text-red-600"}`}>
            {value ? "true" : "false"}
          </span>
        ),
      },
      {
        id: "action",
        Cell: ({ row: { original } }) =>
          original?.token?.id && (
            <DropDown containerClassName="!z-30">
              <DropDownItem
                className={resendLoading ? "cursor-wait" : "cursor-pointer"}
                onClick={() => !resendLoading && resendToken(original?.token?.id)}
              >
                {resendLoading ? "Resending token" : "Resend Token"}
              </DropDownItem>
            </DropDown>
          ),
      },
    ],
    [resendLoading, resendToken],
  );
  return (
    <>
      <ModalTitle
        title={
          <form
            onSubmit={SearchByNumber}
            className="!mr-auto w-fit bg-light-grey rounded contain-paint flex"
          >
            <Input
              name="phoneNumber"
              defaultValue={value}
              placeholder="Search by Phone Number"
              required
            />
            <Button
              size="xsm3"
              type="submit"
              className="flex-grow-0 !px-2 !text-primary !bg-transparent"
            >
              <IconSearch />
            </Button>
          </form>
        }
        onClose={() => setSearchModal(false)}
      />
      <DataTable
        title={<span className="text-lg">{value}</span>}
        columns={searchColumns}
        data={data}
        loading={loading}
        allowExport
        hideSearch
        hideFilter
        minimizeFilter
        defaultSortBy={[{ id: "date", desc: true }]}
      />
    </>
  );
}
