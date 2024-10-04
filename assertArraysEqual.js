// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays function implementation
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

// New assertArraysEqual function implementation
const assertArraysEqual = function (array1, array2) {
  const result = eqArrays(array1, array2); // Use eqArrays to compare arrays
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// Test the assertArraysEqual function
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should fail
