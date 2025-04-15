import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "@/features/ProductsTable";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
