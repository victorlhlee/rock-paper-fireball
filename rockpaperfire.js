
// function start(){
//     var playerChoice = prompt("what's yo weapon biotch?");
//     var computerChoice = Math.round(Math.random()* 2);
//     var outcome = playerChoice + computerChoice;
//     this.compare(playerChoice, computerChoice);
// }

// var compare = function(playerChoice, computerChoice) {
// if (outcome === 0 || outcome === 2 || outcome === 4) {
//     return this.start();
// } else if(outcome === 1 || outcome === 2 || outcome === 3 ) {
//     computerChoice = "paper stackin";
// // } else if (outcome === 1 || outcome === 2 || outcome === 3 ) {{
// //     computerChoice = "scissors cutting sh*t up!";
// // }
// }
// };

// compare(playerChoice, computerChoice);


var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} alert("Computer: " + computerChoice);
var compare = function(choice1, choice2) {
if (choice1 === choice2) {
 return "The result is a tie!";
}
else if(choice1 ==="paper") {
    
    if(choice2 ==="rock") {
        return "paper wins";
    }
    else {
        return "scissors wins";
    }

}
};