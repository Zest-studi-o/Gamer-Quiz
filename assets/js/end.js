const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score-btn');
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//Converts into JSON array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//Shows 5 recent scores maximum
const MAX_HIGH_SCORES = 5;


getScores();

function getScores() {
    finalScore.innerText = mostRecentScore;

    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
    });

    saveHighScore = (e) => {
        e.preventDefault();

        const score = {
            score: mostRecentScore,
            name: username.value,
        };
        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(5);

        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.assign('./high-scores.html');
    };
}