import React from "react";
import propTypes from "prop-types";
import { Progress } from "reactstrap";
import { Radar, defaults } from "react-chartjs-2";

import "../css/BookmarkSentiment.css";

function BookmarkSentiment({ emotion, sentiment }) {
  if (emotion === undefined || emotion === null) {
    return;
  }

  const labels = ["joy", "sadness", "fear", "anger", "disgust"];
  const ordered = {};
  labels.forEach(key => {
    ordered[key] = emotion[key];
  });

  defaults.global.defaultFontSize = 12;

  const options = {
    legend: {
      display: false,
      labels: {
        fontSize: 20
      }
    },
    title: {
      display: false,
      text: "Document Emotion Chart",
      // fonSize: 24,
      fontStyle: "bold"
    },
    elements: {
      line: {
        borderWidth: 3
      },
      point: {
        pointBorderWidth: 2,
        pointRadius: 4
      }
    },
    tooltips: {}
  };

  const data = {
    labels: Object.keys(ordered),
    datasets: [
      {
        label: "Document emotion",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: Object.values(ordered).map(value => Math.round(value * 100))
      }
    ]
  };

  return (
    <div className="container row sentiment">
      <div className="col mt-3">
        <div className="progress">
          <Progress
            bar
            value={Math.round(sentiment.score * 100)}
            color={sentiment.label == "positive" ? "success" : "danger"}
          />
        </div>
        <label>{sentiment.label}</label>
      </div>
      <div className="col">
        <Radar data={data} width={500} height={500} options={options} />
      </div>
    </div>
  );
}

BookmarkSentiment.propTypes = {
  emotion: propTypes.object,
  sentiment: propTypes.object
};

export default BookmarkSentiment;
