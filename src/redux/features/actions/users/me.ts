// import { getLoginDammy, getProfileDammy } from "@/helpers/dammy";
import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const LoginThunk = createAsyncThunk("login", async (data: any, { rejectWithValue }) => {
  try {
    // let res: any = {
    //   data: getLoginDammy(data),
    // };

    // if (!res.data)
    const res = await axios.post("/v1/user/login", data, {
      headers: { "Content-Type": "application/json" },
    });

    if (res?.data?.error) return rejectWithValue(res?.data?.error);
    if (
      !res?.data?.updatePasswordRequired &&
      !res?.data?.userInfo?.realmRoles?.includes?.("can_login")
    ) {
      throw new Error("Something went wrong");
    }
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const SignupThunk = createAsyncThunk("signup", async (data: any, { rejectWithValue }) => {
  try {
    const res = await axios.post("/v1/user/signup", data, {
      headers: { "Content-Type": "application/json" },
    });

    if (res?.data?.error) return rejectWithValue(res?.data?.error);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const GetUserThunk = createAsyncThunk("user", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get("/v1/user/check", {
      headers: { "Content-Type": "application/json" },
    });

    // const res = {
    //   data: getProfileDammy(),
    // };

    if (res?.data?.error) return rejectWithValue(res?.data?.error);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const ResetPasswordThunk = createAsyncThunk(
  "reset_password",
  async ({ id, password }: { id: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `/v1/user/${id}/reset-password`,
        { password },
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
