var readlinesync = require('readline-sync');
var chalk = require('chalk');

var userName = readlinesync.question("Enter your Name: ")
console.log(chalk.blue.bold.bgGreen("welcome "+ userName));
console.log(chalk.yellowBright("This quiz is for cricket lovers and hope you will enjoy this quiz. Let's start the quiz and have fun!!\n"));
var score=0;

var allQuestions = [
  {question : "The Big Bash League is based in which country?\n a. India\n b. Australia\n c. England\n", answer : "b"},
  {question: "Who is a famous bowler who is known for his deadly Yorkers and slingy action?\n a. Lasith Malinga\n b. Rubel Hossain\n c. Shane Bond\n", answer: "a"},
  {question : "Who is the only British Prime Minister to have played first-class cricket?\n a. Winston Churchill\n b. John Major\n c. Alec Douglas-Home\n", answer : "c"},
  {question : "The highest team total record in test cricket is?\n a. 952\n b. 978\n c. 756\n", answer: "a"}, 
  {question : "Who was the first player to reach 10,000 runs in Test cricket?\n a. Kapil Dev\n b. Ravi Shastri\n c. Sunil Gavaskar\n", answer : "c"}, 
  {question : "Which player racked up the highest score in a single innings during the 2019 Cricket World Cup? (166)\n a. Rohit Sharma\n b. David Warner\n c. Virat Kohli\n", answer : "b"},
  {question : "What is a cricket ball made out of?\n a. Leather, rubber and plastic\n b. Cork, string and leather\n c. Wood, plastic and cardboard\n", answer : "b"},
  {question : "Why are white cricket balls used during one day internationals?\n a. So they're more visible in the evening\n b. It saves on bowlers laundry\n c. Someone thought it would be a bit of fun\n", answer : "a"},
  {question : "What does LBW stands for?\n a. Long ball wide\n b. Leg beyound wicket\n c. Leg before wicket\n", answer : "c"},
  {question : "How long does test cricket matches usually go on for?\n a. 90 minutes\n b. Over a week\n c. 3-5 days\n", answer : "c"},
  {question : "Who hit the first 6 sixes in a T20 over?\n a. Ravi Shastri\n b. Yuvraj Singh\n c. Sir Garfield Sobers\n", answer : "b"},{question : "The first world cup cricket was held in which year?\n a. 1975\n b. 1978\n c. 1980\n", answer : "a"},
  {question : "Which was the first team to remain unbeaten throughtout an edition of the ODI World Cup?\n a. Australia\n b. West Indies\n c. India\n", answer : "b"},
  {question : "How many overs are needed in a ODI if it rains?\n a. minimum 30 overs\n b. minimum 15 overs\n c. minimum 20 overs\n", answer : "c"},
  {question : "Who is the only batsman to hit a six off the first ball of a Test match?\n a. Chris Gayle\n b. Rohit Sharma\n c. AB de villiers\n", answer : "a"},
  ]

function quiz(question,answer) {
  var userAnswer = readlinesync.question(chalk.yellow(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right Answer"));
    score++;
    console.log(chalk.yellowBright("Your current score is : "+ score));
    console.log("===============================");
  }else {
    console.log(chalk.red("Wrong Answer"));
    score = score;
    console.log(chalk.yellowBright("Your current score is : "+ score));
    console.log("================================");
  }
}

for(var i=0; i<allQuestions.length; i++) {
  var currentQuestion = allQuestions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.green("Your total score is : " + score));
if(score > 11) {
  console.log(chalk.green("Congratulations!! you have achived a highest score."));
}
console.log();

console.log(chalk.yellowBright.bgBlue("Highest ranks    \n 1. Mohan: 12    \n 2. Vinay: 11    "));
console.log();
console.log(chalk.greenBright("Note : Please forward a screenshot if you achived the highest score"));