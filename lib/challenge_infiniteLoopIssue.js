'use strict';

const boggle = function boggle(tray, coords) {
  // takes a tray and a list of coordinate pairs and returns a string representing the concatenation of the letters at each of the coordinates
  // take letters from tray and put it into 4x4 array
  let fullTray = [];
  for(let i=0, k=0; i < tray.length; i+4) {
    //fullTray[k] = tray.slice(i, i+4);
    //k++;
    //console.log(fullTray);
    console.log(i);
    console.log(k);
  }
  // use coordinates to read letters in those locations and put them into a new array
  let wordArr = [];
  let location = [];
  for (let i = 0; i < coords.length; i++) {
    location = coords[i];
    //console.log(location);
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
