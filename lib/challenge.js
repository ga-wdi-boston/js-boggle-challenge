'use strict';

const boggle = function boggle(tray, coor) {
  let string = '';
  let currentCoor = [];
  for (let i = 0; i < coor.length; i++) {
    currentCoor = coor[i];
    let index = currentCoor[0] + (currentCoor[1] * 4);
    string = tray[index];
  }
  return string;
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};


/*
Map row/column coordinates onto an array index (i.e. represent a square grid
using a simple array). Use this mapping to return (potential) words from letters in the grid.

Boggle is a word game played with letter-dice arrange in a 4X4 tray.

A tray is just an array of length 16 with each element a single letter string.

A list of coordinate pairs is an array with length <= 4 and each element is an
array of length 2. The sub-arrays contain two integers >= 0 and <= 3.

Write a function - in lib/challenge.js - that takes a tray and a list of coordinate
pairs and returns a string representing the concatenation of the letters at each of the coordinates.

See bin/challenge.js for an example invocation. Run it with node bin/challenge.js.

You should run grunt nag before diagnosing any bugs, since it finds some of the
most common sources of errors. After grunt nag passes, you should run grunt test
to run the included tests. Tests will tell you whether of not you've met these requirements.
*/
