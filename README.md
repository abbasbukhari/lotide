# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @abbasbukhari/lotide`

**Require it:**

`const _ = require('@abbasbukhari/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Returns the first element of the array.
- `tail(array)`: Returns a new array without the first element.
- `middle(array)`: Returns the middle element(s) of the array.
- `assertArraysEqual(array1, array2)`: Logs whether two arrays are equal.
- `eqArrays(array1, array2)`: Compares two arrays for equality.
- `assertEqual(actual, expected)`: Logs whether actual and expected values are equal.
- `countLetters(string)`: Counts the occurrences of each letter in a string.
- `countOnly(allItems, itemsToCount)`: Counts occurrences of specified items in an array.
- `flatten(array)`: Flattens a nested array into a single array.
- `letterPositions(sentence)`: Returns the positions of each letter in a string.
- `map(array, callback)`: Creates a new array with the results of calling a provided function on every element in the calling array.
- `takeUntil(array, callback)`: Creates a slice of an array until the callback returns a truthy value.
- `without(source, itemsToRemove)`: Returns a new array without the specified items.
