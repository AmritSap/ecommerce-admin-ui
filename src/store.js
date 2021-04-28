import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./pages/category/categorySlice.js";
import productReducer from "./pages/product/productSlice.js";
import selectedProductReducer from "./pages/edit-product/selectedProductSlice";
import loginReducer from "./pages/login/loginSlice"

const store = configureStore({
  reducer: {
    category: CategoryReducer,
    product: productReducer,
    selectedProduct: selectedProductReducer,
    login: loginReducer,
  },
});
export default store;
