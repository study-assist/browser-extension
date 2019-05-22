import React from "react";
import propTypes from "prop-types";

import "../css/Category.css";

function Category({ collection = "Folder1", deleteCollection }) {
  return (
    <>
      <button
        className="btn btn-delete"
        type="button"
        onClick={() => {
          deleteCollection(collection);
        }}
      >
        <i className="fas fa-times" />
      </button>
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
        value={collection}
        className="category-name  text-center  text-truncate font-weight-bold border-0  mx-auto"
        type="text"
      />
      <small className="text-muted suggested">Suggested</small>
    </>
  );
}

Category.propTypes = {
  collection: propTypes.string,
  deleteCollection: propTypes.func
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
