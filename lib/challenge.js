'use strict'

let tray = []

tray.length = 16 // tray is 16 squares on the board

let coordPair = [] //coordPair.length <== 4 (no word is longer than 4 letters)

let internalArray =[0,0] // can be 00, 01, 02, 03, 10, 11 ,12, 13...

let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let dieLetter = possible.charAt(Math.floor(Math.random()* possible.length))


const boggle = function boggle () {

  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let dieLetter = possible.charAt(Math.floor(Math.random()* possible.length))

  let createTray = function () {
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        let row = i
        let col = j
        coordPair[row][col] = dieLetter
        return coordPair
      }
    }
  })
  }

  return boggleWords

  let isAWord = function() {
    console.log("is this a word?")
    return row
  }

}

const bigBoggle = function bigBoggle () {



  return bigBoggleWords
}

const superBigBoggle = function superBigBoggle () {


  return superBigBoggleWords
}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
