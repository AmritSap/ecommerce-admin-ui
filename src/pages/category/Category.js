import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { AddCategoryForm } from "../../components/add-category-form/AddCategoryForm.js";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ListCategory } from "../../components/category-List-Item/ListCategory.js";

const Category = () => {
  const { categoryList } = useSelector((state) => state.category);
  return (
    <DefaultLayout>
      <AddCategoryForm />
      <hr />
      <div className="display-categories">
        <ListCategory />
      </div>
    </DefaultLayout>
  );
};

export default Category;
