function start(){
  var player = {seal: 0};
  var computer = {seal: 0};
  player.seal = prompt("what's yo weapon biotch?");
  computer.seal = Math.round(Math.random()* 2);
  var fate = player + computer;
  this.compare(player, computer);
}

var compare = function(player, computer) {
  if (outcome === 0 || outcome === 2 || outcome === 4) {
    return this.start();
  }
  if (outcome === 1) {
    return player.seal; //whoever has the seal 1;
  } 
   computerChoice = "scissors cutting sh*t up!";
};

compare(choice1, choice2);