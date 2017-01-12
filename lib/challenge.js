'use strict';

const boggle = function boggle() {
  //A tray is just an array of length 16 with each element a single letter string.
  let tray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
  //A list of coordinate pairs is an array with length <= 4 and each element is an array of length 2.
  //The sub-arrays contain two integers >= 0 and <= 3.
  let coordinatePairs = [[1,2],[2,3],[3,1],[4,2]];
//Write a function that takes a tray and a list of coordinate pairs and returns
//a string representing the concatenation of the letters at each of the coordinates.
  const addTrays = function () {
    let result = tray + coordinatePairs;
    return result;
  }();
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
