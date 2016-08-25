'use strict';

// the function should take a tray and a list of pairs
// tray - an array of 16, with each element being a single character
// a list of pairs is an array <= 4

const boggle = function boggle(tray, pairs) {

  // variable to dump our letters into
  let res = [];

  // iterate through the list of pairs, breaking out into single pair combos
  for (let i = 0; i < pairs.length; i++) {

    // renaming current coordinations for readability
    let currentCoordinates = pairs[i];

    // multiply first index value by 4 (simulating 4x4 grid)
    // then add the second value, that will be our index
    // then find the value of that index from the tray string.
    let stringIndex = (currentCoordinates[0] * 4) + currentCoordinates[1];
    res.push(tray[stringIndex]);
  }

  // return a string
  return res.join('');
};

const bigBoggle = function bigBoggle(tray, pairs) {

  // variable to dump our letters into
  let res = [];

  // iterate through the list of pairs, breaking out into single pair combos
  for (let i = 0; i < pairs.length; i++) {

    // renaming current coordinations for readability
    let currentCoordinates = pairs[i];

    // multiply first index value by 4 (simulating 4x4 grid)
    // then add the second value, that will be our index
    // then find the value of that index from the tray string.
    let stringIndex = (currentCoordinates[0] * 5) + currentCoordinates[1];
    res.push(tray[stringIndex]);
  }

  // return a string
  return res.join('');
};

const superBigBoggle = function superBigBoggle(tray, pairs) {

  // variable to dump our letters into
  let res = [];

  // iterate through the list of pairs, breaking out into single pair combos
  for (let i = 0; i < pairs.length; i++) {

    // renaming current coordinations for readability
    let currentCoordinates = pairs[i];

    // multiply first index value by 4 (simulating 4x4 grid)
    // then add the second value, that will be our index
    // then find the value of that index from the tray string.
    let stringIndex = (currentCoordinates[0] * 6) + currentCoordinates[1];
    res.push(tray[stringIndex]);
  }

  // return a string
  return res.join('');
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
