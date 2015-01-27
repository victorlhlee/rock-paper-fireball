var userChoice = prompt("rock, paper, scissors?");
var computerChoice = Math.round(Math.random()*2);
if (computerChoice === 0) {
    computerChoice = "rock";
} 
if(computerChoice === 1) {
    computerChoice = "paper";
} 
if(computerChoice === 2){
    computerChoice = "scissors";
}console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
if (choice1 === choice2) {
 return "The result is a tie!";
}
else if(choice1 === "paper") {
    
    if(choice2 === "rock") {
        return "paper wins";
    }
    else {
        return "scissors wins";
    }

}
compare (userChoice, computerChoice);
};

