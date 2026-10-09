const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const target = document.querySelector("#target");
const result = document.querySelector("#result");
const scores = document.querySelector("#scores");
const resetButton = document.querySelector("#reset");
const buttons = document.querySelectorAll("#buttons button");

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  result.textContent = "";
  updateScore();
  target.disabled = false;
  setButtonDisabled(false);
}

function updateScore() {
  scores.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}

function setButtonDisabled(disabled) {
  buttons.forEach((button) => {
    button.disabled = disabled;
  });
}

function showWinner(targetScore) {
  if (computerScore !== targetScore && humanScore !== targetScore) {
    return;
  }

  if (humanScore === targetScore) {
    result.textContent += " | Human Wins!";
  } else {
    result.textContent += " | Computer Wins!";
  }

  setButtonDisabled(true);
}

function playRound(humanChoice, computerChoice) {
  const targetScore = Number(target.value);

  if (targetScore < 1 || !Number.isInteger(targetScore)) {
    result.textContent = "Enter a whole number, minimum 1.";
    return;
  }

  target.disabled = true;

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");
  if (humanWins) {
    humanScore++;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}, You get one point`;
  } else if (humanChoice === computerChoice) {
    result.textContent = `It's a tie! You both chose ${humanChoice}, Nobody gets points`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}, Computer gets a point`;
  }

  updateScore();
  showWinner(targetScore);
}

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    playRound(button.dataset.choice, getComputerChoice()),
  );
});

resetButton.addEventListener("click", () => resetGame());
