import React from "react";
import propTypes from "prop-types";

function ResearchSuggestion({ term }) {
  return (
    <div className="term btn btn-search-color mr-1 mb-1">
      <span className="term">{term}</span>
      <span className="pl-2">
        <img src="../icons/search.svg" alt="add" />
      </span>
    </div>
  );
}

ResearchSuggestion.propTypes = {
  term: propTypes.string
};

export default ResearchSuggestion;
