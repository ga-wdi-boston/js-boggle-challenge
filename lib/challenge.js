'use strict'

// const tray = [['a', 'b', 'c', 'd'],
          //     ['e', 'f', 'g', 'h'],
            //   ['i', 'j', 'k', 'l'],
          //    ['m', 'n', 'o', 'p']]
// const listOne = [[0,0], [1, 1], [2, 2], [3, 3]]
const boggle = function boggle (tray, list) {
  let answer = []
  for (let i = 0; i<list.length; i++) {
    answer.push(tray[((list[i][0])*4)+(list[i][1])])
  }
  return answer.join('');
}



const bigBoggle = function bigBoggle() {
  let answer = []
  for (let i = 0; i<list.length; i++) {
    answer.push(tray[((list[i][0])*5)+(list[i][1])])
  }
  return answer.join('');
}


const superBigBoggle = function superBigBoggle(){
  let answer = []
  for (let i = 0; i<list.length; i++) {
    answer.push(tray[((list[i][0])*6)+(list[i][1])])
  }
  return answer.join('');
}








module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
