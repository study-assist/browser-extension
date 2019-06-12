/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

function handleResponse(message) {
  console.log(`Message from getActiveUrl: ${message.response}`);
}

function handleError(error) {
  console.error({ error });
}

function sendUrl() {
  const sending = browser.runtime.sendMessage(window.location.href);
  sending.then(handleResponse, handleError);
}

sendUrl();
