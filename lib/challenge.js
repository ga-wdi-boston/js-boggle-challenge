'use strict';

// boggle - 4x4 tray
  // tray - array of 16 single letter strings
// list of coordinate pairs - array, length <= 4,
  // each element in l.o.c.p - array, lenght 2
    // sub arrays - interger 1- >= 0 and interger 2- <=3



const boggle = function boggle() {
  const boggle = {
    tray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P'],
    listOfCoordinatePairs: [[1,2], [2,1], [3,1], [1,3]]
  };
};

console.log(['boggle.tray.listOfCoordinatePairs'])

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
