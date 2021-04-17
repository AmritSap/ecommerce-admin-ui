import {
  saveCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} from "../../apis/categoryAPI.js";
import {
  requestPending,
  addCategorySuccess,
  fetchAllCategorySuccess,
  requestFail,
  deleteCategorySuccess,
  updateCategorySuccess,
} from "./categorySlice.js";

export const addNewCategory = (frmDt) => async (dispatch) => {
  // call API or reducer to update the state

  try {
    dispatch(requestPending());
    const result = await saveCategory(frmDt); /////status message
    dispatch(addCategorySuccess(result));
    result.status === "sucess" && dispatch(fetchcategories());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const fetchcategories = () => async (dispatch) => {
  // call API or reducer to update the state

  try {
    dispatch(requestPending());
    const result = await getCategory(); /////status message
    dispatch(fetchAllCategorySuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const deleteCategories = (idArg) => async (dispatch) => {
  // call API or reducer to update the state

  try {
    dispatch(requestPending());
    const result = await deleteCategory(idArg); /////status message
    dispatch(deleteCategorySuccess(result));
    result.status === "sucess" && dispatch(fetchcategories());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const updateCategoryName = (itemId, categoryName, updatedName) => async (
  dispatch
) => {
  // call API or reducer to update the state

  try {
    dispatch(requestPending());

    const result = await updateCategory(itemId, categoryName, updatedName);
    /////status message
    dispatch(updateCategorySuccess(result));

    result.status === "sucess" && dispatch(fetchcategories());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
