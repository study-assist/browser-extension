"use strict";

require("dotenv").config();
const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1.js");

class WatsonAPI {
  constructor(apiKey, url) {
    this.watson = new NaturalLanguageUnderstandingV1({
      version: "2018-11-16",
      iam_apikey: apiKey,
      url: url
    });

    this.options = {
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
  }

  async analyse(url) {
    const params = { url, ...this.options };

    try {
      const results = await this.watson.analyze(params);
      return results;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = WatsonAPI;
