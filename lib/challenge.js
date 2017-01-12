'use strict';

/*
Map row/column coordinates onto an array index (i.e. represent a square grid using
a simple array). Use this mapping to return (potential) words from letters in the grid.

Boggle is a word game played with letter-dice arrange in a 4X4 tray.

A tray is just an array of length 16 with each element a single letter string.

A list of coordinate pairs is an array with length <= 4 and each element is an
array of length 2. The sub-arrays contain two integers >= 0 and <= 3.

Write a function - in lib/challenge.js - that takes a tray and a list of coordinate
pairs and returns a string representing the concatenation of the letters at each of the coordinates.

See bin/challenge.js for an example invocation. Run it with node bin/challenge.js.

You should run grunt nag before diagnosing any bugs, since it finds some of the
most common sources of errors. After grunt nag passes, you should run grunt test
to run the included tests. Tests will tell you whether of not you've met these requirements
*/

const boggle = function boggle() {
};
//mapping row/column coords into an array index.
let board = {
  top1: ['R','I','F','O','B','X'],
  top2: ['I','F','E','H','E','Y'],
  top3: ['D','E','N','O','W','S'],
  top4: ['U','T','O','K','N','D'],
  topMid1: ['H','M','S','R','A','O'],
  topMid2: ['L','U','P','E','T','S'],
  topMid3: ['A','C','I','T','O','A'],
  topMid4: ['Y','L','G','K','U','E'],
  lowMid1: ['Qu','B','M','J','O','A'],
  lowMid2: ['E','H','I','S','P','N'],
  lowMid3: ['V','E','T','I','G','N'],
  lowMid4: ['B','A','L','I','Y','T'],
  low1: ['','','','','',''],
  low2: ['','','','','',''],
  low3: ['','','','','',''],
  low4: ['','','','','','']
};
let shuffle = function(){
  //randomize board
}
if (shuffle = true){
  //return letters in random order
}



const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
