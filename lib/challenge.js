'use strict'

// Initial Test Tray
const trayOne = ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A']

// Test pairs
const pairs = [[0, 0], [1, 1], [2, 2], [3, 3]]

// function to Generate a board based on input
const generateBoard = function (rows, columns) {
  const totalLetters = (rows * columns) - 1
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const board = []
  for (let i = 0; i <= totalLetters; i++) {
    let letter = possible.charAt(Math.floor(Math.random() * possible.length))
    board.push(letter)
  }
  return board
}

// Boggle function

const boggle = function boggle (pair) {
  let text = ''

// Generate a 4 X 4 random grid
  const board = generateBoard(4, 4)

// Console the board
  console.log(board)

  for (let i = 0; i < pair.length; i++) {
    // work through each pair to determine length array
    let rowMod = 4 * pair[i][0]  // each row is worth 4
    let colMod = pair[i][1]
    let arrayValue = rowMod + colMod

  // push the letters from the array into the text
    text += board[arrayValue]
  }
  return text
}

// Big Boggle function start
const bigBoggle = function bigBoggle (pair) {
  let text = ''

// Generate a 5 X 5 random grid
  const board = generateBoard(5, 5)

// Console the board
  console.log(board)

  for (let i = 0; i < pair.length; i++) {
    // work through each pair to determine length array
    console.log(pair[i][0])
    let rowMod = 5 * pair[i][0]  // each row is worth 5
    let colMod = pair[i][1]
    let arrayValue = rowMod + colMod

  // push the letters from the array into the text
    text += board[arrayValue]
  }
  return text
}

// superBigBoggle Function
const superBigBoggle = function superBigBoggle (pair) {
  let text = ''

// Generate a 6 X 6 random grid
  const board = generateBoard(6, 6)

// Console the board
  console.log(board)
  for (let i = 0; i < pair.length; i++) {
    // work through each pair to determine length array
    console.log(pair[i][0])
    let rowMod = 6 * pair[i][0] // each row is worth 6
    let colMod = pair[i][1]
    let arrayValue = rowMod + colMod

  // push the letters from the array into the text
    text += board[arrayValue]
  }
  return text
}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
