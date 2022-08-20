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

