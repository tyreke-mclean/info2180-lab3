"use strict"
document.addEventListener('DOMContentLoaded', ()  => {
  const gameBoard = document.getElementById("board").children;
  const squares=document.querySelectorAll("board");
  const xs= "X";
  const os="O";
  let clicked;
  let turn=true;
  
  var i;
  var plays=["","","","","","","","",""];

  for(i=0;i<gameBoard.length;i++){
    gameBoard[i].setAttribute("class","square");
    gameBoard[i].addEventListener('click',clicks);
    gameBoard[i].addEventListener('mouseenter',hoverStyle);
    gameBoard[i].addEventListener('mouseleave',hoverRevert);
  } 
  
  function clicks(event) {
    var index=plays.indexOf(event.target);
    console.log(plays);
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
  }

  function hoverStyle(event){
    event.target.classList.add('hover');
    
  } 
  function hoverRevert(event){
   
    event.target.classList.remove('hover');
  }  

})
