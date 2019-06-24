"use strict";

const calculateStylePoints = styleNotes => {
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
