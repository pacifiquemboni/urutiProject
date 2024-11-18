import { createSlice } from "@reduxjs/toolkit";
import { DeleteProductsThunk, EditProductsThunk, GetProductsThunk } from "../actions/products";

const initialState = {
  list: [] as any[],
  info: {} as any,
  status: "pending" as statusType,
  error: undefined as string | any,
  fetchTimes: 0,
  filters: {} as any,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // get transactions
      .addCase(GetProductsThunk.pending, (state) => {
        state.status = "pending";
        state.fetchTimes += 1;
      })
      .addCase(GetProductsThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(GetProductsThunk.fulfilled, (state, { payload, meta: { arg } }) => {
        const { list, ...info } = payload;
        state.status = "success";
        if (arg) state.filters = arg;
        state.list = list;
        state.info = info;
      })

      // add products
      // .addCase(AddProductsThunk.fulfilled, (_, { payload }) => {
      //   console.log({ payload });
      // })
      // edit products
      .addCase(EditProductsThunk.fulfilled, (state, { meta: { arg } }) => {
        console.log(arg);
        const index = state.list?.findIndex((s) => s?.productId == arg?.id);
        if (index >= 0) {
          console.log(index);
          state.list[index] = { ...state.list[index], ...arg?.data };
        }
      })
      // delete products
      .addCase(DeleteProductsThunk.fulfilled, (state, { meta: { arg } }) => {
        state.list = state.list?.filter((s) => s?.productId != arg?.id);
      });

    // .addCase(AssignBonusThunk.fulfilled, (_, { meta: { arg: __ } }) => {
    //   // change state
    // })
    // .addCase(UnassignBonusThunk.fulfilled, (_, { meta: { arg: __ } }) => {
    //   // change state
    // });
  },
});

export const { setFilters } = ProductsSlice.actions;
export default ProductsSlice.reducer;
