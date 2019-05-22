import React from "react";
import propTypes from "prop-types";

import "../css/Research.css";

import ResearchTitle from "./ResearchTitle";
import ResearchEngine from "./ResearchEngine";
import ResearchSuggestion from "./ResearchSuggestion";

function ResearchView({ research }) {
  return (
    <section className="research-main ">
      <ResearchTitle />
      <ResearchEngine />
      <div className="d-flex justify-content-around flex-wrap">
        {research.map((e, idx) => (
          <ResearchSuggestion term={e} key={`term-${idx + 1} `} />
        ))}
      </div>
    </section>
  );
}

ResearchView.propTypes = {
  research: propTypes.array
};

export default ResearchView;
