// assertEqual function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters function
const countLetters = function (sentence) {
  const results = {};

  // Loop through each character in the sentence
  for (const letter of sentence) {
    // Ignore spaces
    if (letter !== " ") {
      // Increment the count for each letter
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

// Test assertions
const result1 = countLetters("LHL");
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);
assertEqual(result1["A"], undefined);
