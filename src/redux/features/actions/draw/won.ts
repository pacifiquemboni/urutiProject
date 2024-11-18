import { axios } from "@/redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

export const GetWonTokenThunk = createAsyncThunk(
  "won_token",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/won-token", {
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

export const GetLatestWonTokenThunk = createAsyncThunk(
  "latest_won_token",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      let date = moment().format("YYYY-MM-DD");
      let list = [];

      while (list?.length == 0) {
        const res = await axios.get("/v1/won-token", {
          headers: { "Content-Type": "application/json" },
          params: {
            from: moment(date).format("YYYY-MM-DD HH:mm"),
            to: moment(date).add(86369, "seconds").format("YYYY-MM-DD HH:mm"),
            pageSize: 100,
            ...data
          },
        });

        if (res?.data?.error) return rejectWithValue(res?.data?.error);

        list = res?.data?.list;
        date = moment(date).subtract(1, "day").format("YYYY-MM-DD");
      }

      return list;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetWonTokenExportsThunk = createAsyncThunk(
  "won_token_exports",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/won-token", {
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
