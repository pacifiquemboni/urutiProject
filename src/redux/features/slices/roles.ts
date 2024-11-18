import { createSlice } from "@reduxjs/toolkit";
import {
  AssignPermissionsThunk,
  DeleteRoleThunk,
  GetRolesThunk,
  SingleRoleThunk,
  UnassignPermissionsThunk,
  UpdateRoleThunk,
} from "../actions/roles";

const initialState = {
  list: [] as any[],
  info: {} as any,
  single: {} as { [k: string]: any },
  singleStatus: {} as { [k: string]: statusType },
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
};

export const RolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get transactions
      .addCase(GetRolesThunk.pending, (state) => {
        state.status = "pending";
        state.fetchTimes += 1;
      })
      .addCase(GetRolesThunk.rejected, (state) => {
        state.status = "error";
        state.fetchTimes -= 1;
      })
      .addCase(GetRolesThunk.fulfilled, (state, { payload }) => {
        const { list, ...info } = payload;
        state.status = "success";
        state.list = list;
        state.info = info;
      })

      // add role
      // .addCase(AddRoleThunk.fulfilled, (_, { payload }) => {
      //   console.log({ payload });
      // })
      // edit
      .addCase(UpdateRoleThunk.fulfilled, (state, { meta: { arg } }) => {
        const index = state?.list?.findIndex((o) => o?.id == arg?.id);
        if (index >= 0) {
          state.list[index] = {
            ...state.list[index],
            ...arg?.data,
          };
        }
      })
      // delete
      .addCase(DeleteRoleThunk.fulfilled, (state, { meta: { arg } }) => {
        state.list = state?.list?.filter((o) => o?.id != arg?.id);
      })
      // getSingle
      .addCase(SingleRoleThunk.pending, (state, { meta: { arg } }) => {
        state.singleStatus[arg?.id] = "pending";
      })
      .addCase(SingleRoleThunk.rejected, (state, { meta: { arg } }) => {
        state.singleStatus[arg?.id] = "error";
      })
      .addCase(SingleRoleThunk.fulfilled, (state, { payload, meta: { arg } }) => {
        state.singleStatus[arg?.id] = "success";
        state.single[arg?.id] = payload;
      })
      //assign role
      .addCase(AssignPermissionsThunk.fulfilled, (state, { meta: { arg } }) => {
        state.single[arg?.id].realmRoles?.push(...(arg?.values?.map((v) => v?.name) || []));
      })
      //unassign role
      .addCase(UnassignPermissionsThunk.fulfilled, (state, { meta: { arg } }) => {
        state.single[arg?.id].realmRoles = state.single[arg?.id].realmRoles?.filter(
          (s: any) => !arg?.values?.map((v) => v?.name)?.includes(s),
        );
      });
  },
});

export default RolesSlice.reducer;
