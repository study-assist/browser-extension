import React from "react";
import propTypes from "prop-types";

function BookmarkTag({ tagname, deleteTag }) {
  return (
    <div className="tag badge badge-secondary">
      <span className="mr-1">{tagname}</span>

      <button
        className="btn btn-delete"
        type="button"
        onClick={() => {
          deleteTag(tagname);
        }}
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

BookmarkTag.propTypes = {
  tagname: propTypes.string,
  deleteTag: propTypes.func
};

export default BookmarkTag;
