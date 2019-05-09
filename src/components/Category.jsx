import React from "react";
import propTypes from "prop-types";

import "../css/Category.css";

function Category({ category = "Folder1" }) {
  return (
    <div className="badge  category">
      <span className="mr-1">{category}</span>
      <button className="btn btn-delete " type="button">
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

Category.propTypes = {
  category: propTypes.string
};

export default Category;
