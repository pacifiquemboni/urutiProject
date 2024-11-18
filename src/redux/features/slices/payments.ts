import { createSlice } from "@reduxjs/toolkit";
import { GetPaymentsThunk } from "../actions/payment";

const initialState = {
  list: [] as any[],
  info: {} as any,
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
  filters: {} as any,
};

export const PaymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //get payments
      .addCase(GetPaymentsThunk.pending, (state) => {
        state.status = "pending";
        state.fetchTimes += 1;
      })
      .addCase(GetPaymentsThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(GetPaymentsThunk.fulfilled, (state, { payload, meta: { arg } }) => {
        const { list, ...info } = payload;
        state.filters = arg;
        state.status = "success";
        state.list = list;
        state.info = info;
      });
  },
});

export const { setFilters } = PaymentsSlice.actions;
export default PaymentsSlice.reducer;
