// Helper function to check if two arrays are equal
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

// Helper function to assert that two arrays are equal
const assertArraysEqual = function (actual, expected) {
  const result = eqArrays(actual, expected);
  if (result) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to count the positions of each letter in a given sentence
const letterPositions = function (sentence) {
  const results = {};
  // Iterate through the string
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      // Skip spaces
      // If the letter is not yet a key in results, initialize it with an empty array
      if (!results[letter]) {
        results[letter] = [];
      }
      // Push the index of the letter into the results array
      results[letter].push(i);
    }
  }
  return results; // Return the object with letter positions
};

// Test case for the letterPositions function
const testString = "hello";
const expectedPositions = { h: [0], e: [1], l: [2, 3], o: [4] };

const result = letterPositions(testString);
assertArraysEqual(result["h"], expectedPositions["h"]); // Expecting to pass
assertArraysEqual(result["e"], expectedPositions["e"]); // Expecting to pass
assertArraysEqual(result["l"], expectedPositions["l"]); // Expecting to pass
assertArraysEqual(result["o"], expectedPositions["o"]); // Expecting to pass
