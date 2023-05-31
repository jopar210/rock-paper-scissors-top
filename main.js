const getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

const getComputerChoice = function () {
  const options = ["Rock", "Paper", "Scissors"];
  const answer = options[getRandomNumber(options.length)];
};

getComputerChoice();
