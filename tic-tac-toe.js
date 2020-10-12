
document.addEventListener('DOMContentLoaded', ()  => {
  const gameBoard = document.getElementById("board").children;
  const squares=document.querySelectorAll("board");
  const xs= "X";
  const os="O";
  const statuss=document.getElementById("status");
  const button=document.getElementsByClassName("btn")[0];
  const winFactors=[[0,4,8],[0,3,6],[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
  let clicked;
  let turn=true;
  
  var i;
 

  

  for(i=0;i<gameBoard.length;i++){
    gameBoard[i].setAttribute("class","square");
    gameBoard[i].addEventListener('click',clicks,{once:true});
    gameBoard[i].addEventListener('mouseenter',hoverStyle);
    gameBoard[i].addEventListener('mouseleave',hoverRevert);
    gameBoard[i].addEventListener('click',checkWinner);
     
  } 
  
  function clicks(event) {
    var plays= Array.from(squares);
   var index = plays.indexOf(event.target)
   console.log(plays);
    
    if(turn==true || clicked==os ){
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
 
  function restart(){
    for(i=0;i<gameBoard.length;i++){
    gameBoard[i].innerHTML = '';
    gameBoard[i].classList.remove("X");
    gameBoard[i].classList.remove("O");
    
    statuss.classList.remove("you-won");
    statuss.innerHTML = "Move your mouse over a square and click to play an X or an O";
    
     } 
  }
  button.addEventListener('click',restart);
})
