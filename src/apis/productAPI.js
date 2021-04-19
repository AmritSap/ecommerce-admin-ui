import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const prodApi = rootUrl + "product";

export const saveProduct = (frmDt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(prodApi, frmDt);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};


export const getProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(prodApi);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};


// gets the single product
export const getAProduct = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(prodApi + "/" + _id);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateProduct = (fromDt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.put(prodApi, fromDt);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const productDelete = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(prodApi, { data: { _id } });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//       export const updateCategory = (itemId, categoryName, updatedName) => {
//         return new Promise(async (resolve, reject) => {
//           try {
//             const { data } = await axios.patch(catApi, {
//               data: itemId,
//               categoryName,
//               updatedName,
//             });

//             resolve(data);
//           } catch (error) {
//             reject(error);
//           }
//         });
//       };
