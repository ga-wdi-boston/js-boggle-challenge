'use strict';

let grid = function(tray){
  let nums = tray;
  let box = [];
  let x = Math.sqrt(tray.length);
  for(let i=0; i<x; i++){
    box[i] = [];
  }

  for(let k=0; k<nums.length; k++){
    for(let i=0, j=1; i<x; i++, j++){
    if (k<x*j){
      box[i][k-x*i] = nums[k];
    }
    }
  }
  return box;
};

const boggle = function boggle(tray, arr) {

  let word='';
  let box = grid(tray);

  for(let i=0; i<arr.length; i++){
    word = word + box[arr[i][0]][arr[i][1]];
  }
  return word;

};

const bigBoggle = function bigBoggle(tray, arr) {
  return boggle(tray, arr);
};

const superBigBoggle = function superBigBoggle(tray, arr) {
  return boggle(tray, arr);
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
