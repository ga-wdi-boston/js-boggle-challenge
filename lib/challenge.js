'use strict';

const bogglin = function bogglin(rank, tray, coords) {
  let result = '';
  for (let i = 0; i < coords.length; i++) {
    let row = coords[i][0];
    let col = coords[i][1];
    result += tray[row * rank + col];
  }

  return result;
};

const boggle = (tray, coords) => bogglin(4, tray, coords);

const bigBoggle = (tray, coords) => bogglin(5, tray, coords);

const superBigBoggle = (tray, coords) => bogglin(6, tray, coords);

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
