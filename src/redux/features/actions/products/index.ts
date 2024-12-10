import { axios } from "@redux/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetProductsThunk = createAsyncThunk(
  "products",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/product", {
        headers: { "Content-Type": "application/json" },
        params: data,
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      // console.log("products",res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// Define the thunk to get product by id
export const GetProductByIdThunk = createAsyncThunk(
  "product/getById",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/v1/product/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      // console.log("Product by id data:", res.data);
      return res.data; // Return the product data
    } catch (error) {
      return rejectWithValue(error); // Handle errors
    }
  }
);
export const GetAllProductsThunk = createAsyncThunk(
  "products_all",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/product", {
        headers: { "Content-Type": "application/json" },
        params: { ...data, pageSize: 1000 },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      // console.log("all products:", res.data)
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const ClientGetAllProductsThunk = createAsyncThunk(
  "products/fetchAllP",
  async (data: any = {}, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/product", {
        headers: { "Content-Type": "application/json" },
        params: { ...data, pageSize: 1000 }, // Default pageSize to 1000 if not provided
      });

      if (res?.data?.error) {
        console.error("API Error:", res.data.error);
        return rejectWithValue(res.data.error); // Handle API-level errors
      }

      // console.log("Fetched Products:", res.data);
      return res.data; // Assume res.data contains the list of products
    } catch (error: any) {
      console.error("Fetch Error:", error.message || error);
      return rejectWithValue(error.response?.data?.message || "An error occurred while fetching products.");
    }
  }
);
export const GetAllProductsByCategoryIdThunk = createAsyncThunk(
  "products/fetchAll",
  async (data: { categoryId: string; pageSize?: number }, { rejectWithValue }) => {
    try {
      const res = await axios.get("/v1/product", {
        headers: { "Content-Type": "application/json" },
        params: { ...data, pageSize: data.pageSize || 1000 }, // Default pageSize to 1000 if not provided
      });

      if (res?.data?.error) {
        console.error("API Error:", res.data.error);
        return rejectWithValue(res.data.error); // Handle API-level errors
      }

      // console.log("Fetched Products:", res.data);
      return res.data; // Assume res.data contains the list of products
    } catch (error: any) {
      console.error("Fetch Error:", error.message || error);
      return rejectWithValue(error.response?.data?.message || "An error occurred while fetching products.");
    }
  }
);

export const AddProductsThunk = createAsyncThunk(
  "products_add",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await axios.post("/v1/product", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      // console.log("added products:", res.data)

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const EditProductsThunk = createAsyncThunk(
  "products_edit",
  async ({ data, id }: { data: any; id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/v1/product/${id}`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      // console.log("edited products:", res.data)

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const AssignBonusThunk = createAsyncThunk(
  "products_bonuses_assign",
  async ({ data, id }: { data: any; id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/v1/product/${id}/assign-bonus`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const ProductBonusesThunk = createAsyncThunk(
  "products_bonuses",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/v1/product/${id}/bonus-products`, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const UnassignBonusThunk = createAsyncThunk(
  "products_bonuses_unassign",
  async ({ data, id }: { data: any; id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/v1/product/${id}/unassign-bonus`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const DeleteProductsThunk = createAsyncThunk(
  "products_delete",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/v1/product/${id}`);

      if (res?.data?.error) return rejectWithValue(res?.data?.error);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
