'use strict';


let tray=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h']

let coordinatePairs=[[1,2],[1,2],[1,2],[1,2]]

const boggle = function boggle() {
for (i=0;i<tray.length;i++)
coordinatePairs [i] =tray[i]+coordinatePairs[i];

console.log (coordinatePairs);

};

const bigBoggle = function bigBoggle() {};

const superBigBoggle = function superBigBoggle() {};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,


};
