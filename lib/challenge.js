'use strict';

let coord = ['1a', '1b', '1c', '1d',
            '2a', '2b', '2c', '2d',
            '3a', '3b', '3c', '3d',
            '4a', '4b', '4c', '4d'];


const boggle = function boggle() {
 for (let i = 0; i < coord.length; i++){
   let board = [];
   board[i] = {'coord[i]': arguments[i]};
   return board;
 }
};

boggle('a', 's', 'h', 's', 'a', 'x', 'a', 'a', 'v', 'a', 'a', 's', 'g', 'h');

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
 boggle,
 bigBoggle,
 superBigBoggle,
};
