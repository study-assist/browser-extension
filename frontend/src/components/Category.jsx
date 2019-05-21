import React, { Fragment } from "react";
import propTypes from "prop-types";

import "../css/Category.css";

function Category({ category = "Folder1", deleteCategory }) {
  return (
    <>
      <button
        className="button mx-auto rounded-circle"
        type="button"
        onClick={event => {
          event.preventDefault();
        }}
      >
        <i className="fas fa-plus" />
      </button>

      <input
        value={category}
        className="category-name text-center mx-auto"
        type="text"
      />
      <small className="text-muted suggested">Suggested</small>
    </>
  );
}

Category.propTypes = {
  category: propTypes.string,
  deleteCategory: propTypes.func
};

export default Category;

/* 
<button
  className="btn btn-delete btn-lg "
  type="button"
  onClick={() => {
    deleteCategory(category);
  }}
>
  <i className="fas fa-times" />
</button> */
