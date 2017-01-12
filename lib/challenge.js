'use strict';

const arrayColumn = (arr, n) => arr.map(x => x[n]);

const twoDimensionalArray = [
  [1, 2, 3, 13],
  [4, 5, 6, 14],
  [7, 8, 9, 15],
  [10, 11, 12, 16],
];

console.log(arrayColumn(twoDimensionalArray, 0));

const boggle = function boggle() {};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};

// used these websites
// http://stackoverflow.com/questions/7848004/get-column-from-a-two-dimensional-array-in-javascript
// http://stackoverflow.com/questions/14015556/how-to-map-the-indexes-of-a-matrix-to-a-1-dimensional-array-c
