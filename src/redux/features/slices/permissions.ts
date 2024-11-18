import { createSlice } from "@reduxjs/toolkit";
import {
  DeletePermissionsThunk,
  GetPermissionsThunk,
  UpdatePermissionsThunk,
} from "../actions/permissions";

const initialState = {
  list: [] as any[],
  info: {} as any,
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
};

export const PermissionSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get
      .addCase(GetPermissionsThunk.pending, (state) => {
        state.status = "pending";
        state.fetchTimes += 1;
      })
      .addCase(GetPermissionsThunk.rejected, (state) => {
        state.status = "error";
        state.fetchTimes -= 1;
      })
      .addCase(GetPermissionsThunk.fulfilled, (state, { payload }) => {
        const { list, ...info } = payload;
        state.status = "success";
        state.list = list;
        state.info = info;
      })

      // add permission
      // .addCase(AddPermissionsThunk.fulfilled, (_, { payload }) => {
      //   console.log({ payload });
      // })
      // edit
      .addCase(UpdatePermissionsThunk.fulfilled, (state, { meta: { arg } }) => {
        const index = state?.list?.findIndex((o) => o?.id == arg?.id);
        if (index >= 0) {
          state.list[index] = {
            ...state.list[index],
            ...arg?.data,
          };
        }
      })
      // delete
      .addCase(DeletePermissionsThunk.fulfilled, (state, { meta: { arg } }) => {
        state.list = state?.list?.filter((o) => o?.id !== arg?.id);
      });
  },
});

export default PermissionSlice.reducer;
