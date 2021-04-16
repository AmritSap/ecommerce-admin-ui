import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Button, Form, Spinner, Alert } from "react-bootstrap";
import { saveCategory, getCategory } from "../../apis/categoryAPI";
import {
  addNewCategory,
  fetchcategories,
} from "../../pages/category/CategoryAction.js";

const initialState = {
  name: "",
};
export const AddCategoryForm = () => {
  const dispatch = useDispatch();
  const { isLoading, status, message, categoryList } = useSelector(
    (state) => state.category
  );
  useEffect(()=>{dispatch(fetchcategories())},[dispatch])
  
  const [category, setCategory] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewCategory(category));
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
        <Form.Row>
          <Form.Group as={Col} controlId="">
            <Form.Label>New Category</Form.Label>
            <Form.Control
              value={category.name}
              name="name"
              type="text"
              onChange={handleOnChange}
              placeholder="Enter new category"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Select Parent Category</Form.Label>
            <Form.Control
              as="select"
              name="parentCategory"
              onChange={handleOnChange}
              // defaultValue={category.parentCategory}
            >
              <option>Choose...</option>
              {categoryList?.map((row, i) => (
                <option key={i} value={row._id}>
                  {row.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
