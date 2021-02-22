'use strict';

/* Manipulate DOM (Document Object Model)
    Structured representation of HTML documents.
    Allows Javascript to access HTML elements and styles to manipulate them.
    DOM = WEB APIs !== Javascript
*/


/**
 * MUTABLES
 */
// add +1 to the end to make sure that will be > 0
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



/**
 * FUNCTIONS
 */
const querySelector = document.querySelector.bind(document)
const body = querySelector('body')

const newHighScore = () => docQuerySelText('.highscore', highScore());
const docQuerySelText = (element, message) => querySelector(element).textContent = message;
const docQuerySelValue = (element, message) => querySelector(element).value = message;

const Score = () => {
  score--;
  docQuerySelText('.score', score);
}

const highScore = () => {
  if (score <= highscore) return;

  highscore = score;
  docQuerySelText('.highscore', highscore);
}

const styleWin = () => {
  const $number = querySelector('.number')

  $number.style.width = '30rem';
  $number.style.fontSize = '12rem';

  body.style.backgroundColor = '#60b347';
}

const styleDefault = () => {
  const $number = querySelector('.number')

  $number.style.width = '15rem';
  $number.style.fontSize = '6rem';

  body.style.backgroundColor = '#222';
}

const restartGame = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  docQuerySelText('.message', 'Start guessing...');
  docQuerySelText('.score', score);
  docQuerySelText('.number', '?');
  docQuerySelValue('.guess', '');

  styleDefault();
}

const gameWin = () => {
  // Player wins
  docQuerySelText('.message', '🎉  Nice Shot 🎉');
  docQuerySelText('.number', secretNumber);
  highScore();

  // CSS
  styleWin();
}

const gameOver = () => {
  docQuerySelText('.score', 0);
  docQuerySelText('.message', 'Game Over');
}

const gameGuess = (message) => {
  Score();
  docQuerySelText('.message', message);
}

querySelector('.check')
  .addEventListener('click', function () {
    const guess = +querySelector('.guess').value;

    if (!guess) return docQuerySelText('.message', '🚨 No Number!');

    if (guess === secretNumber) return gameWin()

    if (score <= 1) return gameOver()

    console.log(1)

    gameGuess(
      guess > secretNumber
        ? '⤴  To high...'
        : '⤵  To low...'
    )
  });

//Play again button
querySelector('.again').addEventListener('click', restartGame);
