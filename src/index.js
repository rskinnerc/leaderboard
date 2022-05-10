import './reset.css';
import './style.css';
import { gameId, setGame } from "./modules/game";
import { scores } from './modules/scores.js';
import renderScores from './modules/render.js';

const init = async () => {
  const game = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ name: "Micronauts Game" })
  });

  game.json().then((res) => {
    setGame(/\w{20}/.exec(res.result));
  });
}

init();
renderScores(scores);
