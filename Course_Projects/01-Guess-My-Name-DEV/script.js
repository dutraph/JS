'use strict';

/* Manipulate DOM (Document Object Model)
    Structured representation of HTML documents.
    Allows Javascript to access HTML elements and styles to manipulate them.
    DOM = WEB APIs !== Javascript
*/
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Aeeeeee';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// add +1 to the end to make sure that will be > 0
const correctNumber = Math.trunc(Math.random() * 20) + 1;
// PAULO LOGIC
// document.querySelector('.check').addEventListener('click', function () {
//   let guessedNumber = Number(document.querySelector('.guess').value);
//   if (guessedNumber === correctNumber) {
//     let winMsg = (document.querySelector('.message').textContent = 'Aeeeeee');
//     // let highscore = document.querySelector('.highscore').textContent;
//     // let score = document.querySelector('.score').textContent;
//     winMsg;
//     document.querySelector('.highscore').textContent = document.querySelector(
//       '.score'
//     ).textContent;
//   } else {
//     document.querySelector('.message').textContent = 'Try Again....';
//     let typeScore = Number(document.querySelector('.score').textContent);
//     document.querySelector('.score').textContent -= 1;
//     if (document.querySelector('.score').textContent == 0) {
//       document.querySelector('.message').textContent = 'Game Over';
//     }
//   }
// });

// Course logic + Paulo
// document.querySelector('.number').textContent = correctNumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🚨 No Number! ';
  } else if (guess === correctNumber) {
    document.querySelector('.message').textContent = '🎉  Nice Shot 🎉 ';
    document.querySelector('.highscore').textContent = document.querySelector(
      '.score'
    ).textContent;
    document.querySelector('.number').textContent = correctNumber;
  } else if (guess > correctNumber) {
    document.querySelector('.message').textContent =
      'To high, try again... 👎 ';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < correctNumber) {
    document.querySelector('.message').textContent = 'To low, try again... 👎 ';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (document.querySelector('.score') == 0) {
    document.querySelector('.message').textContent = 'Game Over';
  }
});
