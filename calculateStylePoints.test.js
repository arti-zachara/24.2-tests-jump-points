const assert = require("assert");
const calculateStylePoints = require("./calculateStylePoints");

describe("Style Points", () => {
  it("should allow all the notes to be the same", () => {
    const actual = calculateStylePoints([15, 15, 15, 15, 15]);

    const expected = 45;

    assert.strictEqual(actual, expected);
  });

  it("should allow some of the notes to be the same", () => {
    const actual = calculateStylePoints([15, 9, 8.5, 16, 15]);

    const expected = 39;

    assert.strictEqual(actual, expected);
  });

  it("should allow none of the notes to be the same", () => {
    const actual = calculateStylePoints([15.5, 9, 8.5, 16, 19]);

    const expected = 40.5;

    assert.strictEqual(actual, expected);
  });

  it("should allow notes to be sorted in increasing order", () => {
    const actual = calculateStylePoints([7, 8, 9.5, 14, 15]);

    const expected = 31.5;

    assert.strictEqual(actual, expected);
  });

  it("should allow notes to be sorted in decreasing order", () => {
    const actual = calculateStylePoints([17, 16, 15, 14, 10]);

    const expected = 45;

    assert.strictEqual(actual, expected);
  });
});
