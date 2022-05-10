const renderScores = (scores) => {
  const scoresContainer = document.getElementById('scores-container');
  scoresContainer.innerHTML = '';

  scores.forEach((score) => {
    scoresContainer.append(createScoreNode(score));
  });
}


const createScoreNode = (score) => {
  const scoreNode = document.createElement('li');

  scoreNode.innerHTML = `
    <li data-score-id="${score.id}" class="score-item">${score.name}: ${score.score}</li>
  `;

  return scoreNode;
}

export { renderScores }