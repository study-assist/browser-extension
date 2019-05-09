import React from "react";
import propTypes from "prop-types";

function BookmarkTag({ tagname, deleteTag }) {
  return (
    <div className="tag btn btn-secondary">
      {tagname}
      <button
        type="button"
        onClick={() => {
          deleteTag(tagname);
        }}
      >
        &times;
      </button>
    </div>
  );
}

BookmarkTag.propTypes = {
  tagname: propTypes.string,
  deleteTag: propTypes.func
};

export default BookmarkTag;
