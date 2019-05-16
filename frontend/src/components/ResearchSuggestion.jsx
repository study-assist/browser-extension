import React from "react";
import propTypes from "prop-types";

import "../css/Research.css";

function ResearchSuggestion({ term }) {
  return (
    <div className="term badge badge-pill ">
      <span className="mr-2">{term}</span>
    </div>
  );
}

ResearchSuggestion.propTypes = {
  term: propTypes.string
};

export default ResearchSuggestion;
