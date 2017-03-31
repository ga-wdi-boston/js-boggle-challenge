// 4 x 4 Boggle
const letterTrayFour = 'abcdefghijkmnopr'.split('')

const selectFourCoords = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3]
]

const boggle = function (dimension, tray, coords) {
  const result = []
  for (let i = 0; i < coords.length; i++) {
    // Let's walk through how we would identify the letter for coordinate [0,0]
    // coords[0][0] refers to the first column of the first element in the selectFourCoords array --> 0
    // coords[0][1] refers to the second column of the first element in the selectFourCoords array --> 0
    // coords[0][0] * 4 + coords[0][1] = 0 * 4 + 0 = 0
    // letterTrayFour[0] --> 'a'
    // result.push('a') adds 'a' to the result array
    result.push(tray[ coords[i][0] * dimension + coords[i][1] ])
  }
  // .join('') will collapse an array into a string
  return result.join('')
}

const boggleFour = boggle(4, letterTrayFour, selectFourCoords)
console.log('Boggle 4x4: ' + boggleFour)

// 5 x 5 Boggle
const letterTrayFive = 'abcdefghijkmnoprdjeiskrjf'.split('')

const selectFiveCoords = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4]
]

const boggleFive = boggle(5, letterTrayFive, selectFiveCoords)
console.log('Boggle 5x5: ' + boggleFive)

// 6 x 6 Boggle
const letterTraySix = 'abcdefghijkmnoprdjeiskrjekdjskrifjwf'.split('')

const selectSixCoords = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5]
]

const boggleSix = boggle(6, letterTraySix, selectSixCoords)
console.log('Boggle 6x6: ' + boggleSix)
