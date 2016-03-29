'use strict';
// Test:
let coordinates = [[0, 1], [1, 3], [2, 0], [2, 3]];
let tray= ['d','i','b','t','l','o','a','m','b','c','g','r','u','m','p','s'];
//
// console.log(cord)
// console.log(cord[1])
// console.log(cord[1][0])
// console.log(cord[1][1])
//
// let index = cord[1][0] * 4 + cord[1][1];
//
// boggleTray[index];

const boggle = function boggle(tray, coordinates) {
  let result= '';
    for (let i = 0; i < coordinates.length; i++) {
      result += (tray[(coordinates[i][0] * 4 + coordinates[i][1])]);
      }
    return result;
};

const bigBoggle = function bigBoggle(tray, coordinates) {
  let result= '';
    for (let i = 0; i < coordinates.length; i++) {
    result += (tray[(coordinates[i][0] * 5 + coordinates[i][1])]);
    }
  return result;
};

const superBigBoggle = function superBigBoggle(tray, coordinates) {
  let result= '';
    for (let i = 0; i < coordinates.length; i++) {
    result += (tray[(coordinates[i][0] * 6 + coordinates[i][1])]);
    }
  return result;
};


module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
