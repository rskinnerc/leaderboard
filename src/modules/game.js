let gameId = '';

const setGame = (id) => { gameId = id; };

const getGameId = () => gameId;

export { getGameId, setGame };