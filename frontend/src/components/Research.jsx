import React from "react";
import propTypes from "prop-types";

import "../css/Research.css";

import ResearchTitle from "./ResearchTitle";
import ResearchEngine from "./ResearchEngine";
import ResearchSuggestion from "./ResearchSuggestion";

function Research({ research }) {
  return (
    <div>
      <ResearchTitle />
      <ResearchEngine />
      {research.map((e, idx) => (
        <ResearchSuggestion term={e} key={`term-${idx + 1}`} />
      ))}
    </div>
  );
}

Research.propsTypes = {
  research: propTypes.array
};

export default Research;
