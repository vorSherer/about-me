'use strict';

//Ask user for their name
var userName = prompt('Before we begin, may I have your name, please?');
console.log(userName);
alert(
  'Welcome, ' +
    userName +
    '! Thank you for taking the interest. Are you ready to get started?'
);

// First Question
var birthState = prompt('First question: Was I born in Kentucky?').toLowerCase();
console.log('Born in Kentucky?:', birthState);
if (birthState === 'no' || birthState === 'n') {
  alert('Nailed It! Must have been the accent that gave it away.');
} else {
  alert('Nope card.');
}

// Second Question
var gradCity = prompt('Did I graduate in San Jose, CA?').toLowerCase();
console.log('Graduate in San Jose?:', gradCity);

if (gradCity === 'yes' || gradCity === 'y') {
  alert('Yes, I did. Good job!');
} else {
  alert('OK, so you slept through that part.');
}

// Third Question
var collegeDegree = prompt(
  'From what you read, do I have a four year college degree?'
).toLowerCase();
console.log('College Degree', collegeDegree);
if (collegeDegree === 'no' || collegeDegree === 'n') {
  alert('Ding! Ding! Ding! You are correct!  I thought I might catch you with that one.');
} else {
  alert('Sorry. It was High School + a 2-year degree later.');
}

var workedInLA = prompt('Did I work in Los Angeles, CA?').toLowerCase();
console.log('work in Los Angeles?:', workedInLA);

if (workedInLA === 'no' || workedInLA === 'n') {
  alert('Good attention to detail!');
} else {
  alert('No, it was the San Fernando valley, north of LA!');
}

var hireMe = prompt('From what you read, would you hire me?');
console.log('Hire me?: ', hireMe);

if (hireMe === 'yes' || hireMe === 'y') {
  alert('Glad to hear that! Keep me in your network!');
} else {
  alert('Really? Missing a prize....');
}

var answerSix = parseInt(prompt('What number am I thinking of?'));
console.log('first guess?: ', answerSix);

for( var i = 0; i < 6; i++) {
  console.log('What number?:', typeof answerSix);

  if (answerSix === 5) {
    alert('You got it!');
    console.log('Correct guess: ', answerSix);
    i = 6;
  } else if (answerSix < 5) {
    alert('No, too low. Try again.');
    answerSix = parseInt(prompt('Guess again: '));
    console.log('New guess?: ', answerSix);
  } else if (answerSix > 5) {
    alert('No, too high. Try again.');
    answerSix = parseInt(prompt('Guess again: '));
    console.log('New guess?: ', answerSix);
  }
  console.log('Correct guess confirmed: ', answerSix);
}

/*As a user, I would like to be guided to an answer through a series of feedback responses so that I 
can learn more about the site owner.
Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess 
a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of 
some sort. */

/*As a user, I would like to guess the answer to a question that could have many possibilities so 
that I can have fun with with a guessing game.
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question. */

/*As a user, I would like to know my final score so that I can know how well I did.
Keep track of the total number of correct answers. At the end tell them how many they got correct 
out of the 7 questions asked.*/

/*In addition to the user stories stated above, continue to use console.logs throughout the code to 
track the questions that are being asked to the user, and add additional CSS to style your HTML page. */


// Once the ordeal is finished, I bid the user farewell as follows;
alert(
  'See, ' +
    userName +
    ', that was not so bad! As to that final answer, we should get some lunch and chat a bit... Hmm?');
