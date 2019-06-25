"use strict";
const hills = require("./hills");

const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (!distance || !hillSize || !kPoint) {
    throw Error("There is at least one undefined argument");
  }
  let pointsDifferenceNormal = (distance - kPoint) * 2;
  let pointsDifferenceLarge = (distance - kPoint) * 1.8;
  let pointsDifferenceFlying = (distance - kPoint) * 1.2;

  switch (
    hillSize
      .toString()
      .trim()
      .toLowerCase()
  ) {
    case hills.normal:
      return 60 + pointsDifferenceNormal;

    case hills.large:
      return 60 + pointsDifferenceLarge;

    case hills.flying:
      return 120 + pointsDifferenceFlying;

    default:
      throw Error(`${hillSize} is not a correct hill size`);
  }
};

module.exports = calculateDistancePoints;
