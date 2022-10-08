var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "arbaaz",
    score: 4,
  },

  {
    name: "Ashu",
    score: 5,
  },
]

var questions = [{
  question: "How many Infinity Stones are there?",
  answer: "6"
}, {
  question: "What's Thor's axe called?",
  answer: "Stormbreaker"
},
{
  question: "Who is Tony Stark’s father?",
  answer: "Howard Stark"
}, {
  question: "Wanda and her brother Pietro are from where?",
  answer: "Sokovia"
}, {
  question: "Captain America’s shield and Bucky's arm are made of what?",
  answer: "Vibranium"
}
];


function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " let's see if you know Marvel Cinematic Universe");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("-------------")
}


function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}


function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
