// Helper function to assert that two values are equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to find the first key in an object that has the given value
const findKeyByValue = function (obj, value) {
  const keys = Object.keys(obj); // Get all the keys of the object
  for (const key of keys) {
    // Use for...of to loop over the keys
    if (obj[key] === value) {
      return key; // Return the key if the value matches
    }
  }
  return undefined; // Return undefined if no match is found
};

// Test cases for the findKeyByValue function
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Expecting to pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Expecting to pass

// Additional test cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); // Expecting to pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // Expecting to pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), undefined); // Expecting to pass
