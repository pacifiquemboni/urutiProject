import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

export const GetTransactionsThunk = createAsyncThunk(
  "transactions",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/transactions", {
        headers: { "Content-Type": "application/json" },
        params: { ...data, status: "SUCCESSFUL" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetTransactionsExportThunk = createAsyncThunk(
  "transactions_export",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/transactions", {
        headers: { "Content-Type": "application/json" },
        params: { ...data, status: "SUCCESSFUL" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetTransactionsReportThunk = createAsyncThunk(
  "transactions_report",
  async (dataInfo: any = {}, { rejectWithValue }) => {
    try {
      const today = moment().format("YYYY-MM-DD");
      const today_end = moment(today).add(86369, "seconds").format("YYYY-MM-DD HH:mm");
      const data = {
        ...dataInfo,
        fromDate: moment(dataInfo?.from || today).format("YYYY-MM-DD"),
        toDate: moment(dataInfo?.to || today_end).format("YYYY-MM-DD HH:mm"),
        status: "SUCCESSFUL",
      };

      const res = await axios.get("/v1/report/transaction", {
        params: data,
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetTransactionsHitsThunk = createAsyncThunk(
  "transactions_Hits",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/transactions/phone_number-hits", { params: data });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
