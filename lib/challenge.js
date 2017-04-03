'use strict'


const tray = [
  'd', 'i', 'b', 't',
  'l', 'o', 'a', 'm',
  'b', 'c', 'g', 'r',
  'u', 'm', 'p', 's'
  ]

const locations = [
  [0, 0], [0, 1], [0, 2], [0, 3],
  [1, 0], [1, 1], [1, 2], [1, 3],
  [2, 0], [2, 1], [2, 2], [2, 3],
  [3, 0], [3, 1], [3, 2], [3, 3]
]

// Arrow functions!
//  const addOne = (x) => {
//   return x + 1
// }

// Is the same as
//  const addOne = function(x) {
//    return x + 1
//  }
// BUT! You have no access to `this.`

const boggle = function boggle (tray, coordinates) {

  const arrayOfLocations = locations.map((l, ix) => {
    return coordinates.find((coordinate) => {
      return l[0] === coordinate[0] && l[1] === coordinate[1]
    }) ? ix : null
  })
  const arrayOfIndexes = arrayOfLocations.filter(v => v !== null)
  console.log(arrayOfIndexes)
  const arrayOfLetters = arrayOfIndexes.map((i) => tray[i])
  return arrayOfLetters.join('')
}

const bigBoggle = () => {}

const superBigBoggle = function superBigBoggle () {}

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
