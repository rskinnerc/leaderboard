import './style.css';
import { addScore, createNewGame, fetchScores } from './modules/api-handler.js';

const refreshBtn = document.getElementById('refresh-scores');
refreshBtn.addEventListener('click', async () => {
  await fetchScores();
});

const init = async () => {
  const form = document.forms['add-score'];
  const notification = document.getElementById('notification');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!e.target.elements.name.value || !e.target.elements.score.value) {
      notification.classList.remove('hidden');
      notification.classList.add('bg-red-600');
      notification.textContent = 'Please fill out all the required fields.';

      setTimeout(() => {
        notification.classList.add('hidden');
        notification.classList.remove('bg-red-600');
        notification.textContent = '';
      }, 3000);

      return;
    }

    await addScore({
      user: e.target.elements.name.value,
      score: e.target.elements.score.value,
    });

    notification.classList.remove('hidden');
    notification.classList.add('bg-green-600');
    notification.textContent = 'Your score was added. Please refresh the list.';

    setTimeout(() => {
      notification.classList.add('hidden');
      notification.classList.remove('bg-green-600');
      notification.textContent = '';
    }, 3000);

    form.reset();
    e.target.elements.name.focus();
  });

  await createNewGame();
  await fetchScores();
};

init();
