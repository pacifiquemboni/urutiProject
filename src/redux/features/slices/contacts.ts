import { createSlice } from "@reduxjs/toolkit";
import { GetContactsThunk } from "../actions/contacts";

const initialState = {
  list: [] as any[],
  info: {} as any,
  filters: {} as any,
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
};

export const ContactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(GetContactsThunk.pending, (state) => {
        state.status = "pending";
        state.fetchTimes += 1;
      })
      .addCase(GetContactsThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(GetContactsThunk.fulfilled, (state, { payload }) => {
        const { list, ...info } = payload;
        state.list = list;
        state.info = info;
        state.status = "success";
      });
  },
});

export const { setFilters } = ContactSlice.actions;
export default ContactSlice.reducer;
