'use strict';

const boggle = function boggle(tray, pairs) {
  let word = '';

  for (let i = 0; i < pairs.length; i++) {
    // convert the coordinates into an index for the tray array
    let index = ((pairs[i][0] * 4) + pairs[i][1]);
    word += tray[index];
  }

  return word;
};

const bigBoggle = function bigBoggle(tray, pairs) {
  let word = '';

  for (let i = 0; i < pairs.length; i++) {
    // convert the coordinates into an index for the tray array
    let index = ((pairs[i][0] * 5) + pairs[i][1]);
    word += tray[index];
  }

  return word;
};

const superBigBoggle = function superBigBoggle(tray, pairs) {
  let word = '';

  for (let i = 0; i < pairs.length; i++) {
    // convert the coordinates into an index for the tray array
    let index = ((pairs[i][0] * 6) + pairs[i][1]);
    word += tray[index];
  }

  return word;
};

const ultimateBoggle = function ultimateBoggle(tray, pairs) {
  let word = '';
  let size = Math.sqrt(tray.length);
  if(!Number.isInteger(size)) {
    console.log('invalid tray');
    return '';
  }

  if (pairs[0][0] === pairs[1][0]) {
    for (let i = 2, max = pairs.length; i < max; i++) {
      if (pairs[i][0] !== pairs[0][0]) {
        console.log('coordinates must be in a line');
        return '';
      }
    }
  } else if (pairs[0][0] === pairs[0][1]) {
    for (let i = 2, max = pairs.length; i < max; i++) {
      if (pairs[0][i] !== pairs[0][0]) {
        console.log('coordinates must be in a line');
        return '';
      }
    }
  } else {
    console.log('coordinates must be in a line');
    return '';
  }

  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i][0] > size - 1 || 
        pairs[i][1] > size - 1 ||
        pairs[i][0] < 0 ||
        pairs[i][1] < 0) {
      console.log('invalid coordinates');
      return '';
    }
    let index = ((pairs[i][0] * size) + pairs[i][1]);
    word += tray[index];
  }
  return word;
};

let goodTray = 'ndehywdibtfloamvbcgrjumps'.split('');
let badTray = 'ndehywdibtfloamvbcgrjump'.split('');

let cat = [
      [3, 2],
      [2, 3],
      [1, 4],
    ];

let foo = [
    [0, 0],
    [0, 1],
    [0, 2],
  ];

let bar = [
    [0, 0],
    [1, 0],
    [2, 0]
];

let foobar = [
    [0, 0],
    [0, 1],
    [2, 3]
];

let outOfBounds = [
    [70, -3],
    [1, 3],
    [2, 0]
];

console.log('this should work');
ultimateBoggle(goodTray, foo);
console.log('this should work');
ultimateBoggle(goodTray, bar);
console.log('this should not work');
ultimateBoggle(goodTray, cat);
console.log('this should not work');
ultimateBoggle(goodTray, outOfBounds);
console.log('this should not work');
ultimateBoggle(badTray, cat);
console.log('this should not work');
ultimateBoggle(goodTray, foobar);


module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
