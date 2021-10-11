// CHEAT CODE

/** else if (userChoice === "bomb") {
    console.log("You F*** WON!")
    return "You won the WORLD"
  }
*/

// MOSSA DI USER

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    console.log("User uses ROCK");
    return "rock";
  } else if (userInput === "paper") {
    console.log("User uses PAPER");
    return "paper";
  } else if (userInput === "scissors") {
    console.log("User uses SCISSORS");
    return "scissors";
  } else {
    console.log("Choose between rock, paper, scissors");
    return "error";
  }
};

// MOSSA DI COMPUTER

const getComputerChoice = () => {
  var num = Math.floor(Math.random() * 3);
  if (num === 0) {
    console.log("Computer uses ROCK");
    return "rock";
  } else if (num === 1) {
    console.log("Computer uses PAPER");
    return "paper";
  } else if (num === 2) {
    console.log("Computer uses SCISSORS");
    return "scissors";
  }
};

//DETERMINAZIONE DEL VINCITORE

// ___PAREGGIO
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is TIE";
  }

  //___ PAPER VS ROCK
  else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer WIN";
    } else {
      return "The user WIN";
    }
  }

  //___ PAPER VS SCISSORS
  else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer WIN";
    } else {
      return "The user WIN";
    }
  }

  //___ ROCK VS SCISSORS
  else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer WIN";
    } else {
      return "The user WIN";
    }
  }
}

// GIOCO

function playGame() {
  var choice = "paPER";
  var userChoice = getUserChoice(choice);
  if (userChoice !== "error") {
    var computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
  }
}

playGame();

/** VERSIONE2
 * 
 * 
 * 
 * var cases = ["rock", "paper", "scissors"]

var uChoice = "paper"

var cChoice =Math.floor( Math.random()*3)

console.log("your choice is "+ uChoice)
console.log("the machine choice is "+ cases[cChoice])
var uW = "you win!"
var cW = "sorry, the machine wins"

if (cases[cChoice]===uChoice){
	console.log("tie")
}
else if (uChoice ==="rock"){
	if (cChoice === "scissors"){
		console.log(uW )
	}
	else{
		console.log(cW)
	}
}

else if (uChoice ==="scissors"){
	if (cChoice === "paper"){
		console.log(uW )
	}
	else{
		console.log(cW)
	}
}

else if (uChoice ==="paper"){
	if (cChoice === "rock"){
		console.log(uW )
	}
	else{
		console.log(cW)
	}
}
else if(cases.indexOf(uChoice)===-1){
	console.log("please type a valid choice")
}

//rock beats scissors
//scissors beat paper
//paper beats rock 
 */
