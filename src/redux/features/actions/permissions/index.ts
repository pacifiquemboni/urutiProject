import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPermissionsThunk = createAsyncThunk(
  "permissions",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/role?pageNumber=1&pageSize=100", {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const AddPermissionsThunk = createAsyncThunk(
  "add_permissions",
  async ({ data }: { data: any }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/v1/role", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const DeletePermissionsThunk = createAsyncThunk(
  "delete_permissions",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/v1/role/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const UpdatePermissionsThunk = createAsyncThunk(
  "update_permissions",
  async ({ data, id }: { data: any; id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/v1/role/${id}`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
