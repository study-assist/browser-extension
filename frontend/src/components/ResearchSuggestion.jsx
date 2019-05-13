import React, { Component } from "react";
import propTypes from "prop-types";

function ResearchSuggestion({ term }) {
  return <div>{term}</div>;
}

ResearchSuggestion.propTypes = {
  research: propTypes.string
};

export default ResearchSuggestion;
