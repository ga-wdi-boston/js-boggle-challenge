'use strict'

const boggle = function (tray, coordPairs) {
  let letters = []
  let newtray = []
  newtray.push(tray.slice(0, 4))
  newtray.push(tray.slice(4, 8))
  newtray.push(tray.slice(8, 12))
  newtray.push(tray.slice(12, 16))
  for (let i = 0; i < coordPairs.length; i++) {
    letters.push(newtray[coordPairs[i][0]][coordPairs[i][1]])
  }
  return letters.join('')
}

module.exports = {
  boggle
}

/* In the case where the input is an array
// const tray1 = [
//   ['a', 'b', 'c', 'p'],
//   ['h', 'f', 'l', 'h'],
//   ['i', 'e', 'k', 'l'],
//   ['m', 'a', 'm', 'a']
// ]
// // tray[0][1] -> 'b'
//
// const coordPairs1 = [
//   [1, 0], // h, position: debug(tray[coordPairs[0][0]][coordPairs[0][1]])
//   [2, 1], // e, position: debug(tray[coordPairs[1][0]][coordPairs[1][1]])
//   [1, 2], // l, position: debug(tray[coordPairs[2][0]][coordPairs[2][1]])
//   [0, 3]  // p, position: debug(tray[coordPairs[3][0]][coordPairs[3][1]])
// ]
// coordPairs[1][1] -> 1

const boggle = function (tray, coordPairs) {
  const letters = []
  for (let i = 0; i < coordPairs.length; i++) {
    letters.push(tray[coordPairs[i][0]][coordPairs[i][1]])
  }
  return letters.join('')
}

// const bigBoggle = function bigBoggle () {}

// const superBigBoggle = function superBigBoggle () {}

module.exports = {
  boggle
  // ,
  // bigBoggle,
  // superBigBoggle
}
*/
