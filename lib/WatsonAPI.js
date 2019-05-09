/* eslint-disable no-undef */
// "use strict";

require("dotenv").config();
const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1.js");

class WatsonAPI {
  constructor() {
    this.naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
      version: "2018-11-16",
      iam_apikey: process.env.API_KEY,
      url: process.env.API_URL
    });
  }

  analyse(url) {
    const params = {
      url: url,
      // return_analyzed_text: true,
      features: {
        categories: {
          limit: 3
        },
        concepts: {
          limit: 3
        },
        keywords: {
          sentiment: true,
          emotion: true,
          limit: 3
        }
      }
    };
    this.naturalLanguageUnderstanding
      .analyze(params)
      .then(results => {
        console.log(JSON.stringify(results, null, 2));
      })
      .catch(err => console.log("error: ", err));
  }
}

module.exports = WatsonAPI;
