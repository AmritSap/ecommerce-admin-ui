import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  product: {},
};

const selectedProductSlice = createSlice({
  name: "editProduct",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    // addProductSuccess: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.status = payload.status;
    //   state.message = payload.message;
    // },
    fetchProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.product = payload.result || {};
    },

    // updateCategorySuccess: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.status = payload.status;
    //   state.message = payload.message;
    // },
    requestFail: (state) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = selectedProductSlice;
export const {
  requestPending,
  fetchProductSuccess,
  requestFail,
  // deleteCategorySuccess,
  // updateCategorySuccess,
} = actions;
export default reducer;
