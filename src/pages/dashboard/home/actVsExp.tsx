import { formatBigNumber } from "@/helpers/numbers";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type props = {
  color?: string;
  name?: string;
  data?: {
    name: string;
    expected: number;
    actual: number;
  }[];
};

export default function ActVsExp({ color = "#773c99", name = "Revenues", data = [] }: props) {
  return (
    <div>
      <h3 className="py-4 pb-6">Expected vs Actual {name}</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              scale="band"
              style={{
                fontSize: "0.75rem",
              }}
            />
            <YAxis
              orientation="left"
              style={{
                fontSize: "0.75rem",
              }}
              stroke="#773c99"
              tickFormatter={formatBigNumber}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="expected" width={20} fill="var(--light-grey-color)" />
            <Bar dataKey="actual" width={20} fill={color} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
