import React, { Component } from "react";
import propTypes from "prop-types";

class BookmarkViewBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isVisible, toggleSection } = this.props;

    return (
      <button
        className="more-details"
        type="button"
        onClick={() => toggleSection()}
      >
        {isVisible ? "Hide details" : "Show details..."}
      </button>
    );
  }
}

BookmarkViewBtn.propTypes = {
  isVisible: propTypes.bool,
  toggleSection: propTypes.func
};

export default BookmarkViewBtn;
