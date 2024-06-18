function updateScore(team, points) {
    let scoreElement;

    if (team === 'home') {
        scoreElement = document.getElementById('home-score');
    } else if (team === 'guest') {
        scoreElement = document.getElementById('guest-score');
    }

    if (scoreElement) {
        let currentScore = parseInt(scoreElement.textContent);
        scoreElement.textContent = currentScore + points;
    }
}