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

if (workedInLA === 'yes' || workedInLA === 'y') {
  alert('No, it was the San Fernando valley, north of LA!');
} else {
  alert('Good attention to detail!');
}

var hireMe = prompt('From what you read, would you hire me?');
if (hireMe === 'yes' || hireMe === 'y') {
  alert('Glad to hear that! Keep me in your network!');
} else {
  alert('Really? Missing a prize....');
}

// Once the ordeal is finished, I bid the user farewell as follows;
alert(
  'See, ' +
    userName +
    ', that was not so bad! As to that final answer, we should get some lunch and chat a bit... Hmm?');
