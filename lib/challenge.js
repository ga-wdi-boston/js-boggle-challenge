'use strict';

const boggle = function boggle(tray, coords) {
  // takes a tray and a list of coordinate pairs and returns a string representing the concatenation of the letters at each of the coordinates
  // take letters from tray and put it into 4x4 array
  let fullTray = [];
  // while tray still has elements, splice 4 of them out and push it to fullTray
  while(tray.length) {
  	//fullTray.push(tray.splice(0,coords.length));
    fullTray.push(tray.splice(0,4));
  }
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
