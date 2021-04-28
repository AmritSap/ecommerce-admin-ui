import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { addNewProduct } from "../../pages/product/ProductAction.js";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Spinner } from "react-bootstrap";
import { ProductCatList } from "../../components/product-category-list/ProductCatList";

const initialState = {
  name: "",
  qty: 0,
  status: true,
  price: 0,
  salePrice: 0,
  saleEndDate: "",
  description: "",
  images: [],
  categories: [],
};

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState(initialState);
  const [images, setImages] = useState([]);
  const { isLoading, status, message } = useSelector((state) => state.product);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(newProduct).map((key) => {
      key !== "images" && formData.append(key, newProduct[key]);
    });
    images.length &&
      [...images].map((image) => {
        formData.append("images", image);
      });
    dispatch(addNewProduct(formData));
  };

  const handleOnImageSelect = (e) => {
    const { files } = e.target;
    setImages(files);
  };

  const onCatSelect = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      // put _id inside the array
      setNewProduct({
        ...newProduct,
        categories: [...newProduct.categories, value],
      });
    } else {
      //  take_id ou of aaarraya
      const updatedCatIds = newProduct.categories.filter((id) => id !== value);
      setNewProduct({
        ...newProduct,
        categories: updatedCatIds,
      });
    }
  };

  return (
    <div>
      {/* {isLoading && <Spinner variant="primary" animation="border"></Spinner>} */}

      {message && (
        <Alert variant={status === "sucess" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit} enctype="multipart/form-data">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={newProduct.name}
            onChange={handleOnChange}
            placeholder="Enter product name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            name="status"
            id="isAvailable"
            type="switch"
            label="status"
            value={newProduct.status}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={newProduct.price}
            onChange={handleOnChange}
            placeholder="45.0"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sale Price</Form.Label>
          <Form.Control
            name="salePrice"
            type="number"
            value={newProduct.salePrice}
            onChange={handleOnChange}
            placeholder="45.0 "
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sale End Date</Form.Label>
          <Form.Control
            name="saleEndDate"
            type="Date"
            placeholder="45.0 "
            value={newProduct.saleEndDate}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name="qty"
            type="number"
            placeholder="50"
            required
            value={newProduct.qty}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            as="textarea"
            value={newProduct.description}
            onChange={handleOnChange}
            rows={7}
            placeholder="description"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.File
            name="images"
            // value={newProduct.images}
            multiple
            onChange={handleOnImageSelect}
            id="exampleFormControlFile1"
            label="Images file only"
            accept="image/"
          />
        </Form.Group>
        {/* <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Select Categories</Form.Label>
          <Form.Control
            name="categories"
            defaultValue={newProduct.categories}
            onChange={handleOnChange}
            as="select"
            multiple
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group> */}
        <hr></hr>
        <Form.Label>Select Categories</Form.Label>
        <ProductCatList
          onCatSelect={onCatSelect}
          selectedCatIds={newProduct.categories}
        />
        <hr></hr>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
