'use strict';

const boggle = function boggle() {};

let tray = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q'];
let list = [[0,1],[2,3],[0,1],[2,3]];

const concat = function(tray, list){
  let concatedString = '';
  let count = 0;
  for (let i = 0; i < tray.length; i++) {
    concatedString += tray[i]
    count++;
    if(count%4 === 0){

    }
  }
};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
