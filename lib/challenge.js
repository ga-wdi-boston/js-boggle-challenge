'use strict';

//tray and coordinatePairs should both be arrays
const boggle = function boggle(tray, coordinatePairs) {
  let response = '';
  let grid = [];
  let temp1 = [];
  let temp2 = [];
  let temp3 = [];
  let temp4 = [];

  for (let i = 0; i < tray.length; i++) {
    if (i < 3) {
      temp1[i] = tray[i];
    } else if (i >= 3 && i < 7) {
      temp2[i-3] = tray[i];
    } else if (i >= 7 && i < 11) {
      temp3[i-7] = tray[i];
    } else {
      temp4[i-11] = tray[i];
    }

    grid = [temp1, temp2, temp3, temp4];
  }

  for (let i = 0; i < coordinatePairs.length; i++) {
    let coordinate = coordinatePairs[i];

    //this is not finding the right point in the grid
    response = response + grid[coordinate[0]][coordinate[1]];
  }

  return response;

};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
