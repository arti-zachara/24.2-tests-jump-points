const assert = require("assert");
const calculateDistancePoints = require("./calculateDistancePoints");
const hills = require("./hills");

describe("Distance Points", () => {
  // --------------------------------- normal -------------------------
  describe("Normal hill", () => {
    it("should allow distance strictEqual to kPoint", () => {
      const actual = calculateDistancePoints(98, hills.normal, 98);

      const expected = 60; //kPoint

      assert.strictEqual(actual, expected);
    });
    it("should allow distance smaller than kPoint", () => {
      const actual = calculateDistancePoints(88, hills.normal, 98);

      const expected = 40; //kubacki

      assert.strictEqual(actual, expected);
    });
    it("should allow distance greater than kPoint", () => {
      const actual = calculateDistancePoints(106.5, hills.normal, 98);

      const expected = 77; //stoch

      assert.strictEqual(actual, expected);
    });
  });

  // --------------------------------- large -------------------------
  describe("Large hill", () => {
    it("should allow distance strictEqual to kPoint", () => {
      const actual = calculateDistancePoints(120, hills.large, 120);

      const expected = 60; //kPoint

      assert.strictEqual(actual, expected);
    });
    it("should allow distance smaller than kPoint", () => {
      const actual = calculateDistancePoints(114.5, hills.large, 120);

      const expected = 50.1; //kot

      assert.strictEqual(actual, expected);
    });
    it("should allow distance greater than kPoint", () => {
      const actual = calculateDistancePoints(134, hills.large, 120);

      const expected = 85.2; //stoch

      assert.strictEqual(actual, expected);
    });
  });

  // --------------------------------- flying -------------------------
  describe("Flying hill", () => {
    it("should allow distance strictEqual to kPoint", () => {
      const actual = calculateDistancePoints(200, hills.flying, 200);

      const expected = 120; //kPoint

      assert.strictEqual(actual, expected);
    });
    it("should allow distance smaller than kPoint", () => {
      const actual = calculateDistancePoints(187, hills.flying, 200);

      const expected = 104.4; //zyla

      assert.strictEqual(actual, expected);
    });
    it("should allow distance greater than kPoint", () => {
      const actual = calculateDistancePoints(208.5, hills.flying, 200);

      const expected = 130.2; //stoch

      assert.strictEqual(actual, expected);
    });
  });

  describe("Hill's names", () => {
    it("should allow capital leters in a hill name", () => {
      const actual = calculateDistancePoints(208.5, "FlyinG", 200);

      const expected = 130.2; //stoch

      assert.strictEqual(actual, expected);
    });

    it("should allow spaces before and after a hill name", () => {
      const actual = calculateDistancePoints(134, " large ", 120);

      const expected = 85.2; //stoch

      assert.strictEqual(actual, expected);
    });
  });
});
