'use strict';

const decoder = function (indexZero, indexOne, boggleType) {
  if (boggleType === 'superBigBoggle') {
    return (indexZero * 6) + indexOne;
  } else if (boggleType === 'bigBoggle') {
    return (indexZero * 5) + indexOne;
  } else {
    return (indexZero * 4) + indexOne;
  }
};

const boggle = function boggle(tray, coordinatePairs, boggleType) {
  let boggleWord = [];

  for (let i = 0; i < coordinatePairs.length; i++) {
    let pair = coordinatePairs[i];
    const position = decoder(pair[0], pair[1], boggleType);
    boggleWord.push(tray[position]);
  }
  return boggleWord.join('');
};

const bigBoggle = function bigBoggle(tray, coordinatePairs) {
  return boggle(tray, coordinatePairs, 'bigBoggle');
};

const superBigBoggle = function superBigBoggle(tray, coordinatePairs) {
  return boggle(tray, coordinatePairs, 'superBigBoggle');
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};

//example tray = ["n", "d", "e", "h", "y", "w", "d", "i", "b", "t", "f", "l", "o", "a", "m", "v", "b", "c", "g", "r", "j", "u", "m", "p", "s"]
//example coordinatePairs = [[0,1],[2,2],[2,1],[1,0]];
