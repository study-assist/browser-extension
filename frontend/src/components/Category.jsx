import React from "react";
import propTypes from "prop-types";

import "../css/Category.css";

function Category({ category = "Folder1", deleteCategory }) {
  return (
    <div className="badge  category btn-sq-lg">
      <span className="mr-1">{category}</span>
      <button
        className="btn btn-delete btn-lg "
        type="button"
        onClick={() => {
          deleteCategory(category);
        }}
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

Category.propTypes = {
  category: propTypes.string,
  deleteCategory: propTypes.func
};

export default Category;
