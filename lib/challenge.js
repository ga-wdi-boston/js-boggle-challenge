'use strict';
const boggle = function boggle(tray, listOfNumbers) {
    let result = '';
    for (let i = 0; i < listOfNumbers.length; i++) {
      let x = listOfNumbers[i][0];
      let y = listOfNumbers[i][1];
      result += tray[(4 * x) + y];
    }
    return result;
  };
const bigBoggle = function bigBoggle(tray, listOfNumbers) {
    let result = '';
    for (let i = 0; i < listOfNumbers.length; i++) {
      let x = listOfNumbers[i][0];
      let y = listOfNumbers[i][1];
      result += tray[(5 * x) + y];
    }
    return result;
  };
const superBigBoggle = function superBigBoggle(tray, listOfNumbers) {
    let result = '';
    for (let i = 0; i < listOfNumbers.length; i++) {
      let x = listOfNumbers[i][0];
      let y = listOfNumbers[i][1];
      result += tray[(6 * x) + y];
    }
    return result;
  };

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
}
;
