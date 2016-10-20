'use strict';

const boggle = function boggle(tray, coords) {
  let newCoords = [];
  for (let i = 0; i < coords.length; i++) {
    newCoords[i] = 4 * coords[i][0] + coords[i][1];
  }

  let word = '';
  for (let i = 0; i < newCoords.length; i++) {
    word = word + tray[newCoords[i]];
  }

  return word;
};

const bigBoggle = function bigBoggle(tray, coords) {
  let newCoords = [];
  for (let i = 0; i < coords.length; i++) {
    newCoords[i] = 5 * coords[i][1] + coords[i][0];
  }

  let word = '';
  for (let i = 0; i < newCoords.length; i++) {
    word = word + tray[newCoords[i]];
  }

  return word;
};

const superBigBoggle = function superBigBoggle(tray, coords) {
  let newCoords = [];
  for (let i = 0; i < coords.length; i++) {
    newCoords[i] = 6 * coords[i][1] + coords[i][0];
  }

  let word = '';
  for (let i = 0; i < newCoords.length; i++) {
    word = word + tray[newCoords[i]];
  }
  return word;
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
