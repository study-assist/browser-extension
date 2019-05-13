import React, { Component } from "react";
import propTypes from "prop-types";

import "../css/Research.css";

import ResearchTitle from "./ResearchTitle";
import ResearchEngine from "./ResearchEngine";

function Research() {
  return (
    <div>
      <ResearchTitle />
      <ResearchEngine />
    </div>
  );
}

export default Research;
