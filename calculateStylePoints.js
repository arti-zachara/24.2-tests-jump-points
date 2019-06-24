const calculateStylePoints = styleNotes => {
  const stylePoints = styleNotes;

  stylePoints.sort((a, b) => {
    return a - b;
  });
  stylePoints.slice(1, 4);
  stylePoints.reduce((acc, cur) => {
    return acc + cur;
  });

  return stylePoints;
};

module.exports = calculateStylePoints;
