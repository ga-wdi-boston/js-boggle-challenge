'use strict';

const createGridMap = function (traySize) {
  let gridMap = [];
  for (let i = 0; i < traySize; i++) {
    for (let j = 0; j < traySize; j++) {
      gridMap.push([i, j]);
    }
  }

  return gridMap;
};

const validateTrayLength = function (tray, traySize) {
  let validTrayLength = traySize * traySize;
  if (tray.length === validTrayLength) {
    return true;
  } else {
    return false;
  }
};

const validateCoordinateLine = function (coordinatePairs) {
  for (let i = 0; i < coordinatePairs.length - 1; i++) {
    if (!((
        coordinatePairs[i][0] === coordinatePairs[i + 1][0] ||
        coordinatePairs[i][0] === coordinatePairs[i + 1][0] + 1 ||
        coordinatePairs[i][0] === coordinatePairs[i + 1][0] - 1) && (
        coordinatePairs[i][1] === coordinatePairs[i + 1][1] ||
        coordinatePairs[i][1] === coordinatePairs[i + 1][1] + 1 ||
        coordinatePairs[i][1] === coordinatePairs[i + 1][1] - 1))) {
      return false;
    }
  }

  return true;
};

const playBoggle = function (tray, coordinatePairs, traySize) {
  let validTrayLength = validateTrayLength(tray, traySize);
  let validCoordinateLine = validateCoordinateLine(coordinatePairs);
  if (!validTrayLength || !validCoordinateLine) {
    return '';
  }

  let concatenatedLetters = '';
  let gridMap = createGridMap(traySize);
  for (let i = 0; i < coordinatePairs.length; i++) {
    let coordinateFoundInTray = false;
    for (let j = 0; j < gridMap.length; j++) {
      if (coordinatePairs[i].toString() === gridMap[j].toString()) {
        concatenatedLetters = concatenatedLetters + tray[j].toString();
        coordinateFoundInTray = true;
      }
    }

    if (!coordinateFoundInTray) {
      return '';
    }
  }

  return concatenatedLetters;
};

const boggle = function (tray, coordinatePairs) {
  let traySize = 4;
  return playBoggle(tray, coordinatePairs, traySize);
};

const bigBoggle = function (tray, coordinatePairs) {
  let traySize = 5;
  return playBoggle(tray, coordinatePairs, traySize);
};

const superBigBoggle = function (tray, coordinatePairs) {
  let traySize = 6;
  return playBoggle(tray, coordinatePairs, traySize);
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
