require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const apiRouter = require("./routes/api");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/", apiRouter);

module.exports = app;

// Only allow frontend
///////////////////////
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Allow-Control-Allow-Methods", "POST");
//   next();
// });
