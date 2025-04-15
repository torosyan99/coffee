import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsFetch } from "./utils/getProductsFetch/getProductsFetch";
import { getProductsFulfilled } from "./utils/getProductsFetch/getProductsFulfilled";

export const getProductsAsyncThunk = createAsyncThunk(
  "PRODUCTS/GET",
  getProductsFetch()
);

const productsSlice = createSlice({
  name: "PRODUCTS",
  initialState: [],

  extraReducers: (build) => {
    build.addCase(getProductsAsyncThunk.fulfilled, getProductsFulfilled);
  },
});

export default productsSlice.reducer;
