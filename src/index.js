import './reset.css';
import './style.css';
import { createNewGame, fetchScores } from './modules/api-handler';

const init = async () => {
  await createNewGame();
  await fetchScores();
}

init();
