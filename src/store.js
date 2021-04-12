import {configureStore} from '@reduxjs/toolkit'
import CategoryReducer from "./pages/category/categorySlice.js"

const store = configureStore({
  reducer: {
    category:  CategoryReducer,
  },
});
export default store;