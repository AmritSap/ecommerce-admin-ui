import { requestPending,
  loginSuccess,
  requestFail,updateLogin} from "./loginSlice.js"

  import { loginAPI, } from "../../apis/loginAPI.js";
  import {tokenAPI } from "../../apis/tokenAPI.js"
  // import {updateLogin}

  export const sendLogin = (formData) => async (dispatch) => {
    // call API or reducer to update the state

    try {
      dispatch(requestPending());
      const result = await loginAPI(formData);
      console.log(result) /////status message user tokens
      const {accessJWT,refreshJWT} = result

      // store the accesstoken and refresh token in browser
       accessJWT && sessionStorage.setItem("accessJWT",accessJWT)
         refreshJWT && localStorage.setItem("ourEcommerceRefreshJWT", refreshJWT);
           

    //   if we get token from server we need to store in browser storage

      dispatch(loginSuccess(result));
    } catch (error) {
      const err = {
        status: "error",
        message: error.message,
      };
      dispatch(requestFail(err));
    }
  };

  export const logout = () => dispatch =>{
    // clear browser storage
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("ourEcommerceRefreshJWT");
    // and also remove tokens from our server
  }

  export const userAutoLogin =() => async dispatch =>{
    const accessJWT= sessionStorage.getItem("accessJWT")
    const refreshJWT =localStorage.getItem("ourEcommerceRefreshJWT")
 accessJWT && dispatch(updateLogin());

	if (!accessJWT && refreshJWT) {
		//call the server to get new access token
		const result = await tokenAPI(refreshJWT);
		console.log(result);

		if (result.status === "sucess") {
			sessionStorage.setItem("accessJWT", result.accessJWT);
			dispatch(updateLogin());
		}
	}
  }