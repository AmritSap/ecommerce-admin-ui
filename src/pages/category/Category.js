import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { AddCategoryForm } from "../../components/add-category-form/AddCategoryForm.js";
import { ListGroup } from "react-bootstrap";

const Category = () => {
  return (
    <DefaultLayout>
      <AddCategoryForm />
      <hr />
      <div className="display-categories">
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </div>
    </DefaultLayout>
  );
};

export default Category;
