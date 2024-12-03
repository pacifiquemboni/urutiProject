// import { getLoginDammy, getProfileDammy } from "@/helpers/dammy";
import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const LoginThunk = createAsyncThunk("login", async (data: any, { rejectWithValue }) => {
  try {
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
    // let err =error.message
    // console.log("error while loging in",err);

    return rejectWithValue(error);
  }
});
export const LoginClientThunk = createAsyncThunk(
  "login-client",
  async (data: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/v1/user/login`, data);

      if (res?.data?.error) {
        return rejectWithValue(res?.data?.error);
      }

      const canLogin = res?.data?.userInfo?.realmRoles?.includes?.("default-roles-isora");
      if (!res?.data?.updatePasswordRequired && !canLogin) {
        return rejectWithValue("You are not authorized to log in.");
      }

      return res.data; // Successful response
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// client sign up
export const SignupClientThunk = createAsyncThunk(
  "client_signup",
  async (data: { username: string;firstName:string; lastName:string; email:string; phoneNumber:string; password: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/v1/user/signup/player", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

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
