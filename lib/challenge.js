'use strict';

const boggle = function boggle(tray, coordinatePairList) {
  // boggleTray = new Array(16);
  // coordinatePairList = new Array(4);
  let word;
for (let i=0; i<coordinatePairList.length; i++) {
  word += (tray[coordinatePairList[i][0]] + tray[coordinatePairList[i][1]]);
}
  return word;
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
