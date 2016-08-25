'use strict';

const boggle = function boggle(tray, coordPairs) {
  let board = [];
  for (let i = 0; i < tray.length; i++) {
    board[i] = [];
    for (let j = 0; j * j < tray.length; j++) {
      board[i][j] = tray[i * Math.sqrt(tray.length) + j];
    }
  }

  let word = '';
  for (let i = 0; i < coordPairs.length; i++) {
    word += board[coordPairs[i][0]][coordPairs[i][1]];
  }

  return word;
};

const bigBoggle = function bigBoggle(tray, coordPairs) {
  return boggle(tray, coordPairs);
};

const superBigBoggle = function superBigBoggle(tray, coordPairs) {
  return boggle(tray, coordPairs);
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
