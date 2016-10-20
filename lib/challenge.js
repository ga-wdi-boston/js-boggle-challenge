'use strict';

/*
A tray is just an array of length 16 with each element a single letter string.

A list of coordinate pairs is an array with length <= 4 and each element
is an array of length 2.
The sub-arrays contain two integers >= 0 and <= 3.

tray = "A", "B"

coordinatePairs = ""

0,0 0,1 0,2 0,3
1,0 1,2 1,2 1,3

*/

const gridMap = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
];

const boggle = function boggle(tray, coordinatePairs) {
  let boggleString = '';
  for (let i = 0; i < coordinatePairs.length; i++) {
    for (let j = 0; j < gridMap.length; j++) {
      console.log("CP " + coordinatePairs[i]);
      console.log("GM " + gridMap[i]);
      if (coordinatePairs[i].slice()) {
        boggleString = boggleString + tray[i];
      }
    }
  }

  return boggleString;
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
