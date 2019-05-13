/* eslint-disable no-undef */

export default class Watson {
  constructor(apiKey, url) {
    this.url = url;
    this.apikey = apiKey;
    this.proxy = "https://cors-anywhere.herokuapp.com/";
  }

  async analyse(params) {
    const url = `${this.proxy}${this.url}/v1/analyze?version=2018-11-16`;

    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${this.apiKey}`
      },
      body: JSON.stringify(params)
    });
  }
}
