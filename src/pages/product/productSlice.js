import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  deleteMsg:"",
  productList: [],
};

const productSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    addProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    fetchAllProductSuccess: (state, { payload }) => {
        state.isLoading = false;
      state.productList = payload.result;
    
    },
    deleteProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
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

const { reducer, actions } = productSlice;
export const {
  requestPending,
  addProductSuccess,
  fetchAllProductSuccess,
  requestFail,
  deleteProductSuccess,
  // deleteCategorySuccess,
  // updateCategorySuccess,
} = actions;
export default reducer;
