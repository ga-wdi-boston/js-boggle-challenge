'use strict';
const boggleTray = 'wxxxxoxxxxrxxxxd'.split('');
const coordinatePairs = [[0, 0], [1, 1], [2, 2], [3, 3]];
//console.log(boggle(boggleTray, [[0, 0], [1, 1], [2, 2], [3, 3]]));
const boggle = function boggle() {
  let letters = boggleTray.split('');
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    letters[i] = letter.replace(coordinatePairs[i], letters);
  }
  return letters;
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
