let playerCounter = 0;
let computerCounter = 0;
let numberOfRounds = 5;

const body = document.querySelector("body");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const playerSelectionDiv = document.createElement("div");
body.appendChild(playerSelectionDiv);
const computerSelectionDiv = document.createElement("div");
body.appendChild(computerSelectionDiv);
const checkRoundDiv = document.createElement("div");
body.appendChild(checkRoundDiv);
const finalResultsDiv = document.createElement("div");
body.appendChild(finalResultsDiv);

const resetGame = function () {
  playerCounter = 0;
  computerCounter = 0;
  numberOfRounds = 5;
  playerSelectionDiv.textContent = "";
  computerSelectionDiv.textContent = "";
  checkRoundDiv.textContent = "";
};

const playRound = function (e) {
  numberOfRounds--;
  finalResultsDiv.textContent = "";

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

  playerSelectionDiv.textContent = `You've chosen: ${playerSelection}`;
  computerSelectionDiv.textContent = `The computer has chosen: ${computerSelection}`;
  checkRoundDiv.textContent = checkRound(computerSelection, playerSelection);

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
    finalResultsDiv.textContent = checkFinalResults(
      playerCounter,
      computerCounter
    );
    resetGame();
  }
};

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
