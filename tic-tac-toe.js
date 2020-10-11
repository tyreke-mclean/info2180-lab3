"use strict"
document.addEventListener('DOMContentLoaded', ()  => {
  const board = document.getElementById("board").children;
  var i;
  for(i=0;i<board.length;i++){
    board[i].setAttribute("class","square");
  } 

})