import React, { Component } from "react";
import propTypes from "prop-types";

import ResearchTitle from "./ResearchTitle";
import ResearchEngine from "./ResearchEngine";
import ResearchSuggestion from "./ResearchSuggestion";

class ResearchView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      researchEngine: ["duckduckgo", "google", "ecoasia"],
      suggestions: this.props.research,
      searchTerm: "random",
      url: ""
    };
  }

  setResearchEngine(name) {
    this.setState({ researchEngine: name });
  }

  setUrl(term) {
    const termArray = term.split(" ");
    const url = `https://${this.state.researchEngine[0]}/q=${
      this.state.searchTerm
    }`;

    this.setState({ url });
  }

  render() {
    const { suggestions, url } = this.state;
    return (
      <section className="research-main ">
        <ResearchTitle />
        <ResearchEngine setEngine={this.setResearchEngine} />
        <div className="d-flex justify-content-start flex-wrap">
          {suggestions.map((term, idx) => (
            <ResearchSuggestion
              term={term}
              setUrl={this.setUrl}
              url={url}
              key={`term-${idx + 1} `}
            />
          ))}
        </div>
      </section>
    );
  }
}

ResearchView.propTypes = {
  research: propTypes.array
};

export default ResearchView;
