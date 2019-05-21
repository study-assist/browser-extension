import React, { Component } from "react";
import propTypes from "prop-types";

import "../css/BookmarkHead.css";

class BookmarkHead extends Component {
  render() {
    const {
      pageTitle,
      pageDate,
      pageAuthors,
      // pageImg,
      setPageTitle
    } = this.props;

    return (
      <form className="bookmark-title mb-3" action="">
        <div className="form-group mb-0">
          <textarea
            className="bookmark-title-input form-control"
            placeholder="Type bookmark name..."
            rows="1"
            required
            onChange={e => setPageTitle(e.target.value)}
            value={pageTitle}
          />
        </div>
        <small className="meta">
          {pageDate ? (
            <span className="meta-date">{pageDate}&nbsp;</span>
          ) : (
            <span />
          )}
          {pageAuthors ? (
            <span className="meta-authors">
              by&nbsp;
              {pageAuthors.map((author, i) => (
                <span key={i}>{author.name}&nbsp;</span>
              ))}
            </span>
          ) : (
            <span />
          )}
        </small>
      </form>
    );
  }
}

BookmarkHead.propTypes = {
  pageTitle: propTypes.string,
  pageDate: propTypes.string,
  pageAuthors: propTypes.object,
  pageImg: propTypes.string,
  setPageTitle: propTypes.func
};

export default BookmarkHead;
