'use strict';

/*Boggle challenge 4*4 tray; tray represent an array of string characters,
and cP is two dimensional array, wich represent coordinate pairs for each new word;*/
const boggle = function boggle(tray,cP) {
  let matrix = [];
  let subArray = [];
  let matrixSize = Math.sqrt(tray.length);
  //for loop is transferring one dimensional array into two dimensional array for pairs with cP array;
  for (let i = 0; i < tray.length; i+= matrixSize) {
      subArray = tray.slice(i,i+matrixSize);
      matrix.push(subArray);
    }
  let word = '';
  for (let i = 0; i < cP.length; i++){
      word += matrix[cP[i][0]][cP[i][1]];
  }
  return word;
};

const bigBoggle = function bigBoggle(tray,cP) {
  return boggle(tray,cP);
};

const superBigBoggle = function superBigBoggle(tray,cP) {
  return boggle(tray,cP);
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
