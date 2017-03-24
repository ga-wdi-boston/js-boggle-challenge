'use strict'

let tray = ['a','b','c','d']
let grid = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l'],
  ['m', 'n', 'o', 'p']
]
let pairs = [
  [0, 0], [1, 1], [2, 1], [2, 2]
]
let boggle = function boggle (pair1, pair2, pair3, pair4) {
  console.log(pair1 + pair2 + pair3 + pair4)
}
boggle([0, 0], [1, 1], [2, 1], [2, 2])

//
//
//
//
const bigBoggle = function bigBoggle () {}

const superBigBoggle = function superBigBoggle () {}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
