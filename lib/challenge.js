'use strict'


const tray1 = [
  ['a', 'b', 'g', 'h'],
  ['n', 'l', 'r', 'f'],
  ['w', 'a', 'n', 't'],
  ['r', 'm', 'i', 't']
]
const coordinates1 = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0]
]
const coordinates2 = [
  [3, 0],
  [0, 1],
  [1, 2],
  [1, 2]
]

const boggle = function boggle (inTray, inCoordinates) {
  let bogWord = 'Word is: '
 for (let i = 0; i < 4; i++) {
  bogWord += inTray[(inCoordinates[i][0])][(inCoordinates[i][1])]
 }
  return bogWord
}

console.log(boggle(tray1, coordinates1))
console.log(boggle(tray1, coordinates2))

const bigBoggle = function bigBoggle () {}

const superBigBoggle = function superBigBoggle () {}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
