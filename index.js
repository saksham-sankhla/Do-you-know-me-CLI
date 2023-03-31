var readlineSync = require('readline-sync');
score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + " to do you know Saksham?");

function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right!")
    score = score + 1;
  } else { console.log("You are wrong!")}
  console.log("Current Score = " + score);
}

var questions = [{
  question: "Where do i live? ",
  answer: "jodhpur"
},{
  question: "Who is my favorite superhero? ",
  answer: "ironman"
}];

for (var i=0; i<questions.length; i=i+1){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}