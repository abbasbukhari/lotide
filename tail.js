// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Tail Function Implementation

const tail = function (array) {
  // Return a new array excluding the first element
  return array.slice(1);
};

// Test Code
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());
