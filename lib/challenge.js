'use strict';
/*
let tray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',];
let coor = [[0, 0],
            [1, 1],
            [2, 2],
            [3, 3]];
let cat =   [[2, 1],
            [1, 2],
            [0, 3]];
*/
const boggle = function boggle(tray, coor) {
  let string = '';
  let x = 0;
  let y = 0;
  let traySize = 4;
  for (let i = 0; i < coor.length; i++) {
    y = coor[i][0];
    x = coor[i][1];
    let index = x + (y * traySize);
    string = string + tray[index];
  }

  return string;
};

//let x = boggle(tray, coor);
//console.log(x);

const bigBoggle = function bigBoggle(tray, coor) {
  let string = '';
  let x = 0;
  let y = 0;
  let traySize = 5;
  for (let i = 0; i < coor.length; i++) {
    y = coor[i][0];
    x = coor[i][1];
    let index = x + (y * traySize);
    string = string + tray[index];
  }

  return string;
};

const superBigBoggle = function superBigBoggle(tray, coor) {
  let string = '';
  let x = 0;
  let y = 0;
  let traySize = 6;
  for (let i = 0; i < coor.length; i++) {
    y = coor[i][0];
    x = coor[i][1];
    let index = x + (y * traySize);
    string = string + tray[index];
  }

  return string;
};

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
