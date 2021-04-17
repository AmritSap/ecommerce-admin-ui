import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import AddProductForm from "../../components/add-product-form/AddProductForm.js";
import { Card } from "react-bootstrap";
const AddProduct = () => {
  return (
    <DefaultLayout>
      <h1>Add product from here</h1>
      <hr></hr>
      <div className="add-new-product-form">
        <Card className="p-4">
          <AddProductForm />
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default AddProduct;
