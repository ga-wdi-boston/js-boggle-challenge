'use strict'

const tray = 'dibtloambcgrumps'.split('')

const pairs = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3]
]

const boggle = function (tray, pairs, x, y) {
  if (x === undefined || y === undefined) {
    x = Math.sqrt(tray.length)
    y = x
  }
  // make grid
  const grid = []
  // make y arrays in grid
  for (let i = 0; i < y; i++) {
    grid.push([])
  }
  // push the tray letters to the appropriate row in the grid
  for (let i = 0; i < tray.length; i++) {
    grid[Math.floor(i / y)].push(tray[i])
  }
  // find word from pairs
  let word = ''
  for (let i = 0; i < pairs.length; i++) {
    word = word + grid[pairs[i][0]][pairs[i][1]]
  }
  return word
}
boggle(tray, pairs, 4, 4)

const bigBoggle = boggle
// bigBoggle(tray, pairs, 4, 4)
const superBigBoggle = boggle
// superBigBoggle(tray, pairs, 4, 4)

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}

// origirnal design
// let tray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']
// const grid = [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f', 'g', 'h'],
//   ['i', 'j', 'k', 'l'],
//   ['m', 'n', 'o', 'p']
// ]
//

// hard-coded version
// const boggle = function (tray, pairs) {
//   const grid = [
//     [tray[0], tray[1], tray[2], tray[3]],
//     [tray[4], tray[5], tray[6], tray[7]],
//     [tray[8], tray[9], tray[10], tray[11]],
//     [tray[12], tray[13], tray[14], tray[15]]
//   ]
//   let word = ''
//   for (let i = 0; i < pairs.length; i++) {
//     word = word + grid[pairs[i][0]][pairs[i][1]]
//   }
//   return word
// }
//
// boggle(tray, pairs)
