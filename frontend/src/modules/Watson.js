// require("dotenv").config();

export default class Watson {
  constructor(url, apiKey) {
    this.url = url;
    this.proxy = "https://cors-anywhere.herokuapp.com/";
    this.apikey = apiKey;
  }

  async call(params) {
    return fetch(this.url, params);
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
    return params;
    // this.naturalLanguageUnderstanding
    //   .analyze(params)
    //   .then(results => {
    //     console.log(JSON.stringify(results, null, 2));
    //   })
    //   .catch(err => console.log("error: ", err));
  }
}
