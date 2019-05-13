var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

require("dotenv").config();
const express = require("express");

const WatsonAPI = require("./lib/WatsonAPI");
const watson = new WatsonAPI(process.env.API_KEY, process.env.API_URL);

const url = require("./analyse.json.js").links.guardian[0];

async function getAnalysis(url) {
  const result = await watson.analyse(url);
  console.log("result", result);
}

getAnalysis(url);

module.exports = app;
