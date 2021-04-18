import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { fetchAProduct } from "../../pages/edit-product/editProductAction";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  qty: 0.0,
  isAvailable: true,
  price: 0.0,
  salePrice: 0.0,
  saleEndDate: null,
  description: "",
  images: [],
  categories: [],
};

const EditProductForm = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  console.log(useParams(), "fromcomponent 1");
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
    if (name === "isAvailable") {
      value = checked;
    }
    setEditProduct({ ...editProduct, [name]: val });
  };
  const handleOnSubmit = (e) => {
    console.log(editProduct);
    e.preventDefault();
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
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Avaliable"
              name="isAavailable"
              checked={editProduct.isAvailable}
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
              type="Date"
              placeholder="45.0 "
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
            Save Changes
          </Button>
        </Form>
      )}
    </div>
  );
};

export default EditProductForm;
