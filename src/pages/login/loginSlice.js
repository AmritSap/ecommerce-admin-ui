import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginResponse: {},
  isAuth:false
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state,{payload}) => {
      state.isLoading = false;
      state.isAuth = true;
      state.loginResponse = payload
    },
    updateLogin: (state,{payload}) => {
      state.isLoading = false;
      state.isAuth = true;
      state.loginResponse = payload || {};
    },
    requestFail: (state,{payload}) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
    },
  },
});

const { reducer, actions } = loginSlice;
export const {
  requestPending,
  loginSuccess,
  updateLogin,
  requestFail,
} = actions;
export default reducer;
