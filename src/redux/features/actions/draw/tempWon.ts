import { axios } from "@/redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetTempWonThunk = createAsyncThunk(
  "won_temp",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/temp-winner", {
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

export const ConfirmWonThunk = createAsyncThunk(
  "won_temp_confirm",
  async (tokenId: string, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "/v1/temp-winner/confirm-won-token",
        { tokenId },
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const RejectTokenThunk = createAsyncThunk(
  "reject_temp_confirm",
  async (tokenId: string, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "/v1/temp-winner/reject",
        { tokenId },
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const UpdateWonInfoThunk = createAsyncThunk(
  "Update_Won_Info",
  async ({ token, data }: { token: string; data: any }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/v1/won-token/user-information/${token}`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
