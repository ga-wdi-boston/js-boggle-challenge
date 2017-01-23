'use strict';

/*
   0 1 2 3
0: 0 1 2 3
1: 4 5 6 7
2: 8 9 10 11
3: 12 13 14 15
4:

*/

const anyBoggle = function(tray, pairs) {
  let result = '';
  for(let i = 0; i < pairs.length; i++) {
    result += tray[Math.sqrt(tray.length)  * pairs[i][0] + pairs[i][1]];
  }
  return result;
};

const boggle = function(tray, pairs) {
  let result = '';
  for(let i = 0; i < pairs.length; i++) {
    result += tray[(4 * pairs[i][0] + pairs[i][1])];
  }
  return result;
};

const bigBoggle = function bigBoggle(tray, pairs) {
  let result = '';
  for(let i = 0; i < pairs.length; i++) {
    result += tray[(5 * pairs[i][0] + pairs[i][1])];
  }
  return result;
};

const superBigBoggle = function superBigBoggle(tray, pairs) {
  let result = '';
  for(let i = 0; i < pairs.length; i++) {
    result += tray[(6 * pairs[i][0] + pairs[i][1])];
  }
  return result;
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
