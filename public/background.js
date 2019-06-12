/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

let url = null;

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // assigning retrieved tab url to new event property, dispatched in global scope (hack)
  const event = new Event("currentUrl");
  event.currentUrl = message;
  document.dispatchEvent(event);

  sendResponse({ response: "Response from background.js" });
});

browser.tabs.executeScript({ file: "/lib/getActiveUrl.js" }).catch(reportExecuteScriptError);

function reportExecuteScriptError(error) {
  console.error(`Failed to execute content script: ${error.message}`);
}
