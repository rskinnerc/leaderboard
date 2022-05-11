const createScoreNode = (score) => {
  const scoreNode = document.createElement('li');
  scoreNode.classList.add('odd:text-zinc-200', 'even:text-zinc-400', 'text-base', 'px-3', 'py-2', 'font-semibold', 'tracking-wider', 'flex', 'justify-between')
  scoreNode.innerHTML = `
    ${score.user} <span class="text-sky-100 bg-sky-500 py-0.5 px-2 rounded-lg">${score.score}</span>
  `;

  return scoreNode;
};

const renderScores = (scores) => {
  const scoresContainer = document.getElementById('scores-container');
  scoresContainer.innerHTML = scores.length > 0 ? '' : '<li class="text-sky-300 text-base px-3 py-2 font-semibold">There are no submitted scores.</li>';

  scores.forEach((score) => {
    scoresContainer.append(createScoreNode(score));
  });
};

export default renderScores;