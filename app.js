function start(message){
  var player = {seal: 0};
  var computer = {seal: 0};
  console.log(message);
  player.seal = prompt("what's yo weapon biotch?");
  computer.seal = Math.round(Math.random()* 2);
  var fate = player + computer;
  this.compare(player, computer);
}

var compare = function(player, computer) {
  if (outcome === 0 || outcome === 4) {
    return this.start("renewal");
  }

  if (outcome === 1) {
    if ( player.seal === 1 ) {
      message = "Player Wins with PAPER";
    } else {
      message = "Computer Wins with PAPER";
    }
  } 

  if (outcome === 2) {
    if ( computer.seal === 0 ) {
      message = "Computer Wins with ROCK";
    }
    if (computer.seal === 2) {
      message = "Player Wins with ROCK";
    }
  } 

  if (outcome === 3) {
    if ( player.seal === 2 ) {
      message = "Player Wins with SCISSORS";
    } else {
      message = "Computer Wins with SCISSORS";
    }
  } 
  
  return this.start(message);

};