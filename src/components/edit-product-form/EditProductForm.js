import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import {
  fetchAProduct,
  updateAProduct,
} from "../../pages/edit-product/editProductAction";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  slug: "",
  qty: 0.0,
  status: true,
  price: 0.0,
  salePrice: 0.0,
  saleEndDate: Date(),
  description: "",
  images: [],
  categories: [],
};

const EditProductForm = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const [editProduct, setEditProduct] = useState(initialState);
  const { isLoading, status, message, product } = useSelector(
    (state) => state.selectedProduct
  );

  useEffect(() => {
    // call api and update othe individual producrt
    if (!editProduct._id) {
      dispatch(fetchAProduct(_id));
      setEditProduct(product);
    }
  }, [dispatch, editProduct, _id]);

  // )if (product._id !== editProduct._id {
  //   setEditProduct(product);
  // }
  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;
    let val = value;
    console.log(name, value, checked);
    if (name === "status") {
      val = checked;
    }
    setEditProduct({ ...editProduct, [name]: val });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // removes the __v from database
    const { __v, ...restProduct } = editProduct;
    dispatch(updateAProduct(restProduct));
  };

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {message && (
        <Alert variant={status === "sucess" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      {!product._id ? (
        <h1>Product is not found</h1>
      ) : (
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={editProduct.name}
              onChange={handleOnChange}
              placeholder="Enter product name"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>slug</Form.Label>
              <Form.Control
                name="slug"
                type="text"
                value={editProduct.slug}
                onChange={handleOnChange}
                disabled
                required
              />
            </Form.Group>

            <Form.Group></Form.Group>
            <Form.Check
              type="switch"
              id="status"
              label="Available"
              name="status"
              checked={editProduct.status}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={editProduct.price}
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
              value={editProduct.salePrice}
              onChange={handleOnChange}
              placeholder="45.0 "
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Sale End Date</Form.Label>
            <Form.Control
              name="saleEndDate"
              type="date"
              placeholder="45.0"
              value={editProduct.saleEndDate}
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
              value={editProduct.qty}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              as="textarea"
              value={editProduct.description}
              onChange={handleOnChange}
              rows={7}
              placeholder="description"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      )}
    </div>
  );
};

export default EditProductForm;
