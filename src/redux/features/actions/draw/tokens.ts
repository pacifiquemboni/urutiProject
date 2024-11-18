import { axios } from "@/redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

export const GetTokenThunk = createAsyncThunk(
  "token",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      if (data?.to)
        data.to = moment(data?.to)
          .add(moment(data?.to).format("HH") == "23" ? 0 : 86369, "seconds")
          .format("YYYY-MM-DD");

      const res = await axios.get("/v1/token", {
        headers: { "Content-Type": "application/json" },
        params: data,
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const ResendTokenThunk = createAsyncThunk(
  "resend_token",
  async (token: string = "", { rejectWithValue }) => {
    try {
      const res = await axios.post(`/v1/transactions/resend-token/${token}`);

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);