'use strict';

/* Manipulate DOM (Document Object Model)
    Structured representation of HTML documents.
    Allows Javascript to access HTML elements and styles to manipulate them.
    DOM = WEB APIs !== Javascript
*/

// Functions section
function newHighScore() {
  return docQuerySelText('.highscore', highScore());
}

function Score() {
  score--;
  docQuerySelText('.score', score);
}

function highScore() {
  if (score > highscore) {
    highscore = score;
    docQuerySelText('.highscore', highscore);
  }
}

const docQuerySelText = (element, message) =>
  (document.querySelector(element).textContent = message);

const docQuerySelValue = (element, message) =>
  (document.querySelector(element).value = message);

function styleWin() {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').style.fontSize = '12rem';
}

function styleDefault() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
}

// add +1 to the end to make sure that will be > 0
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    docQuerySelText('.message', '🚨 No Number!');

    // Player wins
  } else if (guess === secretNumber) {
    docQuerySelText('.message', '🎉  Nice Shot 🎉');
    docQuerySelText('.number', secretNumber);
    highScore();

    // CSS
    styleWin();

    // guess to high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      docQuerySelText(
        '.message',
        guess > secretNumber ? '⤴  To high...' : '⤵  To low...'
      );
      Score();
    } else {
      docQuerySelText('.score', 0);
      docQuerySelText('.message', 'Game Over');
    }
  }
});

//Play again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  docQuerySelText('.message', 'Start guessing...');
  docQuerySelText('.score', score);
  docQuerySelText('.number', '?');
  docQuerySelValue('.guess', '');
  styleDefault();
});
