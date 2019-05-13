import React, { Component } from "react";

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
              autoComplete="off"
              checked
            />{" "}
            DuckDuckGo
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
            />{" "}
            EcoAsia
          </label>
          <label className="btn btn-secondary">
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
