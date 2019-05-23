import React from "react";
import propTypes from "prop-types";

function Collection({ collection = "Folder1", deleteCollection }) {
  return (
    <>
      <button
        className="button btn btn-folder-color rounded-circle mx-auto"
        type="button"
        onClick={event => {
          event.preventDefault();
        }}
      >
        <i className="fas fa-plus" />
      </button>
      <button
        className="btn btn-delete position-absolute button-delete"
        type="button"
        onClick={() => {
          deleteCollection(collection);
        }}
      >
        <i className="fas fa-times" />
      </button>

      <input
        value={collection}
        className="collection-name text-center text-truncate font-weight-bold border-0 mx-auto"
        type="text"
      />
      <small className="text-muted suggested">Suggested</small>
    </>
  );
}

Collection.propTypes = {
  collection: propTypes.string,
  deleteCollection: propTypes.func
};

export default Collection;
