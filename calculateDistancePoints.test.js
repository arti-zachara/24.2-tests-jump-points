const assert = require("assert");
const calculateDistancePoints = require("./calculateDistancePoints");

describe("Distance Points", () => {
  // --------------------------------- normal -------------------------
  describe("Normal hill", () => {
    it("should allow distance equal to kPoint", () => {
      const actual = calculateDistancePoints(98, "normal", 98);

      const expected = 60; //kPoint

      assert.equal(actual, expected);
    });
    it("should allow distance smaller than kPoint", () => {
      const actual = calculateDistancePoints(88, "normal", 98);

      const expected = 40; //kubacki

      assert.equal(actual, expected);
    });
    it("should allow distance greater than kPoint", () => {
      const actual = calculateDistancePoints(106.5, "normal", 98);

      const expected = 77; //stoch

      assert.equal(actual, expected);
    });
  });

  // --------------------------------- large -------------------------
  describe("Large hill", () => {
    it("should allow distance equal to kPoint", () => {
      const actual = calculateDistancePoints(120, "large", 120);

      const expected = 60; //kPoint

      assert.equal(actual, expected);
    });
    it("should allow distance smaller than kPoint", () => {
      const actual = calculateDistancePoints(114.5, "large", 120);

      const expected = 50.1; //kot

      assert.equal(actual, expected);
    });
    it("should allow distance greater than kPoint", () => {
      const actual = calculateDistancePoints(134, "large", 120);

      const expected = 85.2; //stoch

      assert.equal(actual, expected);
    });
  });

  // --------------------------------- flying -------------------------
  describe("Flying hill", () => {
    it("should allow distance equal to kPoint", () => {
      const actual = calculateDistancePoints(200, "flying", 200);

      const expected = 120; //kPoint

      assert.equal(actual, expected);
    });
    it("should allow distance smaller than kPoint", () => {
      const actual = calculateDistancePoints(187, "flying", 200);

      const expected = 104.4; //zyla

      assert.equal(actual, expected);
    });
    it("should allow distance greater than kPoint", () => {
      const actual = calculateDistancePoints(208.5, "flying", 200);

      const expected = 130.2; //stoch

      assert.equal(actual, expected);
    });
  });
});
