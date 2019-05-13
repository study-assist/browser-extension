/* eslint-disable no-undef */

export default class Watson {
  constructor(url, apiKey) {
    this.url = url;
    this.apikey = apiKey;
    this.proxy = "https://cors-anywhere.herokuapp.com/";
  }

  async analyse(params) {
    const url = `${this.proxy}${this.url}/v1/analyze?version=2018-11-16`;

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${this.apiKey}`
      },
      body: JSON.stringify(params)
    });
  }
}
