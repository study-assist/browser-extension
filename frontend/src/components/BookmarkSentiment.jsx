import React, { Component } from "react";
import propTypes from "prop-types";
import { Radar, defaults } from "react-chartjs-2";
import { options } from "../data/chartOptions";

import BookmarkSentimentProgress from "./BookmarkSentimentProgress";
import { capitalise } from "../helper";

class BookmarkSentiment extends Component {
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
    const { emotion, sentiment, isVisible } = this.props;

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

    return (
      <section
        className="sentiment-section"
        style={isVisible ? { display: "block" } : { display: "none" }}
      >
        <div className="col">
          <Radar data={data} options={options} height={150} />
        </div>
        <div className="col mt-4">
          <div className="">
            <div className="progress" id="sentiment">
              <BookmarkSentimentProgress
                bar
                value={sentimentScore}
                color={`rgb(${rgb})`}
              />
            </div>
            <label
              className="sentiment-label mt-2"
              htmlFor="#sentiment"
            >{`${sentimentScore}% ${capitalise(sentiment.label)}`}</label>
          </div>
        </div>
        {/* <div className="col">
          <div className="row flex-wrap no-gutters">
            {scores.map((score, i) => (
              <div key={i} className="fake-coll mr-1" style={{ background: `hsl(${computeColor(score)})` }} />
            ))}
          </div>
        </div> */}
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
