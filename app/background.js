/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

// const browser = browser || chrome;

let url = null;

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  url = message;
  sendResponse({ response: "Response from background.js" });
});

browser.tabs
  .executeScript({ file: "/content-scripts/getActiveUrl.js" })
  .catch(reportExecuteScriptError);

function reportExecuteScriptError(error) {
  console.error(`Failed to execute content script: ${error.message}`);
}

// export { url };
