import React, { Component } from "react";
import propTypes from "prop-types";

import "../css/BookmarkTitle.css";

class BookmarkTitle extends Component {
  render() {
    const { pageTitle, setPageTitle } = this.props;

    return (
      <form className="bookmark-title" action="">
        <div className="form-group">
          <textarea
            className="bookmark-title-input form-control"
            placeholder="Current page title"
            rows="1"
            onChange={e => setPageTitle(e.target.value)}
          >
            {pageTitle}
          </textarea>
        </div>
      </form>
    );
  }
}

BookmarkTitle.propTypes = {
  pageTitle: propTypes.string,
  setPageTitle: propTypes.func
};

export default BookmarkTitle;
