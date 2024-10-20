const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const starsData = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

// Test Case 1: Searching for a restaurant with 2 stars
const result1 = findKey(starsData, (x) => x.stars === 2);
console.log(result1); // Expected Output: "noma"
assertEqual(result1, "noma");

// Test Case 2: Searching for a restaurant with 3 stars
const result2 = findKey(starsData, (x) => x.stars === 3);
console.log(result2); // Expected Output: "Akaleri"
assertEqual(result2, "Akaleri");

// Test Case 3: Searching for a restaurant with 5 stars (which doesn't exist)
const result3 = findKey(starsData, (x) => x.stars === 5);
console.log(result3); // Expected Output: undefined
assertEqual(result3, undefined);

// Test Case 4: Searching for a restaurant with 1 star
const result4 = findKey(starsData, (x) => x.stars === 1);
console.log(result4); // Expected Output: "Blue Hill"
assertEqual(result4, "Blue Hill");
