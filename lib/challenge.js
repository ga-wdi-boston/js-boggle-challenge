'use strict';

const createGridMap = function boggle(traySize) {
  let gridMap = [];
  for (let i = 0; i < traySize; i++) {
    for (let j = 0; j < traySize; j++) {
      gridMap.push([i, j]);
    }
  }

  return gridMap;
};

const playBoggle = function boggle(tray, coordinatePairs, traySize) {
  let gridMap = createGridMap(traySize);
  let boggleString = '';
  for (let i = 0; i < coordinatePairs.length; i++) {
    for (let j = 0; j < gridMap.length; j++) {
      if (coordinatePairs[i].toString() === gridMap[j].toString()) {
        boggleString = boggleString + tray[j].toString();
      }
    }
  }

  return boggleString;
};

const boggle = function boggle(tray, coordinatePairs) {
  let traySize = 4;
  return playBoggle(tray, coordinatePairs, traySize);
};

const bigBoggle = function bigBoggle(tray, coordinatePairs) {
  let traySize = 5;
  return playBoggle(tray, coordinatePairs, traySize);
};

const superBigBoggle = function superBigBoggle(tray, coordinatePairs) {
  let traySize = 6;
  return playBoggle(tray, coordinatePairs, traySize);
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
