const express = require("express");
const router = express.Router();

const WatsonAPI = require("../lib/WatsonAPI");
const watson = new WatsonAPI(process.env.API_KEY, process.env.API_URL);

router.post("/", async function(req, res) {
  console.log("request body", req.body);
  const result = await watson.analyse(req.body.url);

  res.json(result);
});

module.exports = router;
