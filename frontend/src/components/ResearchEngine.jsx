import React, { Component } from "react";

import "../css/Research.css";

class ResearchEngine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          className="btn-group btn-group-toggle form-check form-check-inline"
          data-toggle="buttons"
        >
          <label className="   active engine btn btn-engine-color">
            <input
              type="radio"
              name="options"
              id="duckduckgo"
              autoComplete="off"
              // checked
              className="engine"
            />{" "}
            DuckDuckGo
          </label>
          <label className="engine btn btn-engine-color">
            <input
              type="radio"
              name="options"
              id="ecoasia"
              autoComplete="off"
            />{" "}
            EcoAsia
          </label>
          <label className="engine btn btn-engine-color">
            <input type="radio" name="options" id="google" autoComplete="off" />{" "}
            Google
          </label>
        </div>
      </>
    );
  }
}

export default ResearchEngine;
