import { useMemo } from "react";
import Box, { dataBoxType } from "./box";
import { useAppSelector } from "@/redux/hook";
import BigNumber from "@/components/etc/bigNumber";
import { formatNumber } from "@/helpers/numbers";
import { UpDown } from "@/assets/icons";
import moment from "moment";

export default function TransactionSection() {
  const {
    data: { cumulative, previous, telecoms, current },
    details: { data },
  } = useAppSelector((s) => s.reports);

  const boxData = useMemo<dataBoxType>(
    () => ({
      top: {
        cummulative: <BigNumber value={cumulative?.actual?.transactions} clickToggle />,
        current: <BigNumber value={current?.actual?.transactions} clickToggle />,
        previus: <BigNumber value={previous?.total?.transactions} clickToggle />,
      },
      percentageGraph: [
        ["Task", "Hours per Day"],
        ["Cummulative", Number(cumulative?.actual?.transactions)],
        ["Expected", Number(cumulative?.expected?.transactions)],
      ],
      table1: {
        columns: [
          {
            accessor: "title",
            Header: "Telco's",
          },
          {
            accessor: (row) => row?.radio?.name,
            Header: "Radio",
            Cell: ({ value }) => <>{value || "-"}</>,
          },
          {
            accessor: "cumulative[transactions]",
            Header: "Cummulative Tx",
          },
          {
            accessor: "current[transactions]",
            Header: "Current Tx",
          },
          {
            accessor: "uniqueHits",
            Header: "Unique Hits",
          },
        ],
        data: telecoms,
      },
      graphData2:
        data?.map?.((o) => ({
          name: o?.title,
          date: moment(o?.title?.toLowerCase?.()?.replace?.("week ", ""))?.format("YYYY-MM-DD"),
          expected: o?.expected?.transactions,
          actual: o?.actual?.transactions,
          percent:
            ((o?.actual?.transactions - o?.expected?.transactions) /
              (o?.expected?.transactions || 1)) *
            100,
        })) || [],
      table2: {
        columns: [
          {
            accessor: "date",
            id: "date",
            Header: "Date",
            Cell: ({ value }) => <>Week {moment(value).format("MMM DD")}</>,
          },
          {
            accessor: "expected",
            Header: "expected",
          },
          {
            accessor: "actual",
            Header: "Current",
          },
          {
            accessor: "percent",
            Header: "percentage",
            Cell: ({ value }) => {
              const up = value > 0 ? 1 : value < 0 ? -1 : 0;
              return (
                <span
                  className={`flex gap-2 ${up > 0 ? "text-[#0b0]" : up < 0 ? "text-[#f00]" : ""}`}
                >
                  <span>{formatNumber(value * up)}%</span>
                  <UpDown color="currentColor" up={up > 0} down={up < 0} />
                </span>
              );
            },
          },
        ],
      },
    }),
    [
      cumulative?.actual?.transactions,
      cumulative?.expected?.transactions,
      current?.actual?.transactions,
      data,
      previous?.total?.transactions,
      telecoms,
    ],
  );

  return (
    <section className="p-4 bg-white rounded-lg" style={{ contain: "paint" }}>
      <Box color="#fa0" color2="#773c99" data={boxData} name="transactions" />
    </section>
  );
}
