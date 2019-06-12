/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

if (browser === "undefined") return;
// const browser = browser || chrome;

let url = null;

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const event = new Event("study_assist:new_url");
  event.currentUrl = message;
  document.dispatchEvent(event);

  sendResponse({ response: "Response from background.js" });
});

// const onGot = tabInfo => {
//   console.log(tabInfo);
// };

// const onError = error => {
//   console.log(`Error: ${error}`);
// };

// browser.tabs.getCurrent().then(onGot, onError);

browser.tabs
  .executeScript({ file: "/lib/getActiveUrl.js" })
  .catch(reportExecuteScriptError);

function reportExecuteScriptError(error) {
  console.error(`Failed to execute content script: ${error.message}`);
}

// export default url;
