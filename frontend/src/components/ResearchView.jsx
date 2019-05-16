import React from "react";
import propTypes from "prop-types";

import "../css/Research.css";

import ResearchTitle from "./ResearchTitle";
import ResearchEngine from "./ResearchEngine";
import ResearchSuggestion from "./ResearchSuggestion";

function ResearchView({ research }) {
  return (
    <section className="research-main">
      <ResearchTitle />
      <ResearchEngine />
      {research.map((e, idx) => (
        <ResearchSuggestion term={e} key={`term-${idx + 1}`} />
      ))}
    </section>
  );
}

ResearchView.propsTypes = {
  research: propTypes.array
};

export default ResearchView;
