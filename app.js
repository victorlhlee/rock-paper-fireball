function start(message){
  var player = {seal: 0};
  var computer = {seal: 0};
  console.log(message);
  player.seal = prompt("What's yo weapon biotch?");
  computer.seal = Math.round(Math.random()* 2);
  this.compare(player, computer);
}

function compare(player, computer) {
  
  var fate = ((player + computer)%2);

  if ( fate === 0 ) {
   
    if ( player.seal === 0 ){
      message = "Player Wins";
    }
    if ( computer.seal === 0 ){
      message = "Computer Wins";
    } 
    if ( player.seal === 0 && computer.seal === 0 ) {
      message = "TIE";
    } 

  }

  if ( fate === 1 ){

    if ( player.seal > computer.seal){
      message = "Player Wins";
    } else {
      message = "Computer Wins";
    }
  }
  
  return this.start(message);

};