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
var answerOne = prompt('First question: Was I born in Kentucky?').toLowerCase();
console.log('Born in Kentucky?:', answerOne);
if (answerOne === 'no' || answerOne === 'n') {
  alert('Nailed It!');
} else {
  alert('O Bummer!');
}

// Second Question
var cityName = prompt('Did I graduate in San Jose, CA?').toLowerCase();
console.log('Graduate in San Jose?:', cityName);

if (cityName === 'yes' || cityName === 'y') {
  alert('Yes you are correct!');
} else {
  alert('Shucks');
}

// Third Question
var collegeNumber = prompt(
  'From what you read, do I have a four year college degree?'
).toLowerCase();
console.log('College Degree', collegeNumber);
if (collegeNumber === 'no' || collegeNumber === 'n') {
  alert('Ding Ding Ding you are correct!');
} else {
  alert('You are wrong');
}

var answerFour = prompt('Did I work in Los Angeles, CA?');
console.log(answerFour.toLowerCase());
var correctFour = 'n'; //This is the correct answer to the question.

var answerFive = prompt("From what you've read, would you hire me?");
console.log(answerFive.toLowerCase());
var correctFive = 'y'; //This is the correct answer to the question.

// Once the ordeal is finished, I bid the user farewell as follows;
alert(
  'See, ' +
    userName +
    ", that wasn't so bad! As to that final answer, let's get some lunch and chat a bit... Hmm?"
);
