import React from "react";
import propTypes from "prop-types";

import "../css/Research.css";

function ResearchSuggestion({ term }) {
  return (
    <div className="term btn btn-search-color mr-1 mb-1">
      <span className="term">{term}</span>
      <i className="fas fa-search pl-2" />
    </div>
  );
}

ResearchSuggestion.propTypes = {
  term: propTypes.string
};

export default ResearchSuggestion;
