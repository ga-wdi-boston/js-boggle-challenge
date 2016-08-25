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

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
