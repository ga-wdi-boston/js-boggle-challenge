'use strict';

//tray and coordinatePairs should both be arrays
const boggle = function boggle(tray, coordinatePairs) {
  let response = '';

  for (let i = 0; i < coordinatePairs.length; i++) {
    let coordinate1 = coordinatePairs[i][0];
    let coordinate2 = coordinatePairs[i][1];

    let index = (coordinate1 * 4) + coordinate2;

    response = response + tray[index];
  }

  return response;
};

const bigBoggle = function bigBoggle(tray, coordinatePairs) {
  let response = '';

  for (let i = 0; i < coordinatePairs.length; i++) {
    let coordinate1 = coordinatePairs[i][0];
    let coordinate2 = coordinatePairs[i][1];

    let index = (coordinate1 * 5) + coordinate2;

    response = response + tray[index];
  }

  return response;
};

const superBigBoggle = function superBigBoggle(tray, coordinatePairs) {
  let response = '';

  for (let i = 0; i < coordinatePairs.length; i++) {
    let coordinate1 = coordinatePairs[i][0];
    let coordinate2 = coordinatePairs[i][1];

    let index = (coordinate1 * 6) + coordinate2;

    response = response + tray[index];
  }

  return response;
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
