import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  categoryList: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    addCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    fetchAllCategorySuccess: (state, { payload }) => {
      state.categoryList = payload.result;
      state.isLoading = false;
    },
       deleteCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    requestFail: (state) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = categorySlice;
export const {
  requestPending,
  addCategorySuccess,
  fetchAllCategorySuccess,
  requestFail,
  deleteCategorySuccess,
} = actions;
export default reducer;
