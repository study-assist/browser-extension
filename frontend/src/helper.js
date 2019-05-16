function pickRandom(arr) {
  const i = Math.floor(Math.random() * Math.floor(arr.length));
  return arr[i];
}

export { pickRandom };
