const createScoreNode = (score) => {
  const scoreNode = document.createElement('li');

  scoreNode.innerHTML = `
    <li data-score-id="${score.id}" class="score-item">${score.name}: ${score.score}</li>
  `;

  return scoreNode;
};

const renderScores = (scores) => {
  const scoresContainer = document.getElementById('scores-container');
  scoresContainer.innerHTML = scores.length > 0 ? '' : `<li>There are no submitted scores.</li>`;

  scores.forEach((score) => {
    scoresContainer.append(createScoreNode(score));
  });
};

export default renderScores;