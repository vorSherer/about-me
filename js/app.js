'use strict';

var tallyWins = 0; // Initialize the count of correct answers

//Ask user for their name
var userName = prompt('Before we begin, may I have your name, please?');
console.log('User entered name ', userName);
alert(
  'Welcome, ' +
    userName +
    '! Thank you for taking the interest. Are you ready to get started?'
);

//First Question//
function cardCPUs () {
  var useArduinos = prompt('First question: Is working with Arduinos listed among my history?').toLowerCase();
  console.log('use Arduinos?: ', useArduinos);
  if (useArduinos === 'no' || useArduinos === 'n') {
    alert('Nailed It! Raspberry Pi, yes. Arduino, not yet.');
    tallyWins++;
  } else {
    alert('Nope card.');
  }
  console.log('Correct guesses: ', tallyWins);
}

// Second Question
function militaryPast() {
  var marinesPast = prompt('I have had direct influences by four of the five branches of the U.S. military. Were the Marines specifically mentioned in my Bio?').toLowerCase();
  console.log('marinesPast?: ', marinesPast);

  if (marinesPast === 'yes' || marinesPast === 'y') {
    alert('Yes, they were. Good job!');
    tallyWins++;
  } else {
    alert('OK, so you slept through that part.');
  }
  console.log('Correct guesses: ', tallyWins);
}

// Third Question
function degree() {
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
}

//Fourth Question
function writer() {
  var publishedYet = prompt('I mentioned writing; did I say whether I am published?').toLowerCase();
  console.log('Published writer yet?:', publishedYet);
  if (publishedYet === 'no' || publishedYet === 'n') {
    alert('Good attention to detail!');
    tallyWins++;
  } else {
    alert('No, I have one serious project in work and ideas for several more, but none are yet ready for Prime Time.');
  }
  console.log('Correct guesses: ', tallyWins);
}

//Fifth Question
function bonusQ() {
  var hireMe = prompt('From what you read, would you hire me?');
  console.log('Hire me?: ', hireMe);

  if (hireMe === 'yes' || hireMe === 'y') {
    alert('Glad to hear that! Keep me in your network!');
    tallyWins++;
  } else {
    alert('Really? Missing a prize....');
  }
  console.log('Correct guesses: ', tallyWins);
}

//Sixth Question
function occupationalTherapy() {
  var grandkidQty = parseInt(prompt('I have grandkids, but fewer than 10. Care to guess how many?'));
  //console.log('first guess?: ', grandkidQty); //Display pre-loop guess in console

  for( var i = 0; i < 4; i++) {
    //  console.log('What number?:', typeof grandkidQty); // Confirm current guess entering the loop

    if (grandkidQty === 9) { // Catching the correct guess...
      alert('You got it!');
      //console.log('Correct guess: ', grandkidQty);
      tallyWins++;
      i = 5;
    } else if (grandkidQty < 9) { // Guess was too few...
      alert('No, too few. Try again.');
      grandkidQty = parseInt(prompt('Guess again: '));
      //console.log('New guess?: ', grandkidQty);
    } else if (grandkidQty > 9) { //Guess was too many...
      alert('No, too many (or is it? Well, not that many YET). Try again.');
      grandkidQty = parseInt(prompt('Guess again: ')); //New guess to re-enter the loop.
      console.log('New guess?: ', grandkidQty);
    }
  }
  alert('For those who did not guess correctly, I have 9 - so far - and they are a joy! Spend much time around me and you will hear of them.');
  console.log('Correct guesses: ', tallyWins);
}

//Seventh Question
function guiltyPleasure() {
  var favoriteCookies;
  favoriteCookies = ['ginger snaps', 'snickerdoodles', 'oatmeal raisin', 'molasses']; //Some of the top correct answers
  var count = 0;
  var cookieGuess = prompt('Can you guess one of my favorite cookie types? - Food, not web...');

  while(count < 6) { // Let looping ensue! Six rounds only.
    console.log('What type of cookie?', cookieGuess);
    for (var i = 0; i < favoriteCookies.length; i++) {
      if (cookieGuess === favoriteCookies[i]) { // If one of the correct cookies was guessed...
        alert('You got it! ' + favoriteCookies[i] + ' is one of them.');
        console.log('Correct guess: ', cookieGuess);
        tallyWins++;
        count = 6;
        break;
      }
    }
    if (count < 6) {
      console.log('THis is the count: ', count);
      cookieGuess = prompt('Sorry, that was not on my list. Try again...');
      count++;
      console.log('new guess:' , cookieGuess);
    }
  }

  alert('Correct answers would have been...' + favoriteCookies);
  console.log('Correct guesses: ', tallyWins);
}

//Quiz button launches the questions as follows:
function quizQuestions() {
  cardCPUs();
  militaryPast();
  degree();
  writer();
  occupationalTherapy();
  guiltyPleasure();
  bonusQ();
  signOff();
}

// Once the ordeal is finished, I bid the user farewell as follows, including their number of correct guesses;
function signOff() {
  alert(
    'See, ' +
    userName +
    ', that was not so bad! You got a total of ' + tallyWins + ' right out of the 7 questions.  As to that "hire me" answer, we should get some lunch and chat a bit... Hmm?');
}

// End of lab.
