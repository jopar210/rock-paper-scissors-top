// const getRandomNumber = function (max) {
//   return Math.floor(Math.random() * max);
// };

// const getComputerChoice = function () {
//   const options = ["Rock", "Paper", "Scissors"];
//   return options[getRandomNumber(options.length)];
// };

// const computerSelection = getComputerChoice();

// const playerAnswer = prompt(
//   "Select an option: ('Rock', 'Paper' or 'Scissors'): "
// );
// const playerSelection = `${playerAnswer[0].toUpperCase()}${playerAnswer
//   .toLowerCase()
//   .slice(1)}`;

// const PlayRound = function (computerSelection, playerSelection) {
//   if (
//     playerSelection != "Rock" &&
//     playerSelection != "Paper" &&
//     playerSelection != "Scissors"
//   ) {
//     return `${playerSelection} is not a valid selection, try these: ('Rock', 'Paper' or 'Scissors') `;
//   } else if (computerSelection === playerSelection) {
//     return `Is a TIE!! both are ${playerSelection}`;
//   } else if (
//     (computerSelection === "Rock" && playerSelection === "Paper") ||
//     (computerSelection === "Paper" && playerSelection === "Scissors") ||
//     (computerSelection === "Scissors" && playerSelection === "Rock")
//   ) {
//     return `You WON!! ${playerSelection} beats ${computerSelection} `;
//   } else {
//     return `You LOSE!! ${playerSelection} is not match for ${computerSelection} `;
//   }
// };

// console.log(PlayRound(computerSelection, playerSelection));
// console.log(`You've chosen: ${playerSelection}`);
// console.log(`The computer has chosen: ${computerSelection}`);

const game = function (rounds) {
  let playerCounter = 0;
  let computerCounter = 0;
  for (i = 1; i <= rounds; i++) {
    const getRandomNumber = function (max) {
      return Math.floor(Math.random() * max);
    };

    const getComputerChoice = function () {
      const options = ["Rock", "Paper", "Scissors"];
      return options[getRandomNumber(options.length)];
    };

    const computerSelection = getComputerChoice();

    const playerAnswer = prompt(
      "Select an option: ('Rock', 'Paper' or 'Scissors'): "
    );
    const playerSelection = `${playerAnswer[0].toUpperCase()}${playerAnswer
      .toLowerCase()
      .slice(1)}`;

    const PlayRound = function (computerSelection, playerSelection) {
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
    console.log(PlayRound(computerSelection, playerSelection));
    console.log(`You've chosen: ${playerSelection}`);
    console.log(`The computer has chosen: ${computerSelection}`);
  }
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
  console.log(checkFinalResults(playerCounter, computerCounter));
};

game(3);
