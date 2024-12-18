import { getToken } from "@/helpers/token";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { GetTokensThunk } from "../actions/player";
import {  HOME_ROUTE } from "@/helpers/routes";

const initialState = {
  tokens: [] as any[],
  status: "pending" as statusType,
  error: undefined as string | any,
  loading: false,
  fetchTimes: 0,
  access_token: getToken(),
}

export const TokenSlice = createSlice({
  name:"token",
  initialState,
  reducers:{
    logout: (state) => {
      Cookies.remove("access_token");
      localStorage.removeItem("productId")

      state.access_token = undefined;

      window.location.assign(HOME_ROUTE);
    },
  },
  extraReducers: (builder)=>{
    builder
    .addCase(GetTokensThunk.pending, (state)=>{
      state.loading= true
    })
    .addCase(GetTokensThunk.rejected, (state,{payload})=>{
      state.loading= false;
      state.error=(payload as any)?.response?.data.error
    })
    .addCase(GetTokensThunk.fulfilled, (state,{payload})=>{
      state.loading= false;
      state.error= undefined;
      state.tokens=(payload as any)?.response?.data.error
    })
  }
})

export const { logout } = TokenSlice.actions;
export default TokenSlice.reducer;