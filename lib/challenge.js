'use strict';

const boggle = function boggle(trayArray, coordinates) {
  let result = '';
  for (let i = 0; i < coordinates.length; i++) {
    let trayIndex = (coordinates[i][0] * 4) + (coordinates[i][1]);
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
