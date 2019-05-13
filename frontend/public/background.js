/* eslint-disable no-undef */

chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.getCurrent(tab => {
    // eslint-disable-next-line no-console
    console.log(tab);
  });
});
