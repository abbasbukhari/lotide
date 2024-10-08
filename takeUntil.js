// eqArrays.js
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// assertArraysEqual.js
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// takeUntil.js
const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break; // Stop collecting if callback returns a truthy value
    }
    results.push(item); // Add item to results if callback is falsy
  }
  return results;
};

// Test cases for takeUntil
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1); // Expected Output: [ 1, 2, 5, 7, 2 ]
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2); // Expected Output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
