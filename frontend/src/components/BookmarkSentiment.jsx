import React from "react";
import propTypes from "prop-types";
import { Radar, defaults } from "react-chartjs-2";

/**
 * ToDo:
 * Order entires in desired order,
 * Setup scale from 0 to 100 always
 *
 */

function BookmarkSentiment({ emotion }) {
  if (emotion === undefined || emotion === null) {
    return;
  }

  const scale = Object.values(emotion).map(value => Math.round(value * 100));
  // console.log(scale);

  defaults.global.defaultFontSize = 12;

  const options = {
    legend: {
      display: false,
      labels: {
        // fontSize: 20
      }
    },
    title: {
      display: true,
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
    labels: Object.keys(emotion),
    datasets: [
      {
        label: "Document emotion",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: scale
      }
    ]
  };

  return (
    <div className="container">
      <p />
      <Radar data={data} width={500} height={500} options={options} />
    </div>
  );
}

BookmarkSentiment.propTypes = {
  emotion: propTypes.object
};

export default BookmarkSentiment;
