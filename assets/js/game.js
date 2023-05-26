//Pulls questions and choices
const question = document.getElementById("question");
//Gets an array of the choices
const choices = Array.from(document.getElementsByClassName("choice-text"));
//Player score counter
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");
//Loader
const loader = document.getElementById('loader');
const game = document.getElementById('game');

// Default Variables
let currentQuestion = {};
let acceptingAnswers = false; //the user can not answer before it is ready
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

//Fetch questions from API
let questions = [];

setGameLevel();

fetchQuestionsFromAPI();

//CONSTANTS
//How much its worth when getting an answer correct
const CORRECT_BONUS = 10;
//How many questions a user gets before they finish
const MAX_QUESTIONS = 5;

function setGameLevel() {
  //Fetch easy questions from API
  if (window.location.href.includes('easy')) {
    url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple';
  } else if (window.location.href.includes('medium')) {
    //Fetch medium questions from API
    url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
  } else {
    //Fetch hard questions from API
    url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=hard&type=multiple';
  }
}

 /**
 * Loads the questions
 * Get quesions from opentdb
 */
function fetchQuestionsFromAPI() {
  fetch(url)
    .then((res) => {
      return res.json(); //Return promise
    })
    .then((loadedQuestions) => {
      questions = loadedQuestions.results.map((loadedQuestion) => {
        const formattedQuestion = {
          question: loadedQuestion.question,
        };

        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
        answerChoices.splice(
          formattedQuestion.answer - 1,
          0,
          loadedQuestion.correct_answer
        );

        answerChoices.forEach((choice, index) => {
          formattedQuestion['choice' + (index + 1)] = choice;
        });

        return formattedQuestion;
      });
      if (questionCounterText) {
        startGame();
      }
    })
    .catch((err) => {
      console.log(err);
      //redirecting to 404 page if api request fails
      window.location.replace("./404.html");
    });
}

/**
 * Start the game at 0, copy the questions from questions array
 * and they are put into a new array
 */
function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  //To show and hide the loader
  game.classList.remove('hidden');
  loader.classList.add('hidden');
};

/**
 * This function gets New Questions based on the lenght of the array
 * Grabs the choice property and get data attribute number to get the appropiate question
 * Questions and choices are populated
 */
getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {//if there are no questions left in the array or question counter gets to max
    //go to the end html page
    return window.location.assign("./end.html");
  }
  questionCounter++;
  questionCounterText.innerHTML = `${questionCounter}/${MAX_QUESTIONS}`;  //Scoreboard - question counter
  localStorage.setItem("mostRecentScore", score); //Stores scores

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerHTML = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
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
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; //detect correct and incorrect answers

      //Adds correct answer bonus
      if (classToApply === "correct") {
        incrementScore(CORRECT_BONUS);
      }
  
      selectedChoice.parentElement.classList.add(classToApply); //the selected choice grabs the parent element and get the class to apply
  
      //Delays the question to control the time in showing the feedback colour
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);
    });
  });

//Score counter
  incrementScore = num => {
    score += num;
    scoreText.innerHTML = score;
  };