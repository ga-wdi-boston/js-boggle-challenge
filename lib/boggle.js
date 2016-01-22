'use strict';

let tray = 'efghijklmnopqrsu'.split('');

const boggle = function boggle(tray, pairs) {
    let firstRow = [];
    let secondRow = [];
    let thirdRow = [];
    let fourthRow = [];
    let fixedTable = [];
    let word = [];
    for(let i = 0; i<4; i++){
      firstRow[i]=tray[i];
    }
    for(let j =4; j<8; j++){
      secondRow[j]=tray[j];
    }
    for(let k = 9; k<13; k++){
      thirdRow[k]=tray[k];
    }
    for(let l = 13; l<17; l++){
      fourthRow[l]=tray[l];
    }
    fixedTable[0]=firstRow;
    fixedTable[1]=secondRow;
    fixedTable[2]=thirdRow;
    fixedTable[3]=fourthRow;
    for(let n = 0; n<pairs.length; n++){
      for(let m=0; m<3; m++){
        word[n]=fixedTable[n][m];
      }
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
