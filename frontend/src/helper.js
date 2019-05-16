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

// function filterDuplicate(arr) {
//   const entries = arr.map(item => item.text);
//   return entries.filter((item, i) => entries.indexOf(item) !== i)
// }

export {
  pickRandom,
  sortByRelevance,
  mapFeaturesNames,
  removeRedundantEntries
};
