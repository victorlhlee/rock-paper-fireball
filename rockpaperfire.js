
var playerChoice = prompt("what's yo weapon biotch?");
var computerChoice = Math.round(Math.random()* 2);
if (computerChoice === 0) {
    computerChoice = "rock n roll son";
} else if(computerChoice === 1) {
    computerChoice = "paper stackin";
} else {
    computerChoice = "scissors cutting sh*t up!";
}console.log("Computer: " + computerChoice);
var compare = function(choice1, choice2) {
if (computerChoice === 0) {
    computerChoice = "rock n roll son";
} else if(computerChoice === 1) {
    computerChoice = "paper stackin";
} else {
    computerChoice = "scissors cutting sh*t up!";
}
};

compare(choice1, choice2);