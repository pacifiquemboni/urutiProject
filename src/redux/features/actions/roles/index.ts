import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetRolesThunk = createAsyncThunk("roles", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get("/v1/group", {
      headers: { "Content-Type": "application/json" },
    });

    if (res?.data?.error) return rejectWithValue(res?.data?.error);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const AddRoleThunk = createAsyncThunk(
  "add_roles",
  async ({ data }: { data: any }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/v1/group", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const DeleteRoleThunk = createAsyncThunk(
  "delete_role",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/v1/group/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const UpdateRoleThunk = createAsyncThunk(
  "update_role",
  async ({ data, id }: { data: any; id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/v1/group/${id}`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const SingleRoleThunk = createAsyncThunk(
  "update_single",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/v1/group/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const AssignPermissionsThunk = createAsyncThunk(
  "assign_permissions",
  async ({ data, id }: { data: string[]; id: string; values: any[] }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `/v1/group/assign-roles`,
        {
          groupId: id,
          roleIds: data,
        },
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

export const UnassignPermissionsThunk = createAsyncThunk(
  "unassign_permissions",
  async ({ id, data }: { data: string[]; id: string; values: any[] }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `/v1/group/unassign-roles`,
        {
          groupId: id,
          roleIds: data,
        },
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
