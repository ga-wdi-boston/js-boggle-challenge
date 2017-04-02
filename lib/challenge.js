'use strict'

// origirnal design
// let tray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']
// const grid = [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f', 'g', 'h'],
//   ['i', 'j', 'k', 'l'],
//   ['m', 'n', 'o', 'p']
// ]
//

const tray = 'dibtloambcgrumps'.split('')

const pairs = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3]
]

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

const boggle = function (tray, pairs, x, y) {
  if (x === undefined) {
    x = 100
  }
  if (y === undefined) {
    y = 100
  }
  // make grid
  const grid = []
  // make y arrays in grid
  for (let i = 0; i < y; i++) {
    grid.push([])
  }
  // console.log(grid)
  // temp print out tray items / y
  for (let i = 0; i < tray.length; i++) {
    // console.log(tray[i] + ' ' + Math.floor(i / 4))
    grid[Math.floor(i / 4)].push(tray[i])
  }
  // make x objects in each array
  for (let i = 0; i < x; i++) {
    grid[i].push()
  }
  // console.log(grid)
  // find word from pairs
  let word = ''
  for (let i = 0; i < pairs.length; i++) {
    word = word + grid[pairs[i][0]][pairs[i][1]]
  }
  return word
}
boggle(tray, pairs, 4, 4)

const bigBoggle = function bigBoggle (tray, pairs, x, y) {
  if (x === undefined) {
    x = 100
  }
  if (y === undefined) {
    y = 100
  }
  // make grid
  const grid = []
  // make y arrays in grid
  for (let i = 0; i < y; i++) {
    grid.push([])
  }
  // console.log(grid)
  // temp print out tray items / y
  for (let i = 0; i < tray.length; i++) {
    // console.log(tray[i] + ' ' + Math.floor(i / 4))
    grid[Math.floor(i / 4)].push(tray[i])
  }
  // make x objects in each array
  for (let i = 0; i < x; i++) {
    grid[i].push()
  }
  // console.log(grid)
  // find word from pairs
  let word = ''
  for (let i = 0; i < pairs.length; i++) {
    word = word + grid[pairs[i][0]][pairs[i][1]]
  }
  return word
}
bigBoggle(tray, pairs, 5, 5)

const superBigBoggle = function superBigBoggle (tray, pairs, x, y) {
  if (x === undefined) {
    x = 100
  }
  if (y === undefined) {
    y = 100
  }
  // make grid
  const grid = []
  // make y arrays in grid
  for (let i = 0; i < y; i++) {
    grid.push([])
  }
  // console.log(grid)
  // temp print out tray items / y
  for (let i = 0; i < tray.length; i++) {
    // console.log(tray[i] + ' ' + Math.floor(i / 4))
    grid[Math.floor(i / 4)].push(tray[i])
  }
  // make x objects in each array
  for (let i = 0; i < x; i++) {
    grid[i].push()
  }
  // console.log(grid)
  // find word from pairs
  let word = ''
  for (let i = 0; i < pairs.length; i++) {
    word = word + grid[pairs[i][0]][pairs[i][1]]
  }
  return word
}
superBigBoggle(tray, pairs, 6, 6)

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
