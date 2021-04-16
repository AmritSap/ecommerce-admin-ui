import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../layout/defaultlayout.style.css";
import { deleteCategories } from "../../pages/category/CategoryAction.js";
import { EditCategoryForm } from "../add-category-form copy/EditCategoryForm";
export const ListCategory = () => {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);

  //   show or hide the form
  const [showForm, setShowForm] = useState("");

  const handleOnDeleteClicked = (_id) => {
    if (window.confirm("Delete?")) {
      const childIds = categoryList.map((row) => {
        if (row.parentCategory === _id) {
          return row._id;
        }
      });
      console.log([...childIds]);
      const idsToDelete = childIds.filter((row) => row);
      dispatch(deleteCategories([...idsToDelete, _id]));
    }
  };

  // This function handles the edit
  const handleEdit = (_id) => {
    console.log(_id);
    showForm === _id ? setShowForm("") : setShowForm(_id);
  };

  const topLevelCat = categoryList.filter((row) => !row.parentCategory);
  const childLevelCat = categoryList.filter((row) => row.parentCategory);
  return (
    <ListGroup>
      {topLevelCat.map((row, i) => {
        return (
          <>
            <ListGroup.Item key={i}>
              {row.name}{" "}
              <span className="item-buttons" style={{ marginLeft: "5rem" }}>
                <Button onClick={() => handleEdit(row._id)}>
                  <i className="far fa-edit"></i>
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleOnDeleteClicked(row._id)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </span>
              {showForm === row._id && <EditCategoryForm categoryEdit={row} />}
            </ListGroup.Item>
            {childLevelCat.map(
              (itm) =>
                itm.parentCategory === row._id && (
                  <ListGroup.Item key={i}>
                    {`--> ${itm.name}`}
                    <span
                      className="item-buttons"
                      style={{ marginLeft: "5rem" }}
                    >
                      <Button onClick={() => handleEdit(row._id)}>
                        <i className="far fa-edit"></i>
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleOnDeleteClicked(itm._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </span>
                    {showForm === itm._id && (
                      <EditCategoryForm categoryEdit={itm} />
                    )}
                  </ListGroup.Item>
                )
            )}
          </>
        );
      })}
    </ListGroup>
  );
};
