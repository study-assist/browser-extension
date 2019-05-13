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
    // this.naturalLanguageUnderstanding
    //   .analyze(params)
    //   .then(results => {
    //     console.log(JSON.stringify(results, null, 2));
    //   })
    //   .catch(err => console.log("error: ", err));
  }
}

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Basic YXBpa2V5OjdjMGE3UDFrb3VjX3hDRVNMSVFTdk1qdU0wOFRKT3lhbGh2NzJjcTNxSDFL"
//   },
//   body: JSON.stringify({
//     url:
//       "https://www.theguardian.com/politics/2019/mar/26/the-16m-new-york-penthouse-fit-for-a-uk-civil-servant",
//     features: {
//       categories: {
//         limit: 3
//       },
//       concepts: {
//         limit: 3
//       },
//       keywords: {
//         sentiment: true,
//         emotion: true,
//         limit: 3
//       }
//     }
//   })
// })
//   .then(res => res.json)
//   .then(res => console.log(res));
