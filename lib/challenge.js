'use strict'


const tray = [
  ['a', 'b', 'g', 'h'],
  ['n', 'l', 'r', 'f'],
  ['w', 'a', 'n', 't'],
  ['r', 'm', 'i', 't']
]
const coordinates = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0]
]

const boggle = function boggle (a1, a2, b1, b2, c1, c2, d1, d2) {
  let bogString = (tray[a1][a2] + tray[b1][b2] + tray[c1][c2] + tray[d1][d2])
  return bogString
}

const boggle1 = function boggle (inTray, inCoordinates) {
  let bogWord = ' '
 for (let i = 0; i < 4; i++) {
  bogWord += inTray[(inCoordinates[i][0])][(inCoordinates[i][1])]
/*  bogWord += inTray[(inCoordinates[1][0])][(inCoordinates[1][1])]
  bogWord += inTray[(inCoordinates[2][0])][(inCoordinates[2][1])]
  bogWord += inTray[(inCoordinates[3][0])][(inCoordinates[3][1])] */
 }
  return bogWord
}

console.log(boggle1(tray, coordinates))

const bigBoggle = function bigBoggle () {}

const superBigBoggle = function superBigBoggle () {}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
