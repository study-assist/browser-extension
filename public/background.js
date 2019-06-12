/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

// const browser = browser || chrome;

const extUrl = browser.extension.getURL("");
console.log(extUrl);

let url = null;

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  url = message;
  sendResponse({ response: "Response from background.js" });
});

browser.tabs
  .executeScript({ file: "/lib/getActiveUrl.js" })
  .catch(reportExecuteScriptError);

function reportExecuteScriptError(error) {
  console.error(`Failed to execute content script: ${error.message}`);
}

export default url;
