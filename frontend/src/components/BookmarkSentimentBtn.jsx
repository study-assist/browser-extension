import React, { Component } from "react";
import propTypes from "prop-types";

class BookmarkSentimentBtn extends Component {
  render() {
    const { isVisible, toggleSection } = this.props;

    return (
      <button
        className="more-details btn mt-1"
        type="button"
        onClick={() => toggleSection()}
      >
        {isVisible ? "Hide sentiment" : "Show sentiment"}
      </button>
    );
  }
}

BookmarkSentimentBtn.propTypes = {
  isVisible: propTypes.bool,
  toggleSection: propTypes.func
};

export default BookmarkSentimentBtn;
