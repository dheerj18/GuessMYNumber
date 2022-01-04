'use strict';
/*
console.log(document.querySelector('.message').textContent);
//changing the text content
document.querySelector('.message').textContent = 'correct number!';
document.querySelector('.number').textContent = 11;
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 23;
document.querySelector('.message').textContent = 'correct number!';

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
*/
//starting building the game
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//making code DRY using function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    displayMessage('⛔no number!!');

    //document.querySelector('.message').textContent = '⛔no number!';
  }
  //when the guess is correct
  else if (guess === secretNumber) {
    displayMessage('correct number!!');
    //document.querySelector('.message').textContent = 'correct number!';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '300px';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high!' : 'too low!');
      //document.querySelector('.message').textContent =
      // guess > secretNumber ? 'too high!' : 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU LOSE😐');
      //document.querySelector('.message').textContent = 'you loose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start Guessing..';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '150px';
  document.querySelector('.number').textContent = '?';
});
