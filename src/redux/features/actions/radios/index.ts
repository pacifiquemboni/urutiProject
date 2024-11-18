import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCategoriesThunk = createAsyncThunk(
  "radio",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/category", {
        headers: { "Content-Type": "application/json" },
        params: { ...data, status: "success" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      console.log("categories",res.data);
      
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetRadiosExportThunk = createAsyncThunk(
  "radio_export",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/category", {
        headers: { "Content-Type": "application/json" },
        params: { ...data, status: "success" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const AddRadiosThunk = createAsyncThunk(
  "add_radio",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.post("/v1/category", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      console.log(res.data);
      (res.data)
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const EditRadiosThunk = createAsyncThunk(
  "edit_radio",
  async ({ data, id }: { data: any, id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/v1/category/${id}`, data);

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const DisactivateCategoriesThunk = createAsyncThunk(
  "disactivate_radio",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/v1/category/${id}`);

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);


export const ActivateCategoriesThunk = createAsyncThunk(
  "Activate_radio",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      // const res = await axios.delete(`/v1/category/${id}`);

      // if (res?.data?.error) return rejectWithValue(res?.data?.error);
      // return res.data;
      return { id };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
