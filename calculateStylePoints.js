"use strict";

const calculateStylePoints = styleNotes => {
  // const cutMinMaxValues = function() {

  // };
  if (!Array.isArray(styleNotes)) {
    throw TypeError("styleNotes has to be an array");
  }
  if (styleNotes.length !== 5) {
    throw Error("5 style Notes are needed");
  }
  const stylePoints = styleNotes
    .sort((a, b) => {
      return a - b;
    })
    .slice(1, 4)
    .reduce((acc, cur) => {
      return acc + cur;
    });

  return stylePoints;
};

module.exports = calculateStylePoints;
