'use strict';

// let grid = [[0,0],[0,1],[0,2],[0,3],
//             [1,0],[1,1],[1,2],[1,3],
//             [2,0],[2,1],[2,2],[2,3],
//             [3,0],[3,1],[3,2],[3,3],
// ];

// let grid = [
//   [0,   1,  2,  3],
//   [4,   5,  6,  7],
//   [8,   9, 10, 11],
//   [12, 13, 14, 15],
// ];

// listOfCoordValues: [[x,y],[x,y],[x,y],[x,y]];

// const tray = 'dibtloambcgrumps'.split('');
//
// let dogs = [
//   [0, 0],
//   [1, 1],
//   [2, 2],
//   [3, 3],
// ];

//for each grid coordinate we need to loop through the
// const boggle = function boggle(tray,listOfCoordValues) {
//   let cols = 4;
//   let rows = 4;
//   let word = '';
//   let x, y;
//
//   // [x, y] = listOfCoordValues[blah]
//   for (i = 0; i < rows; i++) {
//     for (j = 0; j< cols; j++) {
//       // [0, 0] => [0][0]
//         word += tray[grid[]];
//     }
//   }
//   return word;
// };

// Row # *4 + 2nd digit

const boggle = function boggle(tray, coordValues) {
  let word = '';
  for (let i = 0; i < 4; i++) {
    word += tray[(coordValues[i][1]) * 4 + coordValues[i][2]];
  }

  console.log(word);
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
