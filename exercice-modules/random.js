/* exports.getRandom = */ function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// Exporter les 4 fonction en CommonJS
// (exports ou module.exports)
// module.exports = {
//   getRandom,
//   getRandomArbitrary,
//   getRandomInt,
//   getRandomIntInclusive,
// }

exports.getRandom = getRandom;
exports.getRandomArbitrary = getRandomArbitrary;
exports.getRandomInt = getRandomInt;
exports.getRandomIntInclusive = getRandomIntInclusive;
