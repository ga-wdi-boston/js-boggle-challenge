'use strict';

const boggle = function boggle(tray, coordinates) {
  let answer = '';

  for (let i = 0; i < coordinates.length; i++) {

    let c1 = coordinates[i][0];
    let c2 = coordinates[i][1];

    answer += tray[(c1 * 4) + c2];
  }
  return answer;
};

const bigBoggle = function bigBoggle(tray, coordinates) {
  let answer = '';

  for (let i = 0; i < coordinates.length; i++) {

    let c1 = coordinates[i][0];
    let c2 = coordinates[i][1];

    answer += tray[(c1 * 5) + c2];
  }
  return answer;
};

const superBigBoggle = function superBigBoggle(tray, coordinates) {
  let answer = '';

  for (let i = 0; i < coordinates.length; i++) {

    let c1 = coordinates[i][0];
    let c2 = coordinates[i][1];

    answer += tray[(c1 * 6) + c2];
  }
  return answer;
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
