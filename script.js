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
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors!";
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    return "Try again!";
  }
}


let playerSelection = prompt("Rock, Paper, or Scissors?");
playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice()

console.log(`You chose ${playerSelection}, your opponent picked ${computerSelection}.`);

console.log(playRound(playerSelection, computerSelection));