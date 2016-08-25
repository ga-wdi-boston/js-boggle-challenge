'use strict';

const boggle = function boggle(tray, coordArray) {
  // tray is an array of single-character strings

  // coordArray is an array of subarrays. each subarray is an array of two
  // integers from 0-3

  // create the string variable we will build on and eventually return
  let word = '';

  // traverse the coordArray, finding each letter in the tray and adding it
  // the string 'word'.
  for (let i = 0; i < coordArray.length; i++) {
    let letterIndex = (coordArray[i][0]) * 4 + coordArray[i][1];
    let letter = tray[letterIndex];
    word += letter;
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
