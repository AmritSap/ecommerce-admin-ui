import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import EditProductForm from "../../components/edit-product-form/EditProductForm"
import { Card } from "react-bootstrap";

import {useParams} from "react-router-dom";
const EditProduct = () => {
  // const {_id} =useParams();
  return (
    <DefaultLayout>
      <h1>Update Product</h1>
      <hr></hr>
      <div className="add-new-product-form">
        <Card className="p-4">
          <EditProductForm />
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default EditProduct;

