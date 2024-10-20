const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false; 
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; 
    }
  }

  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function (array) {
  const length = array.length;

  if (length < 3) {
    return [];
  }

  if (length % 2 !== 0) {
    return [array[Math.floor(length / 2)]];
  }

  return [array[length / 2 - 1], array[length / 2]];
};

// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

const person = { firstName: "Abbas" };
const firstName = person["firstName"];

console.log(firstName);

const mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"] = 22;
mary; 

console.log(mary);
