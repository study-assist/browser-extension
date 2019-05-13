require("dotenv").config();
const express = require("express");

const WatsonAPI = require("./WatsonAPI");
const watson = new WatsonAPI(process.env.API_KEY, process.env.API_URL);

const url = require("./analyse.json").links.guardian[0];

async function getAnalysis(url) {
  const result = await watson.analyse(url);
  console.log("result", result);
}

getAnalysis(url);
