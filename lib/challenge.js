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

  let board = [];

  // take list of tray letters and move them into a 4x4 grid
  for (let i = 0; i < tray.length; i++) {
    let row = [];

    // while the current row's length is less than 4, push a letters
    // when it hits 4, push that row to the board,
    // then move to the next 4 characters

    if (row.length < 4) {
      row.push(tray[i]);
    } else {
      board.push(row);
    }

  console.log(board);

  // // iterate through the list of pairs, breaking out into
  // // single pair combos
  // for (let i = 0; i < pairs.length; i++) {
  //   // renaming current coordinations for readability
  //   let coords = pairs[i];
  //
  //   res.push(tray[coords[0]]);
  //   res.push(tray[coords[1]]);
  // }
  // res.join("");
  // return res;
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
