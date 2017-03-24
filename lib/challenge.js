'use strict'

const boggle = function boggle () {
  const tray = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
  const coordinates = [
  [0, 0], [0, 1], [0, 2], [0, 3],
  [1, 0], [1, 1], [1, 2], [1, 3],
  [2, 0], [2, 1], [2, 2], [2, 3],
  [3, 0], [3, 1], [3, 2], [3, 3]
  ]

  const test = [[0, 0], [3, 2], [3, 1]]
  const run = function () {
    let print = ' '
    for (let i = 0; i < test.length; i++) {
      const num = coordinates.indexOf(test[i])
      const letter = tray[num]
      console.log(letter)
      print += letter
    }
    return print
  }

  console.log(run())
}

boggle()

const bigBoggle = function bigBoggle () {}

const superBigBoggle = function superBigBoggle () {}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
