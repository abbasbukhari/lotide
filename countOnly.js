/// countOnly.js

// Assert function to check equality of values
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to count only specific items from the array
const countOnly = function (allItems, itemsToCount) {
  const results = {}; // Initialize an empty object to store counts

  // Loop through allItems to count occurrences
  for (const item of allItems) {
    // Only count if the item is specified in itemsToCount
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1; // Increment existing count
      } else {
        results[item] = 1; // Initialize count to 1
      }
    }
  }

  return results; // Return the count results
};

// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// Running assertions to verify the results
assertEqual(result1["Jason"], 1); // Should pass
assertEqual(result1["Karima"], undefined); // Should pass
assertEqual(result1["Fang"], 2); // Should pass
assertEqual(result1["Agouhanna"], undefined); // Should pass
