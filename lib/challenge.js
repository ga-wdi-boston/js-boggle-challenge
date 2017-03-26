'use strict'

const boggleTray = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l'],
  ['m', 'n', 'o', 'p']
]

const boggle = function (boggleTray, l0, l1, l2, l3, l4, l5, l6, l7) {
  console.log(boggleTray[l0][l1] +
              boggleTray[l2][l3] +
              boggleTray[l4][l5] +
              boggleTray[l6][l7])
}

boggle(boggleTray, 0, 0, 0, 1, 0, 2, 0, 3)

// // Tray is an array of length 16
// // Each element is a single letter string
// const string = 'skijhmorzatwvben'
// const tray = string.split('')
//
// const allCoordPairs = [
//   [0, 0], [0, 1], [0, 2], [0, 3],
//   [1, 0], [1, 1], [1, 2], [1, 3],
//   [2, 0], [2, 1], [2, 2], [2, 3],
//   [3, 0], [3, 1], [3, 2], [3, 3]
// ]
//
// const coordPairs = [
//   [0, 0], [1, 1], [2, 2], [3, 3]
// ]
//
// const boggle = function () {
//   let result = ''
//   for (let i = 0; i < coordPairs.length; i++) {
//     const position = allCoordPairs.indexOf(coordPairs[i])
//     const letter = tray[position]
//     console.log(letter)
//     result += letter
//   }
//   console.log(result)
// }
//
// const coordPairs = [
//   [0, 0],
//   [1, 1],
//   [2, 2],
//   [3, 3]
// ]
//
// const boggle = function (boggleTray, coords) {
//   for (let i = 0; i <= 3; i++) {
//     for (let j = 0; j <= 3; j++){
//       if (coordPairs[i, j] === [i, j]) {
//         let answer += boggleTray[i][j]
//        }
//     }
//   }
// }
//
//       let letters += boggleTray[i][j]
//     if (boggleTray[coordPairs[i]][coordPairs[j]]
//   }
//   trayGrid[0][0] + trayGrid[1][1] + trayGrid[2][2] + trayGrid[3][3]
// }
// trayGrid[rowNum][columnNum]
//
// // Array containing all coordinate pairs

//
// // A list of coordinate pairs is an array with length four
// // Each element will be an array of length 2
//
//
// const coords = function () {
//   for (let i = 0; i < coordPairs.length; i++) {
//     if (allCoordPairs[i] === coordPairs[i]) {
//       const position = allCoordPairs[i].indexOf()
//     }
//   }
//   return position
// }
//
// const boggle = function boggle (tray, coordPairs) {
//
// }
//
// boggle(tray, coordPairs)
//
// const bigBoggle = function bigBoggle () {}
//
// const superBigBoggle = function superBigBoggle () {}
//
// module.exports = {
//   boggle,
//   bigBoggle,
//   superBigBoggle
// }
