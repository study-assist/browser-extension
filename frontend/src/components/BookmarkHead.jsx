import React, { Component } from "react";
import propTypes from "prop-types";

import * as moment from "moment";
import { autoExpand } from "../helper";

class BookmarkHead extends Component {
  constructor(props) {
    super(props);

    this.titleInput = React.createRef();
  }

  componentDidMount = () => {
    autoExpand(this.titleInput.current);
  };

  componentDidUpdate = () => {
    autoExpand(this.titleInput.current);
  };

  render() {
    const {
      pageTitle,
      pageDate,
      pageAuthors,
      // pageImg,
      setPageTitle
    } = this.props;

    return (
      <form className="bookmark-head mb-2" action="">
        <div className="form-group mb-0">
          <textarea
            className="bookmark-head-input form-control"
            placeholder="Type bookmark name..."
            rows="1"
            required
            onChange={e => setPageTitle(e.target.value)}
            value={pageTitle}
            ref={this.titleInput}
          />
        </div>
        <small className="meta">
          {pageDate ? <span className="meta-date">{moment(pageDate).format("DD MMMM YYYY")}&nbsp;</span> : <span />}
          {pageAuthors.length >= 1 ? (
            <span className="meta-authors">
              &middot;&nbsp;
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
  pageAuthors: propTypes.array,
  pageImg: propTypes.string,
  setPageTitle: propTypes.func
};

export default BookmarkHead;
