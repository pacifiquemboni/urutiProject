import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPaymentsThunk = createAsyncThunk(
  "payment",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/transactions", {
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
