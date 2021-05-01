import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userResponse: {},
  adminProfile: {},
  passOtpRequest: {},
  showNewPassFrom:false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    getProfileSucess: (state, { payload }) => {
      state.isLoading = true;
      state.adminProfile = payload;
    },
    passswordResetOTPRequest: (state, { payload }) => {
      state.isLoading = false;
      state.showNewPassFrom = payload.status === "sucess"? true:false
      state.passOtpRequest = payload;
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.userResponse = payload;
    },
  },
});

const { reducer, actions } = profileSlice;
export const {
  requestPending,
  getProfileSucess,
  requestFail,
  passswordResetOTPRequest,
 
} = actions;
export default reducer;
