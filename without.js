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

// without function implementation
const without = function (source, itemsToRemove) {
  return source.filter((item) => !itemsToRemove.includes(item));
};

// Test cases for without function
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Should pass

// Test case to ensure the original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // Call without function
// Ensure original array was not altered
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Should pass
