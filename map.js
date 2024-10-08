// eqArrays function to check if two arrays are equal
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual function to compare arrays and log result
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// map function that maps an array based on the callback
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test cases for map function
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["apple", 42, true, null];

// Test: Extract the first letter of each word
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// Test: Multiply each number by 2
const results2 = map(numbers, (num) => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10]);

// Test: Convert each item to a string
const results3 = map(mixed, (item) => String(item));
assertArraysEqual(results3, ["apple", "42", "true", "null"]);
