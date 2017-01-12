'use strict';

function makeBoard(tray, dim)
{
  let solution = [];
  for(let i=0;i<tray.length; i+dim)
  {
    for(let j=0; j<dim; j++)
    {
      solution[i][j] = tray[i];
    }
  }
  return solution;
}

const boggle = function boggle(tray, guess)
{
  let board = makeBoard(tray, 4);
  let word = "";
  for(let i = 0; i<guess.length;i++)
  {
    word += board[guess[i][0]][guess[i][1]];
  }
  return word;
};

const bigBoggle = function bigBoggle(tray, guess)
{
  let board = makeBoard(tray, 5);
  let word = "";
  for(let i = 0; i<guess.length;i++)
  {
    word += board[guess[i][0]][guess[i][1]];
  }
  return word;
};

const superBigBoggle = function superBigBoggle(tray, guess)
{
  let board = makeBoard(tray, 6);
  let word = "";
  for(let i = 0; i<guess.length;i++)
  {
    word += board[guess[i][0]][guess[i][1]];
  }
  return word;
};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
