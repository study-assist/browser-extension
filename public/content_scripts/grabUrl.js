/* eslint-disable no-console */
/* eslint-disable no-undef */
function handleResponse(message) {
  console.log(`Message from Popup: ${message.response}`);
}

function handleError(error) {
  console.log({ error });
}

function sendUrl(e) {
  const sending = browser.runtime.sendMessage(window.location.href);
  sending.then(handleResponse, handleError);
}

sendUrl();
