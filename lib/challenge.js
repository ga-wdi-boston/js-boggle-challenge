'use strict';

const boggle = function boggle() {};
  let tray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P'];
  let rowA = tray(0,1,2,3);
  let rowB = tray(4,5,6,7);
  let rowC = tray(8,9,10,11);
  let rowD = tray(12,13,14,15);
  let columnA = tray(0,4,8,12);
  let columnB = tray(1,5,9,13);
  let columnC = tray(2,6,10,14);
  let columnD = tray(3,7,11,15);
const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
