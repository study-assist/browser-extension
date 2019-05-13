import React, { Component } from "react";
import propTypes from "prop-types";

import "../css/BookmarkTitle.css";

class BookmarkTitle extends Component {
  render() {
    const { title, setPageTitle } = this.props;

    return (
      <form className="bookmark-title" action="">
        <div className="form-group">
          <input
            className="bookmark-title-input form-control"
            type="text"
            defaultValue={title}
            onChange={e => setPageTitle(e.target.value)}
          />
        </div>
      </form>
    );
  }
}

BookmarkTitle.propTypes = {
  title: propTypes.string,
  setPageTitle: propTypes.func
};

export default BookmarkTitle;
