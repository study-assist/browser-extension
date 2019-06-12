import React, { Component } from "react";
import propTypes from "prop-types";
import { Radar, defaults } from "react-chartjs-2";
import { options } from "../data/chartOptions";

import BookmarkSentimentProgress from "./BookmarkSentimentProgress";
import { capitalise } from "../helper";

class BookmarkSentiment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState(state => ({
      dropdownOpen: !state.dropdownOpen
    }));
  };

  computeColor = sentiment => {
    let color = null;

    if (sentiment.label === "positive") {
      // template for green to yellow
      const minRed = 70;
      const maxRed = 255;
      const scale = maxRed - minRed;
      const percentScore = Math.round(Math.abs(sentiment.score) * 100);
      const perscaleRed = (percentScore * scale) / 100;
      color = `${Math.floor(maxRed - perscaleRed)}, 220, 6`;
    } else {
      // template for red to yellow
      const minGreen = 63;
      const maxGreen = 216;
      const scale = maxGreen - minGreen;
      const percentScore = Math.round(Math.abs(sentiment.score) * 100);
      const perscaleGreen = (percentScore * scale) / 100;
      color = `255, ${Math.floor(maxGreen - perscaleGreen)}, 69`;
    }

    return color;
  };

  render() {
    const { emotion, sentiment } = this.props;

    if (emotion === undefined || emotion === null) return;

    const labels = ["joy", "sadness", "fear", "disgust", "anger"];
    const ordered = {};
    labels.forEach(key => {
      ordered[key] = emotion[key];
    });

    const rgb = this.computeColor(sentiment);

    const data = {
      labels: Object.keys(ordered),
      datasets: [
        {
          label: "Score",
          backgroundColor: `rgba(${rgb},0.4)`,
          borderColor: `rgba(${rgb},0.75)`,
          pointBackgroundColor: `rgba(${rgb},0.75)`,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: `rgba(${rgb},0.75)`,
          data: Object.values(ordered).map(value => Math.round(value * 100))
        }
      ]
    };

    defaults.global.defaultFontSize = 12;

    const sentimentScore = Math.round(Math.abs(sentiment.score) * 100);
    const sentimentLabel = `${sentimentScore}% ${capitalise(sentiment.label)}`;

    return (
      <section className="sentiment-section mt-2">
        <button className="btn progress" id="sentiment" onClick={this.toggle}>
          <BookmarkSentimentProgress bar value={sentimentScore} color={`rgb(${rgb})`} />
        </button>
        <label className="sentiment-label mt-1" htmlFor="#sentiment">
          {sentimentLabel}
        </label>
        <div className="radar p-3" style={this.state.dropdownOpen ? { display: "block" } : { display: "none" }}>
          <Radar data={data} options={options} height={150} />
        </div>
      </section>
    );
  }
}

BookmarkSentiment.propTypes = {
  emotion: propTypes.object,
  sentiment: propTypes.object,
  isVisible: propTypes.bool
};

export default BookmarkSentiment;

// Test catagories color variations:
///////////////////////////////////////////

// const scores = ["0.84", "0.84", "0.76", "0.76", "0.76", "0.74", "0.54", "0.54"];
// const computeColor = score => {
//   let color = null;
//   const minLight = 42;
//   const maxLight = 80;
//   const scale = maxLight - minLight;
//   const percentScore = Math.round(Math.abs(score) * 100);
//   const perscaleLight = (percentScore * scale) / 100;
//   color = `212, 80%, ${Math.floor(maxLight - perscaleLight)}%`;
//   return color;
// };

// // in section:
// <div className="col">
//   <div className="row flex-wrap no-gutters">
//     {scores.map((score, i) => (
//       <div key={i} className="fake-coll mr-1" style={{ background: `hsl(${computeColor(score)})` }} />
//     ))}
//   </div>
// </div>
