import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import {
  GetRecentPlayersThunk,
  GetTopPlayersThunk,
  ReportGroupedThunk,
  ReportProductsThunk,
  ReportThunk,
} from "../actions/reports";

const initialState = {
  cumulative: {
    actual: {
      revenue: 0,
      transactions: 0,
    },
    expected: {
      revenue: 0,
      transactions: 0,
    },
  },
  previous: {
    total: {
      revenue: 0,
      transactions: 0,
    },
  },
  current: {
    actual: {
      revenue: 0,
      transactions: 0,
    },
  },
  telecoms: [
    {
      title: "",
      cumulative: {
        revenue: 0,
        transactions: 0,
      },
      current: {
        revenue: 0,
        transactions: 0,
      },
      previous: {
        revenue: 0,
        transactions: 0,
      },
      uniqueHits: 0,
    },
  ],
};

const initialDetails = [
  {
    title: "",
    actual: {
      revenue: 0,
      transactions: 0,
    },
    expected: {
      revenue: 0,
      transactions: 0,
    },
  },
];

export const DashboardSlice = createSlice({
  name: "reports",
  initialState: {
    data: initialState,
    details: {
      selected: "weekly" as "weekly" | "monthly",
      status: "success" as statusType,
      fetchTimes: 0,
      data: initialDetails,
    },
    range: {
      from: moment().format("YYYY-MM-DD"),
      to: moment().format("YYYY-MM-DD"),
    },
    status: "success" as statusType,
    fetchTimes: 0,
    topPlayers: {
      fetchTimes: 0,
      data: [] as any[],
      status: "success" as statusType,
    },
    recentPlayers: {
      fetchTimes: 0,
      data: [] as any[],
      status: "success" as statusType,
    },
    productStatus: {
      fetchTimes: 0,
      data: [] as any[],
      status: "success" as statusType,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get transactions
      .addCase(ReportThunk.pending, (state, { meta: { arg } }) => {
        state.status = "pending";
        state.range.from = moment(arg?.fromDate).format("YYYY-MM-DD");
        state.range.to = moment(arg?.toDate).format("YYYY-MM-DD");
        state.fetchTimes += 1;
      })
      .addCase(ReportThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(ReportThunk.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.status = "success";
      })

      .addCase(ReportProductsThunk.pending, (state) => {
        state.productStatus.status = "pending";
        state.productStatus.fetchTimes += 1;
      })
      .addCase(ReportProductsThunk.rejected, (state) => {
        state.productStatus.status = "error";
      })
      .addCase(ReportProductsThunk.fulfilled, (state, { payload }) => {
        state.productStatus.status = "success";
        state.productStatus.data = payload;
      })

      // grouped report
      .addCase(ReportGroupedThunk.pending, (state, { meta: { arg } }) => {
        state.details.status = "pending";
        state.details.selected = arg?.data || "weekly";
        state.details.fetchTimes += 1;
      })
      .addCase(ReportGroupedThunk.rejected, (state) => {
        state.details.status = "error";
      })
      .addCase(ReportGroupedThunk.fulfilled, (state, { payload }) => {
        state.details.status = "success";
        state.details.data = payload;
      })

      // get top players
      .addCase(GetTopPlayersThunk.pending, (state) => {
        state.topPlayers.status = "pending";
        state.topPlayers.fetchTimes += 1;
      })
      .addCase(GetTopPlayersThunk.rejected, (state) => {
        state.topPlayers.status = "error";
      })
      .addCase(GetTopPlayersThunk.fulfilled, (state, { payload }) => {
        state.topPlayers.status = "success";
        state.topPlayers.data = payload;
      })

      // get top recent players
      .addCase(GetRecentPlayersThunk.pending, (state) => {
        state.recentPlayers.status = "pending";
        state.recentPlayers.fetchTimes += 1;
      })
      .addCase(GetRecentPlayersThunk.rejected, (state) => {
        state.recentPlayers.status = "error";
      })
      .addCase(GetRecentPlayersThunk.fulfilled, (state, { payload }) => {
        state.recentPlayers.status = "success";
        state.recentPlayers.data = payload;
      });
  },
});

export default DashboardSlice.reducer;
