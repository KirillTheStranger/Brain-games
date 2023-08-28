import startGameLogic from '../index.js';
import randomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const min = 1;
  const max = 10;
  const randomEmptySpotPosition = randomNumber(min, max);
  const randomStartNumber = randomNumber(min, max) * 3;
  const randomStepOfProgression = randomNumber(min, max);
  const emptySpot = '..';

  const pair = [];
  let question = '';
  let answer = '';
  for (let i = 1, j = randomStartNumber; i <= 10; i += 1, j += randomStepOfProgression) {
    if (i === randomEmptySpotPosition) {
      question = `${question} ${emptySpot}`;
      answer = `${j}`;
    } else {
      question = `${question} ${j}`;
    }
  }
  pair.push(question.trim());
  pair.push(answer);

  return pair;
};

const runProgressionGame = () => {
  startGameLogic(description, generateRound);
};

export default runProgressionGame;
