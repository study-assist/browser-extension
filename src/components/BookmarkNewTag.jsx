import React, { Component } from "react";
import propTypes from "prop-types";

import "../css/BookmarkTag.css";

class BookmarkNewTag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagname: null
    };

    this.inputNewTag = React.createRef();
  }

  updateTagname = name => {
    this.setState({ tagname: name });
  };

  expandTag = () => {
    this.inputNewTag.current.style.display = "inline";
    this.inputNewTag.current.focus();
  };

  render() {
    const { addTag } = this.props;

    return (
      <form
        className="tag new-tag badge badge-secondary"
        onSubmit={e => {
          e.preventDefault();
          addTag(this.state.tagname);
          e.target.reset();
        }}
      >
        <input
          className="input-new-tag"
          type="text"
          ref={this.inputNewTag}
          onChange={e => this.updateTagname(e.target.value)}
        />
        <button
          className="btn btn-new-tag"
          type="button"
          onClick={() => this.expandTag()}
        >
          <i className="fas fa-plus" />
        </button>
      </form>
    );
  }
}

BookmarkNewTag.propTypes = {
  addTag: propTypes.func
};

export default BookmarkNewTag;
