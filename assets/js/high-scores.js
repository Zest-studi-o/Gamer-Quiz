const highScoresList = document.getElementById("high-score-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

/**
 * Gets the highest scores
 * from local storage
 */
getHighScores();

function getHighScores() {
  highScoresList.innerHTML = highScores
    .map(score => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");
}