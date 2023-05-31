const getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

const getComputerChoice = function () {
  const options = ["Rock", "Paper", "Scissors"];
  return options[getRandomNumber(options.length)];
};

const computerSelection = getComputerChoice();

const userAnswer = prompt("Select an option ('Rock', 'Paper' or 'Scissors'): ");
const userSelection = `${userAnswer[0].toUpperCase()}${userAnswer
  .toLowerCase()
  .slice(1)}`;
