'use strict';

const boggle = function boggle(tray, coords) {
  // setup array to hold word
  let wordArr = [];
  // setup array to hold one coordinate pair at a time
  let location = [];
  let multiple = Math.sqrt(tray.length);
  // for each coordinate pair, add it to location and find the trayIndex
  // trayIndex is equal to the 1st coordinate * the square root of the number
  // of letters passed in through tray, + the second coordinate
  for (let i = 0; i < coords.length; i++) {
    location = coords[i];
    let trayIndex = (location[0]*multiple)+location[1];
    wordArr.push(tray[trayIndex]);
  }
  return wordArr.join('');
};

const bigBoggle = function bigBoggle(tray, coords) {
  return boggle(tray, coords);
};

const superBigBoggle = function superBigBoggle(tray, coords) {
  return boggle(tray, coords);
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
