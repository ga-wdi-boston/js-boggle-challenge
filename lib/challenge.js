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

  const test = [[0, 0], [3, 2], [3, 1], [2, 2]]
  const run = function () {
    let print = ' '
    for (let i = 0; i < coordinates.length; i++) {
      for (let j = 0; j < test.length; j++) {
        const val = coordinates[i][0]
        const val1 = coordinates[i][1]

        const testVal = test[j][0]
        const testVal1 = test[j][1]

        if (val === testVal && val1 === testVal1) {
          print += tray[i] + ' '
        }
      }
    }
    console.log(print)
  }
  run()
}

boggle()

const bigBoggle = function bigBoggle () {}

const superBigBoggle = function superBigBoggle () {}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
