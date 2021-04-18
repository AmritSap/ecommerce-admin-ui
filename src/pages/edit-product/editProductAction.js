import { getAProduct, getProduct } from "../../apis/productAPI.js";

import {
  requestPending,
  fetchProductSuccess,
  requestFail,
} from "./selectedProductSlice.js";

// export const addNewProduct = (frmDt) => async (dispatch) => {
//   // call API or reducer to update the state

//   try {
//     dispatch(requestPending());
//     const result = await saveProduct(frmDt); /////status message
//     dispatch(addProductSuccess(result));
//     result.status === "sucess" && dispatch(fetchProduct());
//   } catch (error) {
//     const err = {
//       status: "error",
//       message: error.message,
//     };
//     dispatch(requestFail(err));
//   }
// };
export const fetchAProduct = (_id) => async (dispatch) => {
  // call API or reducer to update the state

  try {
    dispatch(requestPending());
    const result = await getAProduct(_id); /////status message
    dispatch(fetchProductSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

// export const updateCategoryName = (itemId, categoryName, updatedName) => async (
//   dispatch
// ) => {
//   // call API or reducer to update the state

//   try {
//     dispatch(requestPending());

//     const result = await updateCategory(itemId, categoryName, updatedName);
//     /////status message
//     dispatch(updateCategorySuccess(result));

//     result.status === "sucess" && dispatch(fetchcategories());
//   } catch (error) {
//     const err = {
//       status: "error",
//       message: error.message,
//     };
//     dispatch(requestFail(err));
//   }
// };
