'use strict';

/*
   0 1 2 3 4
0: 0 1 2 3 4
1: 5 6 7 8 9
2: 10 11 12 13 14
3: 15 16 17 18 19
4: 20 21 22 23 24

*/

const anyBoggle = function(tray, pairs) {
  let result = '';
  for(let i = 0; i < pairs.length; i++) {
    result += tray[pairs.length * pairs[i][0] + pairs[i][1]];
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
