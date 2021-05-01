import {
  requestPending,
  getProfileSucess,
  requestFail,
  passswordResetOTPRequest,
} from "./ProfileSlice";

import {passOtpRequestAPI} from "../../apis/profileAPI"


// //////////////////////////////Password reset stuff////////////////
export const reqOtpForNewPassword = (email) => async (dispatch) => {
  // call API or reducer to update the state

  try {
    dispatch(requestPending());
    const result = await passOtpRequestAPI(email);
    console.log(result); /////status message user tokens
  dispatch(passswordResetOTPRequest(result))
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
