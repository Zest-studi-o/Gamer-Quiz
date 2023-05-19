
//Pulls questions and choices
const question = document.getElementById("question");
//Gets an array of the choices
const choices = Array.from(document.getElementsByClassName("choice-text"));

//Variables
let currentQuestion = {};
let acceptingAnswers = false; //the user can not answer before it is ready
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

//Objects
let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  }
];

//CONSTANTS
//How much its worth when getting an answer correct
const CORRECT_BONUS = 10;
//How many questions a user gets before they finish
const MAX_QUESTIONS = 3;

/**
 * Start the game at 0, copy the questions from questions array
 * and they are put into a new array
 */
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

/**
 * This function gets New Questions based on the lenght of the array
 * Grabs the choice property and get data attribute number to get the appropiate question
 * Questions and choices are populated
 */
getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {//if there are no questions left in the array or question counter gets to max
    //go to the end html page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1); //the questions are not repeated
  acceptingAnswers = true; //allow user to answer
};

/**
 * Fetch the choices as the user clicks
 * allows to select and answer
 */
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startGame();