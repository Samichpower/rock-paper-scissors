let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3) + 1;

  if (randomInt === 1) {
    return "rock";
  } else if (randomInt === 2) {
    return "paper";
  } else if (randomInt === 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    return "You win! Scissors beats Paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++
    return "You lose! Rock beats Scissors!";
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    computerScore++
    return "Wasted turn. Shame on you.";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();

    console.log(`The computer picked ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
  }

  
}

game();