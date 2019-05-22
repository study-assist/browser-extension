import React, { Component } from "react";
import { ButtonGroup } from "reactstrap";

import "../css/Research.css";

class ResearchEngine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="d-inline-block">Pick your search engine:</div>
        <ButtonGroup
          className="btn-group-toggle form-check form-check-inline"
          data-toggle="buttons"
        >
          <label className="active btn btn-engine-color rounded-pill mr-1">
            <input
              type="radio"
              name="options"
              id="duckduckgo"
              autoComplete="off"
              className="engine"
            />{" "}
            DuckDuckGo
            <i className="fas fa-search pl-1" />
          </label>
          <label className="btn btn-engine-color rounded-pill mr-1">
            <input
              type="radio"
              name="options"
              id="ecoasia"
              autoComplete="off"
            />{" "}
            EcoAsia
            <i className="fas fa-search pl-1" />
          </label>
          <label className="btn btn-engine-color rounded-pill mr-1">
            <input type="radio" name="options" id="google" autoComplete="off" />{" "}
            Google
            <i className="fas fa-search pl-1" />
          </label>
        </ButtonGroup>
      </>
    );
  }
}

export default ResearchEngine;
