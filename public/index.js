function handleMessage(request, sender, sendResponse) {
  // document.getElementById("displayUrl").textContent = request.url;
  console.log(request);
  sendResponse({ response: "Response from the popup" });
}

browser.tabs.executeScript({ file: "/content_scripts/grabUrl.js" });

browser.runtime.onMessage.addListener(handleMessage);
