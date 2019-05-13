import React from "react";
import propTypes from "prop-types";

import "../css/Research.css";

function ResearchSuggestion({ term }) {
  return (
    <div className="term badge">
      <span className="mr-1">{term}</span>
    </div>
  );
}

ResearchSuggestion.propTypes = {
  term: propTypes.string
};

export default ResearchSuggestion;
