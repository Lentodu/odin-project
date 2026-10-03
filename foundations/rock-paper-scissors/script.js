const choices = ["rock", "paper", "scissors"];

//set Round
function inputRound() {
  let round = Number(prompt("Set Round: "));
  return round;
}

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Your choice is (rock, paper, scissors). Whats your choice: ",
  ).toLowerCase();
  //check if the choices is right or no
  while (!choices.includes(humanChoice)) {
    alert("Choice one between (rock, paper, scissors)!");
    humanChoice = prompt(
      "Your choice is (rock, paper, scissors). Whats your choice: ",
    ).toLowerCase();
  }
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanWins =
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper");
    if (humanWins) {
      humanScore++;
      alert(`You win! ${humanChoice} beats ${computerChoice}`);
      console.log("Human Win!");
    } else if (humanChoice === computerChoice) {
      alert(`It's a tie! You both chose ${humanChoice}`);
      console.log("Tie!");
    } else {
      computerScore++;
      alert(`You lose! ${computerChoice} beats ${humanChoice}`);
      console.log("Computer Win!");
    }
  }

  const round = inputRound();
  //play game depends on the round
  for (let i = 0; i < round; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    alert(`Human score: ${humanScore} - Computer score: ${computerScore}`);
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
  //final score
  if (humanScore > computerScore) {
    alert("Human Win the Game!");
    console.log("Human Win the Game!");
  } else if (computerScore > humanScore) {
    alert("Computer Win the Game!");
    console.log("Computer Win the Game!");
  } else {
    alert("Tie!");
    console.log("Tie!");
  }
}

playGame();
