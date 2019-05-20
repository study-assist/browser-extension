function pickRandom(arr) {
  const i = Math.floor(Math.random() * Math.floor(arr.length));
  return arr[i];
}

function sortByRelevance(arr) {
  return arr.sort((a, b) => {
    if (a.relevance < b.relevance) return -1;
    if (a.relevance > b.relevance) return 1;
    return 0;
  });
}

function mapFeaturesNames(arr) {
  return arr.map(item => {
    return item.text.trim().toLowerCase();
  });
}

function removeRedundantEntries(arr) {
  // arr = arr.map(item => item.text.trim().toLowerCase());
  for (let i in arr) {
    for (let j in arr) {
      if (i !== j) {
        // we remove redundant entries
        if (
          arr[i].text.trim().toLowerCase() === arr[j].text.trim().toLowerCase()
        ) {
          arr.splice(j, 1);
        }
      }
    }
  }
  return arr;
}

function removeEmpty(arr) {
  arr = arr.filter(item => item !== "");
  arr = arr.filter(item => item !== null);
  arr = arr.filter(item => item !== undefined);
  return arr;
}

function parseCategoryTree(label) {
  const tree = label.split("/");
  return removeEmpty(tree).reverse();
}

function mergeByIndex(arrs) {
  let merged = [];
  let loopLength = 0;

  for (let arr of arrs) {
    if (arr.length > loopLength) {
      loopLength = arr.length;
    }
  }

  // Basing loop length of longest array
  for (let n = 0; n < loopLength; n++) {
    for (let arr of arrs) {
      merged.push(arr[n]);
    }
  }

  return removeEmpty(merged);
}

function getFirstItems(arrs) {
  let filtered = [];
  for (let arr of arrs) {
    filtered.push(arr[0]);
  }
  return filtered;
}

export {
  pickRandom,
  sortByRelevance,
  mapFeaturesNames,
  removeRedundantEntries,
  removeEmpty,
  parseCategoryTree,
  mergeByIndex,
  getFirstItems
};
