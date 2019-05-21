"use strict";

require("dotenv").config();
const WatsonV1 = require("ibm-watson/natural-language-understanding/v1.js");

class WatsonAPI {
  constructor(apiKey, url) {
    this.watson = new WatsonV1({
      version: "2018-11-16",
      iam_apikey: apiKey,
      url: url
    });

    this.options = {
      features: {
        categories: {
          limit: 3
          // explanation: true
        },
        keywords: {
          // sentiment: true,
          limit: 6
        },
        concepts: {
          limit: 6
        },
        entities: {
          limit: 6
        },
        emotion: {
          document: true
        },
        sentiment: {
          document: true
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
