'use strict'

const boggle = function boggle (tray, coords) {
// tray = ['a', 'b', 'c', ... ,'p']
// coords = [[x1,y1], ... , [x4,y4]]
  let word = ''

  for (const point of coords) {
    const x = point[0]
    const y = point[1]
    const index = 4 * y + x
    const letter = tray[index]
    word += letter
  }

  return word
}

const bigBoggle = function bigBoggle (tray, coords) {
// tray = ['a', 'b', 'c', ... ,'p']
// coords = [[x1,y1], ... , [x4,y4]]
  let word = ''

  for (const point of coords) {
    const x = point[0]
    const y = point[1]
    const index = 5 * y + x
    const letter = tray[index]
    word += letter
  }

  return word
}

const superBigBoggle = function superBigBoggle (tray, coords) {
// tray = ['a', 'b', 'c', ... ,'p']
// coords = [[x1,y1], ... , [x4,y4]]
  let word = ''

  for (const point of coords) {
    const x = point[0]
    const y = point[1]
    const index = 6 * y + x
    const letter = tray[index]
    word += letter
  }

  return word
}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
