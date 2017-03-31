'use strict'

const anyBoggle = function (tray, coords, size) {
  // tray is an array of single characters
  // coords is a list of coordinate pairs

  // check to see that tray is the correct size.  it should have
  // length of size * size
  if (tray.length !== size * size) {
    console.log('Tray is not the correct size')
    return ''
  }

  let finalString = ''
  // go through the coordinates.  calculate the index of the letter
  // in the tray from the coordinate and add the letter to the
  // finalString
  for (let i = 0; i < coords.length; i++) {
    const x = coords[i][0]
    const y = coords[i][1]
    const trayIdx = x * size + y
    if (trayIdx >= tray.length) {
      console.log('Coordinate is outside the board')
      return ''
    }
    // console.log(x, y, tray[trayIdx])
    finalString += tray[trayIdx]
  }

  return finalString
}

const boggle = function boggle (tray, coords) {
  // tray is 4x4
  const finalString = anyBoggle(tray, coords, 4)
  return finalString
}

const bigBoggle = function bigBoggle (tray, coords) {
  // tray is 5x5
  const finalString = anyBoggle(tray, coords, 5)
  return finalString
}

const superBigBoggle = function superBigBoggle (tray, coords) {
  // tray is 6x6
  const finalString = anyBoggle(tray, coords, 6)
  return finalString
}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
