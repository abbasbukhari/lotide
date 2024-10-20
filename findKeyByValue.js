const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  const keys = Object.keys(obj); 
  for (const key of keys) {
    if (obj[key] === value) {
      return key; 
    }
  }
  return undefined; 
};

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
