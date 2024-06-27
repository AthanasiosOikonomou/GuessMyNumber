'use strict';

// initialize variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// eventlistener on button 'check' and calling the function 'checkingGuess'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  checkingGuess(guess);
});

// eventlistener on button 'again'
document.querySelector('.again').addEventListener('click', function () {
  // enable the buttons 'check' and 'again'
  disableCheck(false);
  disableGuess(false);
  // reset variables 'score' and 'secretNumber'
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // reset DOM
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayGuessMyNumber('Guess My Number!');
});

// function to disable or enable button 'guess'
const disableGuess = function (guessStatus) {
  document.querySelector('.guess').disabled = guessStatus;
};

// function to disable or enable button 'check'
const disableCheck = function (checkStatus) {
  document.querySelector('.check').disabled = checkStatus;
};

// function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// function to display score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// function to display h1
const displayGuessMyNumber = function (displayH) {
  document.querySelector('.guessMyNumber').textContent = displayH;
};

// game logic
function checkingGuess(guess) {
  // When player doesn't give input
  if (!guess) {
    displayMessage('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    disableGuess(true);
    disableCheck(true);
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayGuessMyNumber('Press Again to Play More !!!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When player give wrong answer
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
}
