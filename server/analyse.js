const WatsonAPI = require("./WatsonAPI");
const url = require("./analyse.json.js").links.guardian[0];
const watson = new WatsonAPI();

watson.analyse(url);
