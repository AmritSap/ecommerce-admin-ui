import { saveCategory } from "../../apis/categoryAPI.js";
import {
  requestPending,
  addCategorySuccess,
  fetchAllCategorySuccess,
  requestFail,
} from "./categorySlice.js";


const addNewCategory =frmDt => async  dispatch=>{
// call API or reducer to update the state

try {
    dispatch(requestPending());
    const result =await  saveCategory(frmDt)/////status message 
    dispatch(addCategorySuccess(result));
} catch (error) {
 const err ={
     status:'error',
     message:error.message
 }   
 dispatch(requestFail(err))
}
}

export default addNewCategory;