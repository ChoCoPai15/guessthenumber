'use strict';

const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const message = document.querySelector('.message');

const number = document.querySelector('.guess');

const mainNumber = document.querySelector('.number');

const checkButton = document.querySelector('.check');

const againButton = document.querySelector('.again');

const labelScore = document.querySelector('.label-score');

const textScore = document.querySelector('.score');

const labelHighscore = document.querySelector('.label-highscore');

let score;

let hiddenNumber;

let highscore = 0;
const startGame = function () {
  score = 20;
  hiddenNumber = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  mainNumber.textContent = '?';
  message.textContent = 'ПОЧИНАЙ ВГАДУВАТИ...';
  textScore.textContent = score;
  h1.textContent = 'ВГАДАЙ ЧИСЛО!';
  number.value = '';
};
checkButton.addEventListener('click', function () {
  if (number.value > hiddenNumber) {
    message.textContent = '📈 ЗАНАДТО ВЕЛИКЕ!!!';
  } else if (number.value < hiddenNumber) {
    message.textContent = '📉 ЗАНАДТО МАЛЕ!!!';
  } else {
    message.textContent = '✔ ВІРНО!!!';
    body.style.backgroundColor = 'green';
    mainNumber.textContent = hiddenNumber;
    h1.textContent = 'ТИ ВИГРАВ!!!';
    if (score > highscore) {
      highscore = score;
      labelHighscore.textContent = `🥇 РЕКОРД: ${highscore}`;
    }
  }
  if (score > 0 && score != 1) {
    score -= 1;
    textScore.textContent = score;
  } else if (score === 1) {
    score -= 1;
    textScore.textContent = score;
    body.style.backgroundColor = 'red';
    h1.textContent = 'ТИ ПРОГРАВ!!!';
  }
});

againButton.addEventListener('click', startGame);

startGame();
