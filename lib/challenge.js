'use strict';

let tray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16};

const boggle = function boggle(tray, listCP) {
  for (let i = 0; i < tray.length; i++) {
    tray[i]+tray[i+2]+tray[i+3]+tray[i+4]
  }
};



const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
