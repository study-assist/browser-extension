import React, { Component } from "react";
import propTypes from "prop-types";
import { Radar, defaults } from "react-chartjs-2";
import { options } from "../data/chartOptions";

// import { Progress } from "reactstrap";
import BookmarkSentimentProgress from "./BookmarkSentimentProgress";

class BookmarkSentiment extends Component {
  computeColor = sentiment => {
    let color = null;

    if (sentiment.label == "positive") {
      // green: rgb(70, 235, 55)
      const minRed = 70;
      const maxRed = 255;
      const scale = maxRed - minRed;
      const percentScore = Math.round(Math.abs(sentiment.score) * 100);
      const perscaleRed = (percentScore * scale) / 100;
      color = `${Math.floor(maxRed - perscaleRed)}, 210, 56`;
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

    return (
      <section
        className="sentiment row"
        style={isVisible ? { display: "block" } : { display: "none" }}
      >
        <div className="col">
          <Radar data={data} options={options} height={150} />
        </div>
        <div className="col mt-4">
          <div className="container">
            <div className="progress">
              <BookmarkSentimentProgress
                bar
                value={Math.round(Math.abs(sentiment.score) * 100)}
                color={`rgb(${rgb})`}
              />
            </div>
            <label>{sentiment.label}</label>
          </div>
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
