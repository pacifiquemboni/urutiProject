import { createSlice } from "@reduxjs/toolkit";
import {
  AssignRoleThunk,
  DeleteUsersThunk,
  GetUsersThunk,
  UnassignRoleThunk,
  UpdateUsersThunk,
} from "../actions/users";

const initialState = {
  list: [] as any[],
  info: {} as any,
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get users
      .addCase(GetUsersThunk.pending, (state) => {
        state.status = "pending";
        state.fetchTimes += 1;
      })
      .addCase(GetUsersThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(GetUsersThunk.fulfilled, (state, { payload }) => {
        const { list, ...info } = payload;
        state.status = "success";
        state.list = list;
        state.info = info;
      })
      // add user
      // .addCase(AddUsersThunk.fulfilled, (_, { payload }) => {
      //   console.log({ payload });
      // })
      // update user
      .addCase(UpdateUsersThunk.fulfilled, (state, { meta: { arg } }) => {
        const index = state.list.findIndex((u) => u?.id == arg?.id);
        if (index >= 0) {
          state.list[index] = { ...state.list[index], ...arg?.data };
        }
      })

      // delete user
      .addCase(DeleteUsersThunk.fulfilled, (state, { meta: { arg } }) => {
        state.list = state.list?.filter((s) => s?.id != arg?.id);
      })

      // assign role
      .addCase(AssignRoleThunk.fulfilled, (state, { meta: { arg } }) => {
        const index = state.list.findIndex((u) => u?.id == arg?.userId);
        state.list[index].groups?.push?.({ id: arg?.groupId, name: arg?.groupName });
      })
      // assign role
      .addCase(UnassignRoleThunk.fulfilled, (state, { meta: { arg } }) => {
        const index = state.list.findIndex((u) => u?.id == arg?.userId);
        if (index >= 0) {
          state.list[index].groups = state.list[index]?.groups?.filter?.(
            (s: any) => s?.id != arg?.groupId,
          );
        }
      });
  },
});

export default UsersSlice.reducer;
