import Chart from "react-google-charts";
import css from "./style.module.scss";
import { ReactNode, useMemo } from "react";
import DataTable, { ColumnType } from "@/components/table";
import Separator from "@components/etc/separator";
import ActVsExp from "./actVsExp";

export type dataBoxType = {
  top?: {
    cummulative?: number | string | ReactNode;
    current?: number | string | ReactNode;
    previus?: number | string | ReactNode;
  };
  percentageGraph?: (string | number)[][];
  table1?: {
    columns: ColumnType<any>[];
    data: any[];
  };
  graphData2?: {
    name: string;
    expected: number;
    actual: number;
  }[];
  table2: {
    columns: ColumnType<any>[];
  };
};
type props = {
  color?: string;
  color2?: string;
  name?: string;
  data?: dataBoxType;
};

const initialData: Required<dataBoxType> = {
  top: {
    cummulative: 0,
    current: 0,
    previus: 0,
  },
  percentageGraph: [
    ["", ""],
    ["", 2],
    ["", 1],
  ],
  table1: {
    columns: [
      {
        accessor: "a",
        Header: "titles",
      },
      {
        accessor: "b",
        Header: "amount",
      },
    ],
    data: [
      {
        a: "100,000",
        b: "100,000",
      },
    ],
  },
  graphData2: [
    {
      name: "01",
      expected: 590,
      actual: 800,
    },
    {
      name: "02",
      expected: 868,
      actual: 967,
    },
    {
      name: "03",
      expected: 1397,
      actual: 1098,
    },
    {
      name: "04",
      expected: 1480,
      actual: 1200,
    },
    {
      name: "05",
      expected: 1520,
      actual: 1108,
    },
    {
      name: "06",
      expected: 1400,
      actual: 680,
    },
  ],
  table2: {
    columns: [
      {
        accessor: "name",
        Header: "title",
      },
      {
        accessor: "expected",
        Header: "expected",
      },
      {
        accessor: "actual",
        Header: "Current",
      },
    ],
  },
};

export default function Box({ color = "#773c99", name = "revenue", data = initialData }: props) {
  const currentData = useMemo<Required<dataBoxType>>(
    () => ({
      top: data?.top || initialData?.top,
      percentageGraph: data?.percentageGraph || initialData?.percentageGraph,
      table1: data?.table1 || initialData?.table1,
      graphData2: data?.graphData2 || initialData?.graphData2,
      table2: data?.table2 || initialData?.table2,
    }),
    [data?.graphData2, data?.percentageGraph, data?.table1, data?.table2, data?.top],
  );
  const options = useMemo(
    () => ({
      pieHole: 0.0,
      is3D: true,
      minValue: 0,
      pieSliceText: "label",
      legend: "none",
      colors: [color, "#888888"],
      animation: { duration: 1000, easing: "out" },
      backgroundColor: "transparent",
    }),
    [color],
  );

  return (
    <>
      <h2 className="mb-4 capitalize">{name}</h2>
      <div className={`${css.block} text-grey capitalize`}>
        <div>
          <div className={`${css.details}`}>
            <article className={css.top}>
              <h2>{data?.top?.cummulative}</h2>
              <small>Cummulative {name}</small>
            </article>
            <div>
              <article>
                <h2>{data?.top?.current}</h2>
                <span>Current {name}</span>
              </article>
              <article>
                <h2>{data?.top?.previus}</h2>
                <span>Previous {name}</span>
              </article>
            </div>
          </div>
          <div>
            <h3 className="text-black text-center font-semibold">
              {name} % <br />
              <small>of the Expected</small>
            </h3>
            <Chart
              chartType="PieChart"
              width="100%"
              // height="200px"
              data={data.percentageGraph}
              options={options}
            />
          </div>
        </div>
      </div>
      <Separator />
      <DataTable
        hidePagination
        hideTop
        title=""
        columns={currentData?.table1?.columns}
        data={currentData?.table1?.data}
      />
      <Separator />
      <ActVsExp color={color} name={name} data={data?.graphData2} />
      {/* <Separator /> */}
      <DataTable
        // hidePagination
        hidePageSizeSelector
        hideTop
        title=""
        columns={currentData?.table2?.columns}
        defaultSortBy={[{ id: "date", desc: true }]}
        data={data?.graphData2 || []}
      />
    </>
  );
}
