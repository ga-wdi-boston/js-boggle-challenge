'use strict';

const boggle = function boggle(trayString,coordinate) {
  let n=Math.sqrt(trayString.length);
  let newTray=[];
  for (let i = 0; i < n; i++) {
    newTray[i]=trayString.slice(n*i,n*(i+1));
  }
  let word='';
  for (let i = 0; i < coordinate.length; i++) {
    word+=newTray[coordinate[i][0]][coordinate[i][1]];
  }
  return word;

  };

  const bigBoggle = boggle;

  const superBigBoggle = boggle;


  module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
