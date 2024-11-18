import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetDrawThunk = createAsyncThunk(
  "draw",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const { pageSize, ...params } = data;
      const res = await axios.get("/v1/draw", {
        headers: { "Content-Type": "application/json" },
        params: { ...params, pageSize: pageSize || 1000 },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetDrawListThunk = createAsyncThunk(
  "draw_list",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/draw", {
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

export const GetRandomTokenThunk = createAsyncThunk(
  "draw_random",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/v1/token/random/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
