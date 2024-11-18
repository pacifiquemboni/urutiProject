import { createSlice } from "@reduxjs/toolkit";
import { ActivateCategoriesThunk, DisactivateCategoriesThunk, GetCategoriesThunk } from "../actions/radios";

const initialState = {
  list: [] as any[],
  info: {} as any,
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
  filters: {} as any,
};

export const RadiosSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //get Radios
      .addCase(GetCategoriesThunk.pending, (state) => {
        state.status = "pending";
        state.fetchTimes += 1;
      })
      .addCase(GetCategoriesThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(GetCategoriesThunk.fulfilled, (state, { payload, meta: { arg } }) => {
        const { list, ...info } = payload;
        state.filters = arg;
        state.status = "success";
        state.list = list;
        state.info = info;
      })

      // disactivate Radio
      .addCase(DisactivateCategoriesThunk.fulfilled, (state, { meta: { arg } }) => {
        const index = state.list.findIndex((x: any) => x.id == arg?.id);
        if (index >= 0) state.list[index].status = "inactive";
      })
      // activate Radio
      .addCase(ActivateCategoriesThunk.fulfilled, (state, { meta: { arg } }) => {
        const index = state.list.findIndex((x: any) => x.id == arg?.id);
        if (index >= 0) state.list[index].status = "active";
      })
  },
});

export const { setFilters } = RadiosSlice.actions;
export default RadiosSlice.reducer;
