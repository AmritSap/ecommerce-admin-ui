import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Button, Form, Spinner, Alert } from "react-bootstrap";
import { saveCategory, getCategory } from "../../apis/categoryAPI";
import {
  addNewCategory,
  fetchcategories,
} from "../../pages/category/CategoryAction.js";

export const EditCategoryForm = ({ categoryEdit }) => {
  const dispatch = useDispatch();
  const { isLoading, status, message, categoryList } = useSelector(
    (state) => state.category
  );
  const [category, setCategory] = useState(categoryEdit);
  useEffect(() => {
    setCategory(category);
  }, [dispatch, category]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // dispatch(addNewCategory(category));
  };

  // we going to find the way to call sever

  return (
    <div className="add-category-form">
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {message && (
        <Alert variant={status === "sucess" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Col} controlId="">
          <Form.Control
            value={category.name}
            name="name"
            type="text"
            onChange={handleOnChange}
            placeholder="Enter new category"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
