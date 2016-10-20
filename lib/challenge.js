'use strict';

const boggle = function boggle(tray, coords) {
  // takes a tray and a list of coordinate pairs and returns a string representing the concatenation of the letters at each of the coordinates
  // take letters from tray and put it into 4x4 array
  let fullTray = [];
  while(tray.length) fullTray.push(tray.splice(0,4));

  // use coordinates to read letters in those locations
  
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
