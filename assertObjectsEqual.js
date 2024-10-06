// Importing the util library to use the inspect function
const inspect = require("util").inspect;

// Function to check equality of two objects and log the appropriate message
const assertObjectsEqual = function (actual, expected) {
  const isEqual = eqObjects(actual, expected); // Use the eqObjects function for comparison

  if (isEqual) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

// Copy your eqObjects function here
const eqObjects = function (object1, object2) {
  // Check for key length equality
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  // Compare values for each key
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    const areBothArrays = Array.isArray(val1) && Array.isArray(val2);
    if (areBothArrays && !eqArrays(val1, val2)) return false;

    // If either value is an object, use eqObjects to compare
    if (typeof val1 === "object" && typeof val2 === "object") {
      if (!eqObjects(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

// Example usage
const obj1 = { a: "1", b: 2 };
const obj2 = { b: 2, a: "1" };
assertObjectsEqual(obj1, obj2); // Should pass

const obj3 = { a: "1", b: 2, c: 3 };
assertObjectsEqual(obj1, obj3); // Should fail
