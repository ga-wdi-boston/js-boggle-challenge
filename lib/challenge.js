'use strict';

const boggle = function boggle(tray, pairs) {
  let word = '';

  for (let i = 0; i < pairs.length; i++) {
    // convert the coordinates into an index for the tray array
    let index = ((pairs[i][0] * 4) + pairs[i][1]);
    word += tray[index];
  }

  return word;
};

const bigBoggle = function bigBoggle(tray, pairs) {
  let word = '';

  for (let i = 0; i < pairs.length; i++) {
    // convert the coordinates into an index for the tray array
    let index = ((pairs[i][0] * 5) + pairs[i][1]);
    word += tray[index];
  }

  return word;
};

const superBigBoggle = function superBigBoggle(tray, pairs) {
  let word = '';

  for (let i = 0; i < pairs.length; i++) {
    // convert the coordinates into an index for the tray array
    let index = ((pairs[i][0] * 6) + pairs[i][1]);
    word += tray[index];
  }

  return word;
};

const ultimateBoggle = function ultimateBoggle(tray, pairs) {
  let word = '';
  let size = Math.sqrt(tray.length);
  if(!Number.isInteger(size)) {
    console.log('invalid tray');
    return '';
  }

  if (pairs[0][0] !== pairs[1][0]) {
    if (pairs[0][0] !== pairs[0][1]) {
      console.log('coordinates must be in a line');
      return '';
    }
  }

  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i][0] > size - 1 || 
        pairs[i][1] > size - 1 ||
        pairs[i][0] < 0 ||
        pairs[i][1] < 0) {
      console.log('invalid coordinates');
      return '';
    }
    let index = ((pairs[i][0] * size) + pairs[i][1]);
    word += tray[index];
  }
  return word;
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
