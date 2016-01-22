'use strict';

const anyBoggle = function anyBoggle(rank, tray, coords) {
  let result = '';
  for (let i = 0; i < coords.length; i++) {
    let row = coords[i][0];
    let col = coords[i][1];
    result += tray[row * rank + col];
  }

  return result;
};

const boggle = (tray, coords) => anyBoggle(4, tray, coords);

const bigBoggle = (tray, coords) => anyBoggle(5, tray, coords);

const superBigBoggle = (tray, coords) => anyBoggle(6, tray, coords);

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
