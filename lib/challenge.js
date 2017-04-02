'use strict'
const trayMap = [[0, 0], [0, 1], [0, 2], [0, 3],
                 [1, 0], [1, 1], [1, 2], [1, 3],
                 [2, 0], [2, 1], [2, 2], [2, 3],
                 [3, 0], [3, 1], [3, 2], [3, 3]]

const boggleTray = 'wxxxxoxxxxrxxxxd'.split('')
const trayMapIndexOf = []
const boggle = function boggle (boggleTray, arr) {
  let bob = 1
  for (let i = 0; i < arr.length; i++) { // iterates through arr
    for (let f = 0; f < trayMap.length; f++) { // iterates through trayMap
      if (arr[i][0] === trayMap[f][0] && arr[i][1] === trayMap[f][1]) {
        trayMapIndexOf.push(f)
      }
    }
  }
  console.log(boggleTray[trayMapIndexOf[0]] + boggleTray[trayMapIndexOf[1]] +
    boggleTray[trayMapIndexOf[2]] + boggleTray[trayMapIndexOf[3]])
}
boggle(boggleTray, [[0, 0], [1, 1], [2, 2], [3, 3]])

// const bigBoggle = function bigBoggle () {}
//
// const superBigBoggle = function superBigBoggle () {}

module.exports = {
  boggle
  // bigBoggle,
  // superBigBoggle
}
