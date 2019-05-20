import React from "react";
import propTypes from "prop-types";

import "../css/Research.css";

function ResearchSuggestion({ term }) {
  return (
    <div className="term p-2">
      <span className=" term">{term}</span>
    </div>
  );
}

ResearchSuggestion.propTypes = {
  term: propTypes.string
};

export default ResearchSuggestion;
