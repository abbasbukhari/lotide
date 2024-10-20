const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("does not modify the original array", () => {
    const arr = [1, 2, 3];
    tail(arr);
    assert.deepEqual(arr, [1, 2, 3]); // The original array should remain unchanged
  });
});
