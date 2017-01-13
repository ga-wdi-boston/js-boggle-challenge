'use strict';

const boggle = function boggle(tray, coordinate) {
  let selectString='';
  let newCoordinate=0;
  for(let i=0;i<coordinate.length;i++)
  {
    newCoordinate=coordinate[i][0]*4+coordinate[i][1];
    selectString+=tray[newCoordinate];
  }
  return selectString;
};

const bigBoggle = function bigBoggle(tray, coordinate) {
  let selectString='';
  let newCoordinate=0;
  for(let i=0;i<coordinate.length;i++)
  {
    newCoordinate=coordinate[i][0]*5+coordinate[i][1];
    selectString+=tray[newCoordinate];
  }
  return selectString;
};

const superBigBoggle = function superBigBoggle(tray, coordinate) {
  let selectString='';
  let newCoordinate=0;
  for(let i=0;i<coordinate.length;i++)
  {
    newCoordinate=coordinate[i][0]*6+coordinate[i][1];
    selectString+=tray[newCoordinate];
  }
  return selectString;
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
