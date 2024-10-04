// TEST/ASSERTION FUNCTIONS
const eqArrays = function (array1, array2) {
  // Check if both arrays are of the same length
  if (array1.length !== array2.length) {
    return false; // Arrays are not equal if their lengths differ
  }

  // Check each element in the arrays
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; // Return false if any elements are not equal
    }
  }

  return true; // Return true if all elements match
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function (array) {
  const length = array.length;

  // For arrays with one or two elements, return an empty array
  if (length < 3) {
    return [];
  }

  // If the array length is odd, return the middle element
  if (length % 2 !== 0) {
    return [array[Math.floor(length / 2)]];
  }

  // If the array length is even, return the two middle elements
  return [array[length / 2 - 1], array[length / 2]];
};

// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
