import React, { useEffect } from "react";
import { Table, Alert, Spinner, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  deleteProduct,
} from "../../pages/product/ProductAction.js";

export const ProductListTable = () => {
  const { isLoading, status, deleteMsg, productList } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Delete?")) {
      dispatch(deleteProduct(_id));
    }
  };

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {deleteMsg && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {deleteMsg}
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((row, i) => {
            return (
              <tr key={row._id}>
                <td>{i} </td>
                <td>{row.status}</td>
                <td>put img here</td>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => history.push(`/product/${row._id}`)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDelete(row._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
