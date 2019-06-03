import React, { Component } from "react";
import { ButtonGroup } from "reactstrap";

class ResearchEngine extends Component {
  render() {
    return (
      <div className="clearfix mb-3">
        <div className="d-inline-block align-middle w-auto h-auto">
          Pick your search engine:
        </div>
        <ButtonGroup
          className="btn-group-toggle form-check form-check-inline float-right"
          data-toggle="buttons"
        >
          <label className="active btn btn-engine-color ">
            <input
              type="radio"
              name="options"
              id="duckduckgo"
              autoComplete="off"
              className="engine"
            />{" "}
            DuckDuckGo
          </label>
          <label className="btn btn-engine-color  ">
            <input
              type="radio"
              name="options"
              id="ecoasia"
              autoComplete="off"
            />{" "}
            EcoAsia
          </label>
          <label className="btn btn-engine-color ">
            <input type="radio" name="options" id="google" autoComplete="off" />{" "}
            Google
          </label>
        </ButtonGroup>
      </div>
    );
  }
}

export default ResearchEngine;
