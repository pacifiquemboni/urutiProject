import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken } from "@/helpers/token";

const BackEnd_URL = process.env.REACT_APP_PLAYER_API_URL;

export const GetTokensThunk = createAsyncThunk(
  "tokens/getTokens", // Namespace the action properly
  async (_, { rejectWithValue }) => {
    const token = getToken;
    try {
      const response = await axios.get(`${BackEnd_URL}/v1/wallet/my-tokens`, {
        headers: { "Content-Type": "application/json",
           Authorization: `Bearer ${token}` },
      });
      console.log("token data:", response.data);
      return response.data;
    } catch (error) {
      // Handle error explicitly
      console.error("Error fetching tokens:", error);
      return rejectWithValue({ message: "Failed to fetch tokens" });
    }
  },
);
