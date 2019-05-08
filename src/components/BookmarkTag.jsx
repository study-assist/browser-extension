import React from "react";
import propTypes from "prop-types";

function BookmarkTag({ tagname }) {
  return <div className="tag btn btn-secondary">{tagname}</div>;
}

BookmarkTag.propTypes = {
  tagname: propTypes.string
};

export default BookmarkTag;
