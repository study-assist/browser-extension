/* eslint-disable no-undef */

const filledStarIcon = {
  48: "icons/logo-48.png",
  96: "icons/logo-96.png"
};

const emtyStarIcon = {
  48: "icons/logo-48.png",
  96: "icons/logo-96.png"
};

export default async function updateIcon(tabId, hasBookmark) {
  return Promise.all([
    browser.browserAction.setIcon({
      tabId,
      path: hasBookmark ? filledStarIcon : emtyStarIcon
    }),
    browser.browserAction.setTitle({
      tabId,
      title: hasBookmark ? "Unbookmark it!" : "Bookmark it!"
    })
  ]);
}
