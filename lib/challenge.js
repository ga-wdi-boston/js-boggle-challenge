'use strict';

const boggle = function boggle(boggleTray, coordinates) {
  let result = [];
  let board = [];
  let boardWidth = Math.sqrt(boggleTray.length);

  //populate boggle board into arrays corresponding to the number of rows needed
  let n = 0;
  for (let i = 0; i < boggleTray.length; i+=boardWidth) {
    board[n] = boggleTray.slice(i,i+boardWidth);
    n++;
  }

  for (let i = 0; i < coordinates.length; i++) {
    result[i] = board[coordinates[i][0]][coordinates[i][1]]
  }

  return result.join("");
};

const bigBoggle = function bigBoggle(boggleTray, coordinates) {
  let result = [];
  let board = [];
  let boardWidth = Math.sqrt(boggleTray.length);

  //populate boggle board into arrays corresponding to the number of rows needed
  let n = 0;
  for (let i = 0; i < boggleTray.length; i+=boardWidth) {
    board[n] = boggleTray.slice(i,i+boardWidth);
    n++;
  }

  for (let i = 0; i < coordinates.length; i++) {
    result[i] = board[coordinates[i][0]][coordinates[i][1]]
  }

  return result.join("");
};

const superBigBoggle = function superBigBoggle(boggleTray, coordinates) {
  let result = [];
  let board = [];
  let boardWidth = Math.sqrt(boggleTray.length);

  //populate boggle board into arrays corresponding to the number of rows needed
  let n = 0;
  for (let i = 0; i < boggleTray.length; i+=boardWidth) {
    board[n] = boggleTray.slice(i,i+boardWidth);
    n++;
  }

  for (let i = 0; i < coordinates.length; i++) {
    result[i] = board[coordinates[i][0]][coordinates[i][1]]
  }

  return result.join("");
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
