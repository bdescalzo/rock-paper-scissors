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

function getPlayerChoice() {
  let selection = prompt("Choose rock, paper or scissors!");
  return selection.toLowerCase();
}

// Returns 0 if player wins, 1 if computer wins and 2 if tie
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

function game() {
  let playerSelection, computerSelection, result;

  let playerWins, computerWins;

  // Play the game five times
  for (let i = 0; i < 5; i++) {
    // Choose for both players
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    // Play a round and store the result
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    switch (result) {
      case 0:
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerWins++;
        break;
      case 1:
        console.log(
          `Computer wins! ${computerSelection} beats ${playerSelection}`
        );
        computerWins++;
        break;
      case 2:
        console.log("Tie!");
    }
  }
  if (playerWins === computerWins) console.log("Tie!");
  // Print whoever won
  else
    console.log(
      playerSelection > computerSelection ? "Player wins" : "Computer wins"
    );
}

game();
