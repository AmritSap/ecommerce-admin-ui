
import axios from 'axios'

const rootUrl="http://localhost:8000/api/v1/"
const catApi=rootUrl + "category"

export const saveCategory =  frmDt =>{
 return new Promise ( async(resolve,reject)=>{
   
     try {
        const {data} = await axios.post(catApi,frmDt);
        resolve(data);
     } catch (error) {
         reject(error)
         
     }
 })
 }

   export const getCategory = () => {
     return new Promise(async(resolve, reject) => {
       try {
         const {data} = await axios.get(catApi);
       
         resolve(data);
       } catch (error) {
         reject(error);
       }
     });
   };

      export const deleteCategory = (idArg) => {
        return new Promise(async (resolve, reject) => {
          try {
            const { data } = await axios.delete(catApi,{data:idArg});

            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      };
   
        export const updateCategory = (itemId, categoryName, updatedName) => {
          return new Promise(async (resolve, reject) => {
            try {
              const { data } = await axios.patch(catApi, {
                data: itemId,
                categoryName,
                updatedName,
              });

              resolve(data);
            } catch (error) {
              reject(error);
            }
          });
        };
   