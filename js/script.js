let playerWins = 0,
  computerWins = 0;

// Grab elements from DOM
const buttons = document.querySelectorAll(".btn");
const playerScoreEl = document.querySelector("#player-score");
const computerScoreEl = document.querySelector("#computer-score");
const currentResultEl = document.querySelector(".current-result");

// Functions that generate the computers choice in each round and ask for the players'

function getComputerChoice() {
  // 0 = Rock  1 = Paper  2 = Scissors
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      throw new RangeError();
  }
}

// When the player clicks a button, a game will be started with the buttons' option being sent as the player selection
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    game(e.target.id);
  });
});

// Played in each round: returns 0 if player wins, 1 if computer wins and 2 if tie
function playRound(playerSelection, computerSelection) {
  // In case of tie
  if (computerSelection === playerSelection) {
    return 2;
  }

  // If there's no tie
  if (playerSelection === "paper") {
    // Scissors beat paper: computer wins
    if (computerSelection === "scissors") {
      return 1;
    }

    // Paper beats rock: player wins
    if (computerSelection === "rock") {
      return 0;
    }
  } else if (playerSelection === "scissors") {
    // Rock beats scissors: computer wins
    if (computerSelection === "rock") {
      return 1;
    }

    // Scissors beat paper: player wins
    else if (computerSelection === "paper") {
      return 0;
    }
  } else if (playerSelection === "rock") {
    // Rock beats scissors: player wins
    if (computerSelection === "scissors") {
      return 0;
    }
    // Paper beats rock: computer wins
    else if (computerSelection === "paper") {
      return 1;
    }
  }

  console.log("incorrect: ", computerSelection, playerSelection);
}

function game(playerSelection) {
  // Count how many wins each player has

  // Choose for both players
  computerSelection = getComputerChoice();

  // Play a round and store the result
  currentResult = playRound(playerSelection, computerSelection);
  console.log(currentResult);
  switch (currentResult) {
    case 0:
      currentResultEl.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      playerWins++;
      break;
    case 1:
      currentResultEl.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}`;
      computerWins++;
      break;
    case 2:
      currentResultEl.textContent = "Tie!";
  }

  playerScoreEl.textContent = playerWins;
  computerScoreEl.textContent = computerWins;

  checkWinner();
}

function checkWinner() {
  if (playerWins === 5) {
    currentResultEl.classList.add("current-result--winner");
    currentResultEl.textContent = "PLAYER WON!";
    resetGame();
  } else if (computerWins === 5) {
    currentResultEl.classList.add("current-result--loser");

    currentResultEl.textContent = "COMPUTER WON!";
    resetGame();
  }
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
}
game();
