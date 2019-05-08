import React, { Component } from "react";
import propTypes from "prop-types";

class BookmarkNewTag extends Component {
  state = {
    tagname: null
  };

  updateTagname = name => {
    this.setState({ tagname: name });
  };

  expandTag = () => {
    // eslint-disable-next-line no-console
    console.log("expanded");
  };

  render() {
    const { addTag } = this.props;

    return (
      <form
        className="tag"
        onSubmit={e => {
          e.preventDefault();
          addTag(this.state.tagname);
        }}
      >
        <button
          type="button"
          onClick={() => {
            this.expandTag();
          }}
        >
          &plus;
        </button>
        <input type="text" onChange={e => this.updateTagname(e.target.value)} />
      </form>
    );
  }
}

BookmarkNewTag.propTypes = {
  addTag: propTypes.func
};

export default BookmarkNewTag;
