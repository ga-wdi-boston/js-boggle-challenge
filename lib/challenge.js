'use strict';

let tray = [["a", "b", "c", "d"],
            ["e", "i", "o", "u"],
            ["r", "s", "t", "l"],
            ["n", "y", "f", "g"]];

let coordPairs = [[0, 0],[1, 1],[2, 2],[3, 3]];

const getPairs = function(coordPairs){
  let coords;
  for (let i = 0; i < coordPairs.length; i++){
    for (let j = 0; j < coordPairs[i].length; j++){
      coords = coordPairs[i][j];
    }
  }
  return coords;
}


const boggle = function boggle(tray) {
  getPairs(coordPairs);
  let trayCoords;
  for (let i = 0; i < tray.length; i++){
    for (let j = 0; j < tray[i].length; j++){
      if (coords === tray[i][j]){
        trayCoords = coords;
      }
    }
    return trayCoords;
  }


};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
