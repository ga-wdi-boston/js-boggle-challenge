'use strict';

// create 4x4 grid
// represent grid as 2-D array

const boggleTray = 'wxxxxoxxxxrxxxxd';
const coords = [[0, 0], [1, 1], [2, 2], [3, 3]]; //array1

const grid = [[0,0], [0,1], [0,2], [0,3], //array2
              [1,0], [1,1], [1,2], [1,3],
              [2,0], [2,1], [2,2], [2,3],
              [3,0], [3,1], [3,2], [3,3]];

const makeNumber = function getMatch(coords, grid)  {
  let matches = [];

    for (let i = 0; i < coords.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (coords[i] === grid[j]) {
          matches.push(indexOf(grid[j]));
      }
    }
    }
      return matches;
    };
};

/* const boggle = function (tray, coords) {
  let word = '';
  for (let i = 0; i < coords.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      word = word.concat(boggleTray.substr(grid.indexOf(coords[i]), 1));
    }
    return word;
  }
}; */

 const makeString = function (tray, coords) {
  let word = '';
  for (let i = 0; i < coords.length; i++) {
    word = word.concat(boggleTray.substr(grid.indexOf(coords[i]), 1));
  }
  return word;
};

console.log(coords[0]);
console.log(grid.indexOf([0,0]));
console.log("what index should be: " + grid[0])
console.log(grid.indexOf([0,0]));
console.log(grid.indexOf(coords[0]));
console.log(makeString(boggleTray, coords));

  /* let gridSize = 4;
  let grid = [];

  for (let i = 0; i < gridSize.length; i++) {
    grid[i] = [];
  for (let j = 0; j < gridSize.length; j++) {
    grid[i][j] = 'Empty';
  }
  }

};
} */




/*

module.exports = {
  boggle,
}; */
