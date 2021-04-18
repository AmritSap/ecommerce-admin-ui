import {
  saveProduct,
  getProduct,
  productDelete,
  // getCategory,
  // deleteCategory,
  // updateCategory,
} from "../../apis/productAPI.js";
import {
  requestPending,
  addProductSuccess,
  fetchAllProductSuccess,
  requestFail,
  deleteProductSuccess,
  deleteCategorySuccess,
  updateCategorySuccess,
} from "./productSlice.js";

export const addNewProduct = (frmDt) => async (dispatch) => {
  // call API or reducer to update the state

  try {
    dispatch(requestPending());
    const result = await saveProduct(frmDt); /////status message
    dispatch(addProductSuccess(result));
    result.status === "sucess" && dispatch(fetchProduct());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const fetchProduct = () => async (dispatch) => {
  // call API or reducer to update the state

  try {
    dispatch(requestPending());
    const result = await getProduct(); /////status message
    dispatch(fetchAllProductSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const deleteProduct = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await productDelete(_id); //{status, message, result:[]}

    dispatch(deleteProductSuccess(result));

    result.status === "sucess" && dispatch(fetchProduct());
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
