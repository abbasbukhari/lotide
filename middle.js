const middle = function (array) {
  const length = array.length;

  if (length < 3) {
    return [];
  }

  if (length % 2 !== 0) {
    return [array[Math.floor(length / 2)]];
  }

  return [array[length / 2 - 1], array[length / 2]];
};

module.exports = middle;
