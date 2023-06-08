let playerCounter = 0;
let computerCounter = 0;
let numberOfRounds = 5;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const resetGame = function () {
  playerCounter = 0;
  computerCounter = 0;
  numberOfRounds = 5;
};

const playRound = function (e) {
  numberOfRounds--;
  const getRandomNumber = function (max) {
    return Math.floor(Math.random() * max);
  };

  const getComputerChoice = function () {
    const options = ["Rock", "Paper", "Scissors"];
    return options[getRandomNumber(options.length)];
  };

  const computerSelection = getComputerChoice();
  const playerSelection = `${this.className[0].toUpperCase()}${this.className
    .toLowerCase()
    .slice(1)}`;

  const checkRound = function (computerSelection, playerSelection) {
    if (
      playerSelection != "Rock" &&
      playerSelection != "Paper" &&
      playerSelection != "Scissors"
    ) {
      return `${playerSelection} is not a valid selection, try these: ('Rock', 'Paper' or 'Scissors') `;
    } else if (computerSelection === playerSelection) {
      return `It's a TIE!! both are ${playerSelection}`;
    } else if (
      (computerSelection === "Rock" && playerSelection === "Paper") ||
      (computerSelection === "Paper" && playerSelection === "Scissors") ||
      (computerSelection === "Scissors" && playerSelection === "Rock")
    ) {
      playerCounter++;
      return `You WON!! ${playerSelection} beats ${computerSelection} `;
    } else {
      computerCounter++;
      return `You LOSE!! ${playerSelection} is not match for ${computerSelection} `;
    }
  };
  alert(`You've chosen: ${playerSelection}`);
  alert(`The computer has chosen: ${computerSelection}`);
  alert(checkRound(computerSelection, playerSelection));

  if (numberOfRounds === 0) {
    const checkFinalResults = function (playerCounter, computerCounter) {
      if (playerCounter === computerCounter) {
        return `FINAL RESULTS: It's a TIE!!
        PLAYER - ${playerCounter}
        COMPUTER - ${computerCounter}`;
      } else if (playerCounter > computerCounter) {
        return `FINAL RESULTS: You WON!!
        PLAYER - ${playerCounter}
        COMPUTER - ${computerCounter}`;
      } else {
        return `FINAL RESULTS: You LOSE!!
        PLAYER - ${playerCounter}
        COMPUTER - ${computerCounter}`;
      }
    };
    alert(checkFinalResults(playerCounter, computerCounter));
    resetGame();
  }
};

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
