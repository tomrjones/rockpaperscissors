function playGame () {

let getComputerChoice =  (Math.random())
    if (getComputerChoice < .34) {
        getComputerChoice = "rock";
        
    } else if (getComputerChoice < .67) {
        getComputerChoice = "paper"
        
    } else {
        getComputerChoice = "scissors";
        
    }
 

const computerSelection = getComputerChoice;
const playerChoice = prompt ("Choose your selection. Rock, Paper, or Scissors?");
let playerSelection = playerChoice.toLowerCase();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "Computer wins!";
        } else if (computerSelection === 'scissors') {
            return "Player wins!";
        } else {
            return "This round is a tie, both chose rock.";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return "Computer wins!";
        } else if (computerSelection === 'rock') {
            return "Player wins!";
        } else {
            return "This round is a tie, both chose paper.";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return "Player wins!";
        } else if (computerSelection === 'rock') {
            return "Computer wins!";
        } else {
            return "This round is a tie, both chose scissors.";
        }
    } else {
        return "You did not enter rock, paper, or scissors."
    }
}

let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

function keepScore (a, b, result) {
    if (roundResult === 'Player wins!') {
        return [++a, b];
        } else if (roundResult === 'Computer wins!') {
        return [a, ++b];
        } else {
            return [a,b];
        }
}   
[a, b] = keepScore(a, b, roundResult);
    console.log("Your score is " + a + " and the computer's score is " + b);
}

   
let a = 0
let b = 0

function playGames () {
    playGame();
    playGame();
    playGame();
    playGame();
    playGame();
    console.log("The game is over. The final score is, Player " + a + " Computer " + b)
}

playGames();