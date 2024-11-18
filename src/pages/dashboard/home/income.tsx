import { useMemo } from "react";
import Currency from "@components/etc/currency";
import { useAppSelector } from "@redux/hook";
import Box, { dataBoxType } from "./box";
import { formatNumber } from "@/helpers/numbers";
import { UpDown } from "@/assets/icons";
import moment from "moment";

export default function IncomeSection() {
  const {
    data: { cumulative, previous, telecoms, current },
    details: { data },
  } = useAppSelector((s) => s.reports);

  const boxData = useMemo<dataBoxType>(
    () => ({
      top: {
        cummulative: <Currency amount={Number(cumulative?.actual?.revenue)} />,
        current: <Currency amount={Number(current?.actual?.revenue)} />,
        previus: <Currency amount={Number(previous?.total?.revenue)} />,
      },
      percentageGraph: [
        ["Task", "Hours per Day"],
        ["Cummulative", Number(cumulative?.actual?.revenue)],
        ["Expected", Number(cumulative?.expected?.revenue)],
      ],
      table1: {
        columns: [
          {
            accessor: "title",
            Header: "Telco's",
          },
          {
            accessor: "cumulative[revenue]",
            Header: "Cummulative Rev",
            Cell: ({ value }) => <Currency amount={value} />,
          },
          {
            accessor: "current[revenue]",
            Header: "Current Rev",
            Cell: ({ value }) => <Currency amount={value} />,
          },
          {
            accessor: "previous[revenue]",
            Header: "Previous Rev",
            Cell: ({ value }) => <Currency amount={value} />,
          },
        ],
        data: telecoms,
      },
      graphData2:
        data?.map?.((o) => ({
          name: o?.title,
          date: moment(o?.title?.toLowerCase?.()?.replace?.("week ", ""))?.format("YYYY-MM-DD"),
          expected: o?.expected?.revenue,
          actual: o?.actual?.revenue,
          percent:
            ((o?.actual?.revenue - o?.expected?.revenue) / (o?.expected?.revenue || 1)) * 100,
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
      cumulative?.actual?.revenue,
      cumulative?.expected?.revenue,
      current?.actual?.revenue,
      data,
      previous?.total?.revenue,
      telecoms,
    ],
  );

  return (
    <section className="p-4 bg-white rounded-lg" style={{ contain: "paint" }}>
      <Box data={boxData} />
    </section>
  );
}
