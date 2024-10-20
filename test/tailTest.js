const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST CODE
const result = tail([1, 2, 3, 4]);
assertEqual(result.length, 3); // Expect 3 elements after removing the first one
assertEqual(result[0], 2); // First element of tail should be 2
assertEqual(result[1], 3); // Second element should be 3
assertEqual(result[2], 4); // Third element should be 4

const emptyResult = tail([]); 
assertEqual(emptyResult.length, 0); 
