'use strict';

// Returns a 2-dimensional array filled with the passed string.
const makeTray = function makeTray(size,letters) {
  letters = letters || "";
  let tray = [];
  for (let i = 0; i < size; i++) {
    tray[i] = [];
    for (let j = 0; j < size; j++) {
      tray[i][j] = (letters[i*size + j]||'');
    }
  }
  return tray;
};

// General boggle function for a board of any size.
const genBog = function genBog(size,letters,coords) {
  let tray = makeTray(size,letters);
  let word = '';
  for (let i in coords) {
    word += tray[coords[i][0]][coords[i][1]];
  }
  return word;
};

const boggle = function boggle(tray,coords) {
  return genBog(4,tray,coords);
};

const bigBoggle = function bigBoggle(tray,coords) {
  return genBog(5,tray,coords);
};

const superBigBoggle = function superBigBoggle(tray,coords) {
  return genBog(6,tray,coords);
};


module.exports = {
  makeTray,
  boggle,
  bigBoggle,
  superBigBoggle,
};
