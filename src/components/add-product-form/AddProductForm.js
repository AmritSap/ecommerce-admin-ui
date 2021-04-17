import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const initialState = {
  name: "",
  qty: 0.0,
  isAvailable: "off",
  price: 0.0,
  salePrice: 0.0,
  saleEndDate: null,
  description: "",
  images: [],
  categories: [],
};

const AddProductForm = () => {
  const [newProduct, setNewProduct] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={newProduct.name}
            onChange={handleOnChange}
            placeholder="Enter product name"
            required
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group>
          <Form.Check type="switch" id="custom-switch" label="Avaliable" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={newProduct.price}
            onChange={handleOnChange}
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

        {/* <Form.Group>
          <Form.File
            name="images"
            value={newProduct.images}
            onChange={handleOnChange}
            id="exampleFormControlFile1"
            label="Images"
          />
        </Form.Group> */}

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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
