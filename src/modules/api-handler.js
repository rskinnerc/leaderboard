import { setGame, gameId } from "./game";
import { setScores, scores } from "./scores";
import renderScores from './render.js';

const createNewGame = async () => {
  const game = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ name: "Micronauts Game" })
  });

  return await game.json().then((res) => {
    setGame(/\w{20}/.exec(res.result)[0]);
  });
};


const fetchScores = async () => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);

  return await res.json().then(({ result }) => {
    setScores(result);
    renderScores(scores);
  });
};

export { createNewGame, fetchScores }