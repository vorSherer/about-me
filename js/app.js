'use strict'

//Initial question, before .toLowerCase is applied.
var usertName = prompt("Before we begin, may I have your name, please?");
    console.log(userName);
    alert("Welcome, " + userName + "! Thank you for taking the interest. Are you ready to get started?"); 

/* Beginning the quiz in earnest;
    Questions to be answered: 
    Was I born in Kentucky?     A: n
    Did I graduate in San Jose, CA?     A: y
    From what you read, do I have a four year college degree?       A: n
    Did I work in Los Angeles, CA?      A: n
    From what you've read, would you hire me?       A: y */

    var answerOne = prompt("First question: Was I born in Kentucky?");
console.log(answerOne.toLowerCase());
var correctOne = "n" //This is the correct answer to the question.
if (answerOneDeriv == correctOne) { //This line tests whether the user's answer, converted to a single letter, matches the correct answer.
    alert("Correct! You're off to a good start! Next question: ");
} else {
    alert("Oh, bummer! Maybe you slept through that part. Well, here's a chance to redeem yourself with the next question: ");
}

//Begin converting mixed-case strings to lower case for processing.
    var string = str.toLowerCase();
    if (answer === "y" || answer === "yes") {
        answerDeriv = "y";
    } else {
        answerDeriv = "n";
    }

    var answerTwo = prompt("Did I graduate in San Jose, CA?");
    console.log(answerTwo.toLowerCase());
    var correctTwo = "y" //This is the correct answer to the question.
    
    var answerThree = prompt("From what you read, do I have a four year college degree?");
    console.log(answerThree.toLowerCase());
    var correctThree = "n" //This is the correct answer to the question.

    var answerFour = prompt("Did I work in Los Angeles, CA?");
    console.log(answerFour.toLowerCase());
    var correctFour = "n" //This is the correct answer to the question.
    
    var answerFive = prompt("From what you've read, would you hire me?");
    console.log(answerFive.toLowerCase());
    var correctFive = "y" //This is the correct answer to the question.
    

// Once the ordeal is finished, I bid the user farewell as follows; 
    alert("See, " + userName + ", that wasn't so bad! As to that final answer, let's get some lunch and chat a bit... Hmm?");

