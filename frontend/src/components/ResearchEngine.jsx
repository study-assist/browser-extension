import React, { Component } from "react";

import "../css/Research.css";

class ResearchEngine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className=" btn  active engine">
            <input
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              // checked
              className="engine"
            />{" "}
            DuckDuckGo
          </label>
          <label className="engine btn ">
            <input
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
            />{" "}
            EcoAsia
          </label>
          <label className="engine btn ">
            <input
              type="radio"
              name="options"
              id="option3"
              autoComplete="off"
            />{" "}
            Google
          </label>
        </div>
      </>
    );
  }
}

export default ResearchEngine;
