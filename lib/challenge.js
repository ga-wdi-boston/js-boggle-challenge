'use strict';

const boggle = function boggle(tray, coordinates) {
  let lineCoordinates = [];
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i][0] === 1) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 3);
    } else if (coordinates[i][0] === 2) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 6);
    } else if (coordinates[i][0] === 3) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 9);
    } else {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1]);
    }
  }

  let catString = '';
  for (let i = 0; i < lineCoordinates.length; i++) {
    catString += tray[lineCoordinates[i]];
  }
  return catString;
};

const bigBoggle = function bigBoggle(tray, coordinates) {
  let lineCoordinates = [];
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i][0] === 1) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 4);
    } else if (coordinates[i][0] === 2) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 8);
    } else if (coordinates[i][0] === 3) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 12);
    } else if (coordinates[i][0] === 4) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 16);
    } else {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1]);
    }
  }

  let catString = '';
  for (let i = 0; i < lineCoordinates.length; i++) {
    catString += tray[lineCoordinates[i]];
  }
  return catString;
};

const superBigBoggle = function superBigBoggle(tray, coordinates) {
  let lineCoordinates = [];
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i][0] === 1) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 5);
    } else if (coordinates[i][0] === 2) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 10);
    } else if (coordinates[i][0] === 3) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 15);
    } else if (coordinates[i][0] === 4) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 20);
    } else if (coordinates[i][0] === 5) {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1] + 25);
    } else {
      lineCoordinates.push(coordinates[i][0] + coordinates[i][1]);
    }
  }
  let catString = '';
  for (let i = 0; i < lineCoordinates.length; i++) {
    catString += tray[lineCoordinates[i]];
  }
  return catString;
};


module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
