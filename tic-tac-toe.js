"use strict"
document.addEventListener('DOMContentLoaded', ()  => {
  const gameBoard = document.getElementById("board").children;
  const squares=document.querySelectorAll("board");
  const xs= "X";
  const os="O";
  const statuss=document.getElementById("status");
  const winFactors=[[0,4,8],[0,3,6],[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
  let clicked;
  let turn=true;
  
  var i;
  var plays=["","","","","","","","",""];

  for(i=0;i<gameBoard.length;i++){
    gameBoard[i].setAttribute("class","square");
    gameBoard[i].addEventListener('click',clicks);
    gameBoard[i].addEventListener('mouseenter',hoverStyle);
    gameBoard[i].addEventListener('mouseleave',hoverRevert);
    gameBoard[i].addEventListener('click',checkWinner);
  } 
  
  function clicks(event) {
    var index=plays.indexOf(event.target);
    
    if(turn==true || clicked==os){
      event.target.innerHTML= xs;
      event.target.classList.add("X");
      clicked= xs;
      turn=false;
    }
    else if(clicked==xs || turn==false){
      event.target.innerHTML=os;
      event.target.classList.add("O");
      clicked=os;
      turn=true;
    }  
    console.log(plays);
  }

  function hoverStyle(event){
    event.target.classList.add('hover');
    
  } 
  function hoverRevert(event){
   
    event.target.classList.remove('hover');
  }  

  function checkWinner(){
    for (i=0; i<gameBoard.length;i++){
      if(gameBoard[winFactors[i][0]].textContent=="X" && gameBoard[winFactors[i][1]].textContent=="X" && gameBoard[winFactors[i][2]].textContent=="X"){
        statuss.innerHTML="Congratulations! X is the Winner!";
        statuss.setAttribute('class','you-won');
      }
      else if(gameBoard[winFactors[i][0]].textContent=="O" && gameBoard[winFactors[i][1]].textContent=="O" && gameBoard[winFactors[i][2]].textContent=="O"){
        statuss.innerHTML="Congratulations! O is the Winner!";
        statuss.setAttribute('class','you-won');
      }
    }
  }
})
