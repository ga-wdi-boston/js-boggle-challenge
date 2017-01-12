'use strict';

const toSplice = function(tray) {
// take letters from tray and put it into 4x4 array
// while tray still has elements, splice 4 of them out and push it to fullTray
  let fullTray = [];
  while(tray.length) {
    fullTray.push(tray.splice(0,4));
  }
  return fullTray;
};

const boggle = function boggle(tray, coords) {
  // takes a tray and a list of coordinate pairs and returns a string representing the concatenation of the letters at each of the coordinates
  let newTray = tray;
  let fullTray = toSplice(newTray);
  // use coordinates to read letters in those locations and put them into a new array
  let wordArr = [];
  let location = [];
  for (let i = 0; i < coords.length; i++) {
    location = coords[i];
    wordArr.push(fullTray[location[0]][location[1]]);
  }
  return wordArr.join('');
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
