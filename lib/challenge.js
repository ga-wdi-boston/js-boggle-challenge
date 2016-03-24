'use strict';

const boggle = function boggle(boggleTray, coords) {
  let tray = [];
  while (boggleTray.length > 0) {
    tray.push(boggleTray.splice(0, 4));
  }
  let word = '';
  for (let i = 0; i < coords.length; i++) {
    word += tray[coords[i][0]][coords[i][1]];
  }
  return word;
};

const bigBoggle = function bigBoggle(boggleTray, coords) {
  let tray = [];
  while (boggleTray.length > 0) {
    tray.push(boggleTray.splice(0, 5));
  }
  let word = '';
  for (let i = 0; i < coords.length; i++) {
    word += tray[coords[i][0]][coords[i][1]];
  }
  return word;
};

const superBigBoggle = function superBigBoggle(boggleTray, coords) {
  let tray = [];
  while (boggleTray.length > 0) {
    tray.push(boggleTray.splice(0, 6));
  }
  let word = '';
  for (let i = 0; i < coords.length; i++) {
    word += tray[coords[i][0]][coords[i][1]];
  }
  return word;
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
