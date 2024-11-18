import { createSlice } from "@reduxjs/toolkit";
import { GetUserThunk, LoginThunk } from "../actions/users/me";
import { getToken } from "@/helpers/token";
import Cookies from "js-cookie";
import { LOGIN_ROUTE } from "@/helpers/routes";
import { ILoggedUser } from "@/types";

const initialState = {
  user: null as ILoggedUser | null,
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
  login: {
    status: "success" as statusType,
    error: undefined as string | any,
  },
  logout: {
    status: "success" as statusType,
  },
  access_token: getToken(),
  refresh_token: Cookies.get("refresh_token"),
  allowedPermissions: {
    status: "success" as statusType,
    list: [] as string[],
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove("access_token");

      state.user = null;
      state.access_token = undefined;

      window.location.assign(LOGIN_ROUTE);
    },
  },
  extraReducers: (builder) => {
    builder
      // login thunk
      .addCase(LoginThunk.pending, (state) => {
        state.login.status = "pending";
        state.login.error = undefined;
      })
      .addCase(LoginThunk.rejected, (state, { payload }) => {
        state.login.status = "error";
        state.login.error = (payload as any)?.response?.data?.error;
      })
      .addCase(LoginThunk.fulfilled, (state, { payload }) => {
        if (payload?.accessToken) {
          Cookies.set("access_token", payload?.accessToken?.access_token, {
            expires: payload?.accessToken?.expires_in,
          });
          Cookies.set("refresh_token", payload?.accessToken?.refresh_token, {
            expires: payload?.accessToken?.refresh_expires_in,
          });

          state.access_token = payload?.accessToken?.access_token;
          state.user = payload?.userInfo;
          state.allowedPermissions.list = payload?.userInfo?.realmRoles;

          state.login.status = "success";
          state.login.error = undefined;
        }
      })

      //get user
      .addCase(GetUserThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetUserThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(GetUserThunk.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload;
        state.allowedPermissions.list = (payload?.roles || []).map((r: any) => r.name);

      });
  },
});

export const { logout } = UserSlice.actions;
export default UserSlice.reducer;
