'use strict';
//DOM AND DOM MANIPULATION
//DOM Methods and properties for DOM manipulation are not part of JavaScript, DOM Methods are part of web API's(web apis are libraries).
//SELECTING AND MANIPULATING ELEMSNTS VIDEO
/*console.log();
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 100;*/

//HANDLING CLICK EVENTS VIDEO
//We use event Listeners to capture the activites that happen in the browser like click, hover etc
//With event listeners we can wait for a certain event to happen and can perform the desired actions
//Project- Reading value from input property
//Secret number code
let number = Math.trunc(Math.random() * 20) + 1;
//Scores code
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //taing value from browser
  console.log(guess, typeof guess);
  /*document.querySelector('.message').textContent = 'Correct Number'; */ //changing content in the browser
  if (!guess) {
    //When there is no Input
    //document.querySelector('.message').textContent = 'No Number!!!';
    displayMessage('No Number');
  } else if (guess === number) {
    displayMessage('Correct Number');
    //document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      //Guess too High
      document.querySelector('.message').textContent = //new code added after commenting below code
        guess > number ? 'Guess is too high!!' : 'Guess is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!!!!!');
      //document.querySelector('.message').textContent = 'You lost the game!!!!!';
      document.querySelector('.score').textContent = 0;
    }
  } /*else if (guess > number) {
    if (score > 1) {
      //Guess too High
      document.querySelector('.message').textContent = 'Guess is too high!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!!!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!!!!!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});
document.querySelector('.again').addEventListener('click', function () {
  console.log('INSIDE AGAIN BUTTON');
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
//IMPLEMENT THE GAME LOGIC VIDEO

//MANIPULATING CSS STYLES VIDEO

//CODING CHALLENGE 1
/*Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)*/
//IMPLEMENTING HIGH SCORES VIDEO
