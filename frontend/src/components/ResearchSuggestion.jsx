import React from "react";
import propTypes from "prop-types";

function ResearchSuggestion({ term, url, setUrl }) {
  return (
    <a
      href={url}
      className="term btn btn-search-color mr-1 mb-1"
      onClick={e => {
        e.preventDefault();
        setUrl(term);
      }}
    >
      <span className="term">{term}</span>
      <i className="fas fa-search pl-2" />
    </a>
  );
}

ResearchSuggestion.propTypes = {
  term: propTypes.string,
  url: propTypes.string,
  setUrl: propTypes.func
};

export default ResearchSuggestion;
