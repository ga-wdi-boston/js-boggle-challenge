'use strict';

const boggle = function boggle(tray, pairList) {

  // Validate inputs
  // if(tray.length === 16 & typeof(tray) === 'string' && tray instanceof String){
  //   let trayCheck = true;
  // }else{
  //   let trayCheck = false;
  // }
  //
  // if(typeof(pairList) === 'object' && typeof(pairList[0]) === 'object' &&
  // pairlist.length <= 4){
  //   let pairListCheck = true;
  // }else{
  //   pairListCheck = false;
  // }

  // Set up variables
  let letterCount = tray.length;
  let gridSize = Math.sqrt(letterCount);
  let grid = [];
  let letterIndex = 0;

  // Set up grid
  for(let i = 0; i < gridSize; i++){
    grid.push([]);
    for(let j = 0; j < gridSize; j++){
      grid[i].push(tray[letterIndex]);
      letterIndex += 1;
    }
  }

  console.log('grid: ', grid);

  // Get results
  let resultString = '';
  let resultLength = pairList.length;
  for(let k = 0; k < resultLength; k++){
    resultString += grid[pairList[k][0]][pairList[k][1]];
    // console.log(resultString);
  }

  // console.log(resultString);
  return resultString;

};

//
let test = boggle('abcdefghi', [[0,0],[0,2],[1,1]]);
console.log(test);
//
// const bigBoggle = function bigBoggle() {};
//
// const superBigBoggle = function superBigBoggle() {};
//
// module.exports = {
//   boggle,
//   bigBoggle,
//   superBigBoggle,
// };
