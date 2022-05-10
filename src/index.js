import './reset.css';
import './style.css';
import { addScore, createNewGame, fetchScores } from './modules/api-handler';

const refreshBtn = document.getElementById('refresh-scores');
refreshBtn.addEventListener('click', async () => {
  await fetchScores();
});

const init = async () => {
  const form = document.forms['add-score'];

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addScore({
      user: e.target.elements.name.value,
      score: e.target.elements.score.value
    })

    form.reset();
    e.target.elements.name.focus()
  });

  await createNewGame();
  await fetchScores();
}

init();


