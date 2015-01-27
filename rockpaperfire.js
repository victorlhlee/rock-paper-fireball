
function start(){
    var playerChoice = prompt("what's yo weapon biotch?");
    var computerChoice = Math.round(Math.random()* 2);
    var outcome = playerChoice + computerChoice;
    this.compare(playerChoice, computerChoice);
}

var compare = function(playerChoice, computerChoice) {
if (outcome === 0 || outcome === 2 || outcome === 4) {
    return this.start();
} else if(outcome === 1 || outcome === 2 || outcome === 3 ) {
    computerChoice = "paper stackin";
// } else if (outcome === 1 || outcome === 2 || outcome === 3 ) {{
//     computerChoice = "scissors cutting sh*t up!";
// }
}
};

compare(playerChoice, computerChoice);



// if (computerChoice === 0) {
//     computerChoice = "rock n roll son";
// } else if(computerChoice === 1) {
//     computerChoice = "paper stackin";
// } else {
//     computerChoice = "scissors cutting sh*t up!";
// }console.log("Computer: " + computerChoice);