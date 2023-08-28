import startGameLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const min = 1;
  const max = 10;
  const randomEmptySpotPosition = getRandomNumber(min, max);
  const randomStartNumber = getRandomNumber(min, max) * 3;
  const randomStepOfProgression = getRandomNumber(min, max);
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
