import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ProductListTable from "../../components/product-table/ProductListTable.js";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Product = () => {
  const history = useHistory();
  return (
    <DefaultLayout>
      <div className="product">
        <h1>Products</h1>
        <Button variant="success" onClick={() => history.push("/product/new")}>
          Add new Project
        </Button>
        <div className="product-lists">
          <ProductListTable />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Product;
