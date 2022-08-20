function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3) + 1;

  if (randomInt === 1) {
    return "Rock";
  } else if (randomInt === 2) {
    return "Paper";
  } else if (randomInt === 3) {
    return "Scissors";
  }
}

console.log(getComputerChoice());