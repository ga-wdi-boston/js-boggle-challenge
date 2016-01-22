'use strict';

const boggleVariants = require('../lib/boggle.js');
const boggle = boggleVariants.boggle;
const bigBoggle = boggleVariants.bigBoggle;
const superBigBoggle = boggleVariants.superBigBoggle;

const boggleTray = 'wxxxxoxxxxrxxxxd'.split('');

console.log(boggle(boggleTray, [[0, 0], [1, 1], [2, 2], [3, 3]]));

let lettersAtCoordinates = function lettersAtCoordinates(tray, listOfPairs) {
  let boggleBoard = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];

  let counter = 0;

  for (var x = 0; x < 4; x++) {
    for (y = 0; y < 4; y++) {
      boggleBoard[x][y] = tray[counter];
      counter++;
    }
  }

  let wordFormed = '';

  for (i = 0; i < 4; i++) {
    wordFormed += boggleBoard[listOfPairs[i][0]][listOfPairs[i][1]];
  }

  return wordFormed;
};

let bigBoggle = function bigBoggle(tray, listOfPairs) {
  let boggleBoard = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ];

  let counter = 0;

  for (var x = 0; x < 5; x++) {
    for (y = 0; y < 5; y++) {
      boggleBoard[x][y] = tray[counter];
      counter++;
    }
  }

  let wordFormed = '';

  for (i = 0; i < 5; i++) {
    wordFormed += boggleBoard[listOfPairs[i][0]][listOfPairs[i][1]];
  }

  return wordFormed;
};

let superBigBoggle = function superBigBoggle(tray, listOfPairs) {
  let boggleBoard = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];

  let counter = 0;

  for (var x = 0; x < 6; x++) {
    for (y = 0; y < 6; y++) {
      boggleBoard[x][y] = tray[counter];
      counter++;
    }
  }

  let wordFormed = '';

  for (i = 0; i < 6; i++) {
    wordFormed += boggleBoard[listOfPairs[i][0]][listOfPairs[i][1]];
  }

  return wordFormed;
};
