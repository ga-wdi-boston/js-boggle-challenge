'use strict';

const boggle = function boggle(tray, coords) {
  let result = '';
  for (let i = 0; i < coords.length; i++) {
    let row = coords[i][0];
    let col = coords[i][1];
    result += tray[row * 4 + col];
  }

  return result;
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
