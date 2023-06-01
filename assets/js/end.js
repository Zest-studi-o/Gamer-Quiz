const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score-btn');
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//Converts into JSON array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
//Determines the maximum number of scores to show
const MaxHighScores = 5;
let saveHighScore = true;


getScores();

/**
 * Get the user final score
 * Lets the user store it in local storage
 * Establishes the maximum number of scores 
 * to show in the leader board
 * and opens the html page with the list
 */
function getScores() {
    finalScore.innerText = mostRecentScore;

    //Event listener for the input field
    username.addEventListener('keyup', () => {
        //The user cannot save a score if there is no username input
        //Prevents from saving a score if this has not been entered
        saveScoreBtn.disabled = !username.value;
    });

    saveHighScore = (e) => {
        e.preventDefault();
        //This constant holds the most recent score and the user name
        const score = {
            score: mostRecentScore,
            name: username.value,
        };

        //Pushes the score object into the highScores array
        highScores.push(score);
        //Sorts the array by score
        highScores.sort((a, b) => b.score - a.score);
        // Cuts the array at the max high scores
        highScores.splice(MaxHighScores);

        //Saves the array to the local storage 
        localStorage.setItem('highScores', JSON.stringify(highScores));
        // Opens the html high scores page
        window.location.assign('./high-scores.html');
    };
}