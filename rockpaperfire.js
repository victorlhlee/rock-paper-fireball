//Rock, Paper, Scissors: Weird Naruto Edition

var wins = 0;
var losses = 0;
var ties = 0;
var cycle = 0; var limit = 20;
var status = "Eternal struggle begins... ";


function ouroboros(){

  var jutsu1 = Math.round(Math.random()* 2);
  var jutsu2 = Math.round(Math.random()* 2);
  var indra = { seal: [ "Slug", "Frog", "Snake"]};
  var asura = { seal: [ "Slug", "Frog", "Snake"]};
  compare(jutsu1, jutsu2);
  console.log("Clash #"+(cycle+1)+": "+ "Indra invokes "+indra.seal[jutsu1]+", Asura invokes "+asura.seal[jutsu2]+". "+status);

}

function compare(indra, asura) {

  if (indra == asura) { 
    ties++; 
    status = "Stalemate.";
  } 
  else if ((indra - asura + 3) % 3 == 1) {
    wins++;
    status = "Indra wins.";
  }
  else { 
    losses++; 
    status = "Asura wins.";
  }

}

while(cycle<limit){
  ouroboros();
  cycle++;
}

console.log("\nBattle report:");
console.log("Indra and Asura have clashed "+limit+" times, with "+ties+" stalemates.");
console.log("Indra won "+ wins +" times, and Asura won "+ losses +" times.");
status = (wins > losses) ? "Indra takes over." : "Asura takes over.";
if(wins == losses) { status = "The struggle continues...";}
console.log(status);