import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetUsersThunk = createAsyncThunk(
  "users",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/user", {
        params: data,
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

type props = {
  data?: any;
  id?: string;
};

export const AddUsersThunk = createAsyncThunk(
  "user_add",
  async ({ data }: props, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/v1/user/radio`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const UpdateUsersThunk = createAsyncThunk(
  "user_update",
  async ({ data, id }: props, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/v1/user/${id}`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const DeleteUsersThunk = createAsyncThunk(
  "user_delete",
  async ({ id }: props, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/v1/user/${id}`);

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const AssignRoleThunk = createAsyncThunk(
  "user_assign_role",
  async (data: { userId: string; groupId: string; groupName: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/v1/user/group`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const UnassignRoleThunk = createAsyncThunk(
  "user_unassign_role",
  async (data: { userId: string; groupId: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/v1/user/unassign-group`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
