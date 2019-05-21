import React from "react";
import propTypes from "prop-types";

import "../css/Category.css";

function Category({ category = "Folder1", deleteCategory }) {
  return (
    <>
      <button
        className=" button  btn btn-folder-color rounded-circle mx-auto"
        type="button"
        onClick={event => {
          event.preventDefault();
        }}
      >
        <i className="fas fa-plus" />
      </button>

      <input
        value={category}
        className="category-name  text-center  text-truncate font-weight-bold border-0  mx-auto"
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
