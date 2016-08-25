'use strict';

// OKAY so I didn't get very far, but I'm mostly interested in whether or not
// I'm on the right track with my thinking here, if I could get feedback to that
// extent, that would be great :)
  // Thanks!!!


// the function should take a tray and a list of pairs
// tray - an array of 16, with each element being a single character
// a list of pairs is an array <= 4

const boggle = function boggle(tray, pairs) {
  // variable to dump our letters into
  let res = [];

  // iterate through the list of pairs, breaking out into
  // single pair combos
  for (let i = 0; i < pairs.length; i++) {
    // renaming current coordinations for readability
    let currentCoordinates = pairs[i];

    // multiply 4  by first index value
    // then add the second value
    // then that's what we're going to find
    let stringIndex = (currentCoordinates[0] * 4) + currentCoordinates[1];
    res.push(tray[stringIndex]);
  }

  // return a string
  return res.join("");
};

let tray = 'dibtloambcgrumps'.split('');

let dogs = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
];

console.log(boggle(tray, dogs));

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
