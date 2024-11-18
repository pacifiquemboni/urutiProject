import { createSlice } from "@reduxjs/toolkit";
import { GetTransactionsReportThunk, GetTransactionsThunk } from "../actions/transactions";

const initialState = {
  list: [] as any[],
  info: {} as any,
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
  filters: {} as any,
  reports: {
    data: {
      total_transaction: {
        cumulative: {
          revenue: 0,
          transaction: 0,
        },
        current: {
          revenue: 0,
          transaction: 0,
        },
      },
      unique: {
        cumulative: {
          uniqueHits: 0,
        },
        current: {
          uniqueHits: 0,
        },
      },
    },
    status: "pending" as statusType,
  },
};

export const TransactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //get transactions
      .addCase(GetTransactionsThunk.pending, (state) => {
        state.status = "pending";
        state.fetchTimes += 1;
      })
      .addCase(GetTransactionsThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(GetTransactionsThunk.fulfilled, (state, { payload, meta: { arg } }) => {
        const { list, ...info } = payload;
        state.filters = arg;
        state.status = "success";
        state.list = list;
        console.log(list, info, payload);
        state.info = info;
      })

      //get transactions
      .addCase(GetTransactionsReportThunk.pending, (state) => {
        state.reports.status = "pending";
      })
      .addCase(GetTransactionsReportThunk.rejected, (state) => {
        state.reports.status = "error";
      })
      .addCase(GetTransactionsReportThunk.fulfilled, (state, { payload }) => {
        state.reports.status = "success";
        state.reports.data = payload;
      });
  },
});

export const { setFilters } = TransactionsSlice.actions;
export default TransactionsSlice.reducer;
