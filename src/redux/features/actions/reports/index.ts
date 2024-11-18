import { axios } from "@/redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

type props = {
  fromDate?: string;
  toDate?: string;
};
export const ReportThunk = createAsyncThunk("report", async (data: props, { rejectWithValue }) => {
  try {
    const res = await axios.get("/v1/report/general", {
      headers: { "Content-Type": "application/json" },
      params: {
        ...data,
        fromDate: moment(data?.fromDate).format("YYYY-MM-DD HH:mm"),
        toDate: moment(data?.toDate)
          .add(moment(data?.toDate).format("HH") == "23" ? 0 : 86369, "seconds")
          .format("YYYY-MM-DD HH:mm"),
      },
    });

    if (res?.data?.error) return rejectWithValue(res?.data?.error);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const ReportProductsThunk = createAsyncThunk(
  "report_product_stat",
  async (data: props, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/transactions/product-stats", {
        headers: { "Content-Type": "application/json" },
        params: {
          ...data,
          from: data?.fromDate && moment(data?.fromDate).format("YYYY-MM-DD HH:mm"),
          to:
            data?.toDate &&
            moment(data?.toDate)
              .add(moment(data?.toDate).format("HH") == "23" ? 0 : 86369, "seconds")
              .format("YYYY-MM-DD HH:mm"),
        },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const ReportGroupedThunk = createAsyncThunk(
  "report_grouped_week",
  async ({ data = "weekly", filters }: { data: "weekly" | "monthly", filters?: any }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/v1/report/${data}`, {
        headers: { "Content-Type": "application/json" },
        params: filters
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetTopPlayersThunk = createAsyncThunk(
  "report_top_players",
  async (filters: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/v1/report/top-ten`, {
        headers: { "Content-Type": "application/json" },
        params: filters
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetRecentPlayersThunk = createAsyncThunk(
  "report_recent_players",
  async (filters: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/v1/report/top-ten/recent`, {
        headers: { "Content-Type": "application/json" },
        params: filters
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
