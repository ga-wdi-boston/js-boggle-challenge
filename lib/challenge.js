'use strict';
//
// let tray = 'dghsjadgjhsadsad';
//
// let coordinates = [[1,3],[2,0],[2,3],[0,0]];

const anyBoggle = function boggle(trayArray, coordinates) {
  let result = '';
  for (let i = 0; i < coordinates.length; i++) {
    let trayIndex = (coordinates[i][0] * Math.sqrt(trayArray.length)) + (coordinates[i][1]);
    result = result + trayArray[trayIndex];
  }
  console.log(result);
  return result;
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
