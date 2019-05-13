import React, { Component, Fragment } from "react";
import propTypes from "prop-types";

class ResearchEngine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary active">
            <input
              type="radio"
              name="options"
              id="option1"
              autocomplete="off"
              checked
            />{" "}
            DuckDuckGo
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="options"
              id="option2"
              autocomplete="off"
            />{" "}
            EcoAsia
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="options"
              id="option3"
              autocomplete="off"
            />{" "}
            Google
          </label>
        </div>
      </>
    );
  }
}

ResearchEngine.propTypes = {};

export default ResearchEngine;
