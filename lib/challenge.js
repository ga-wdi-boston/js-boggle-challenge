'use strict';

const boggle = function boggle(tray, coords) {
  return coords.reduce((prev, coord) => {
    let x = coord[0];
    let y = coord[1];
    let position = y * 4 + x;
    return prev += tray[position];

  }, "");
};

const bigBoggle = function bigBoggle() {
  return coords.reduce((prev, coord) => {
    let x = coord[0];
    let y = coord[1];
    let position = y * 5 + x;
    return prev += tray[position];

  }, "");
};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
