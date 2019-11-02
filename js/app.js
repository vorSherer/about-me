'use strict';

var tallyWins = 0 // Initialize the count of correct answers

//Ask user for their name
var userName = prompt('Before we begin, may I have your name, please?');
console.log('User entered name ', userName);
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
  tallyWins++;
} else {
  alert('Nope card.');
}
console.log('Correct guesses: ', tallyWins);

// Second Question
var gradCity = prompt('Did I graduate in San Jose, CA?').toLowerCase();
console.log('Graduate in San Jose?:', gradCity);

if (gradCity === 'yes' || gradCity === 'y') {
  alert('Yes, I did. Good job!');
  tallyWins++;
} else {
  alert('OK, so you slept through that part.');
}
console.log('Correct guesses: ', tallyWins);

// Third Question
var collegeDegree = prompt(
  'From what you read, do I have a four year college degree?'
).toLowerCase();
console.log('College Degree', collegeDegree);
if (collegeDegree === 'no' || collegeDegree === 'n') {
  alert('Ding! Ding! Ding! You are correct!  I thought I might catch you with that one.');
  tallyWins++;
} else {
  alert('Sorry. It was High School + a 2-year degree later.');
}
console.log('Correct guesses: ', tallyWins);

//Fourth Question
var workedInLA = prompt('Did I work in Los Angeles, CA?').toLowerCase();
console.log('work in Los Angeles?:', workedInLA);

if (workedInLA === 'no' || workedInLA === 'n') {
  alert('Good attention to detail!');
  tallyWins++;
} else {
  alert('No, it was the San Fernando valley, north of LA!');
}
console.log('Correct guesses: ', tallyWins);

//Fifth Question
var hireMe = prompt('From what you read, would you hire me?');
console.log('Hire me?: ', hireMe);

if (hireMe === 'yes' || hireMe === 'y') {
  alert('Glad to hear that! Keep me in your network!');
  tallyWins++;
} else {
  alert('Really? Missing a prize....');
}
console.log('Correct guesses: ', tallyWins);

//Sixth Question
var grandkidQty = parseInt(prompt('I have grandkids, but fewer than 10. Care to guess how many?'));
console.log('first guess?: ', grandkidQty); //Display pre-loop guess in console

for( var i = 0; i < 4; i++) {
  console.log('What number?:', typeof grandkidQty); // Confirm current guess entering the loop

  if (grandkidQty === 9) { // Catching the correct guess...
    alert('You got it!');
    console.log('Correct guess: ', grandkidQty);
    tallyWins++;
    i = 5;
  } else if (grandkidQty < 9) { // Guess was too few...
    alert('No, too few. Try again.');
    grandkidQty = parseInt(prompt('Guess again: '));
    console.log('New guess?: ', grandkidQty);
  } else if (grandkidQty > 9) { //Guess was too many...
    alert('No, too many (or is it? Well, not that many YET). Try again.');
    grandkidQty = parseInt(prompt('Guess again: ')); //New guess to re-enter the loop.
    console.log('New guess?: ', grandkidQty);
  }
}
alert('For those who did not guess correctly, I have 9 - so far - and they are a joy! Spend much time around me and you will hear of them.');
console.log('Correct guesses: ', tallyWins);

//Seventh Question
var favoriteCookies;
favoriteCookies = ['ginger snaps', 'snickerdoodles', 'oatmeal raisin', 'molasses']; //Some of the top correct answers
var i = 0;
var cookieGuess = prompt('Can you guess one of my favorite cookie types? - Food, not web...');

while(i < 6) { // Let looping ensue! Six rounds only.
  console.log('What type of cookie?', cookieGuess);
  if (cookieGuess = favoriteCookies[0]) { // If 'ginger snaps' was guessed...
    alert('You got it! Ginger snaps is one of them.');
    console.log('Correct guess: ', cookieGuess);
    tallyWins++;
    break;
  } else if (cookieGuess = favoriteCookies[1]) { // If 'snickerdoodles' was guessed...
    alert('You got it! Snickerdoodle is one of them.');
    console.log('Correct guess: ', cookieGuess);
    tallyWins++;
    break;
  } else if (cookieGuess = favoriteCookies[2]) { // If 'oatmeal raisin' was guessed...
    alert('You got it! Oatmeal raisin is probably my favorite of all.');
    console.log('Correct guess: ', cookieGuess);
    tallyWins++;
    break;
  } else if (cookieGuess = favoriteCookies[3]) { // If 'molasses' was guessed...
    alert('You got it! Molasses cookies are among them.');
    console.log('Correct guess: ', cookieGuess);
    tallyWins++;
    break;
  } else if (i < 5) {
    cookieGuess = prompt('Sorry, that was not on my list. Try again...');
    i++;
  } else if (i = 5) {
    alert('Ohhhh. NO SOUP FOR YOU (and no COOKIES, either)!');
}
alert('Correct answers would have been...');
document.write( favoriteCookies.toString());
console.log('Correct guesses: ', tallyWins);

/*In addition to the user stories stated above, continue to use console.logs throughout the code to 
track the questions that are being asked to the user, and add additional CSS to style your HTML page. */

// Once the ordeal is finished, I bid the user farewell as follows, including their number of correct guesses;
alert(
  'See, ' +
    userName +
    ', that was not so bad! You got a total of ' + tallyWins + ' right out of the 7 questions.  As to that "hire me" answer, we should get some lunch and chat a bit... Hmm?');

// End of lab.