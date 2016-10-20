'use strict';

/*
const boggle = function boggle() {
  let fs = require('fs');

  let nodes = function(value, row, col) {
      this.value = value;
      this.row = row;
      this.col = col;
  };

  let Path = function() {
      this.nodes = [];
  };

  Path.prototype.push = function(node) {
      this.nodes.push(node);
      return this;
  };

  Path.prototype.contains = function(node) {
      for (let i = 0, ii = this.nodes.length; i < ii; i++) {
          if (this.nodes[i] === node) {
              return true;
          }
      }

      return false;
  };

  Path.prototype.clone = function() {
      let path = new Path();
      path.nodes = this.nodes.slice(0);
      return path;
  };

  Path.prototype.to_word = function() {
      let word = '';

      for (let i = 0, ii = this.nodes.length; i < ii; ++i) {
          word += this.nodes[i].value;
  }
};
};

*/

// create 4x4 grid
// represent grid as 2-D array
  let gridSize = 4;
  let grid = [];

  for (let i = 0; i < gridSize.length; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize.length; j++) {
      grid[i][j] = 'Empty';
  }
  }

};

/*
const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};
*/

module.exports = {
  boggle,
};
