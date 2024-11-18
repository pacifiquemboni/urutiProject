import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const ContactsUsThunk = createAsyncThunk(
  "ContactsUs",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await axios.post("/v1/contact", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetContactsThunk = createAsyncThunk(
  "Contacts_all",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/contact", {
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
