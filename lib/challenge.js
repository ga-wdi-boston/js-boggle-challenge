'use strict';

// converts each coordinate pair into the index number within the 4x4 grid
const conversion = function (coords) {
  let convertedArray = [];
// multiples first coordinate point by 4, then adds second coordinate point to convert
// this works mathematically because the grid is a square
  for (let i = 0; i < coords.length; i++) {
    convertedArray.push((4 * coords[i][0]) + coords[i][1]);
  }
  return convertedArray;
};

// this function takes in coordinate points and a tray and finds words given
const boggle = function (tray, coords) {
  let word = '';
  // creates indexed array of converted coordinate pairs
  let index = conversion(coords);

  for (let i = 0; i < coords.length; i++) {
      let letter = tray.slice(index[i], (index[i] + 1));
      word = word.concat(letter);
        }
  return word;
  };

// console.log("This is my boggle test: " + boggle(boggleTray, coordinatePairs));


module.exports = {
  boggle,
};
