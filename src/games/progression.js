import startGameLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const makeProgression = (startNumber, stepOfProg, emptySpotPos, emptySpotValue) => {
  let question = '';
  let answer = '';
  for (let i = 1, j = startNumber; i <= 10; i += 1, j += stepOfProg) {
    if (i === emptySpotPos) {
      question = `${question} ${emptySpotValue}`;
      answer = `${j}`;
    } else {
      question = `${question} ${j}`;
    }
  }
  return [question.trim(), answer];
};

const generateRound = () => {
  const emptySpotPos = getRandomNumber(1, 10);
  const startNumber = getRandomNumber(3, 30);
  const stepOfProg = getRandomNumber(1, 10);
  const emptySpotValue = '..';

  const [question, answer] = makeProgression(startNumber, stepOfProg, emptySpotPos, emptySpotValue);
  return [question, answer];
};

const runProgressionGame = () => {
  startGameLogic(description, generateRound);
};

export default runProgressionGame;
