import { setGame, getGameId } from './game.js';
import { setScores, getScores } from './scores.js';
import renderScores from './render.js';

const createNewGame = async () => {
  const game = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ name: 'Micronauts Game' }),
  });

  return game.json().then((res) => {
    setGame(/\w{20}/.exec(res.result)[0]);
  });
};

const fetchScores = async () => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getGameId()}/scores`);

  return res.json().then(({ result }) => {
    setScores(result);
    renderScores(getScores());
  });
};

const addScore = async (newScore) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getGameId()}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newScore),
  });
};

export { createNewGame, fetchScores, addScore };