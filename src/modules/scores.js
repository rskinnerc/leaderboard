let scores = [];

const setScores = (result) => {
  scores = result;
};

const getScores = () => scores;

export { getScores, setScores };