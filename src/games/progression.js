import startGameLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const makeProgression = (startNumber, stepOfProg) => {
  const progression = [];
  const progressionLength = 10;
  for (let i = 1, j = startNumber; i <= progressionLength; i += 1, j += stepOfProg) {
    progression.push(`${j}`);
  }

  return progression;
};

const generateRound = () => {
  const startNumber = getRandomNumber(3, 30);
  const stepOfProg = getRandomNumber(1, 10);

  const progression = makeProgression(startNumber, stepOfProg);

  const emptySpotPos = getRandomNumber(0, 9);
  const emptySpotValue = '..';

  let question = '';
  let answer = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === emptySpotPos) {
      question = `${question} ${emptySpotValue}`;
      answer = progression[i];
    } else {
      question = `${question} ${progression[i]}`;
    }
  }

  return [question.trim(), answer];
};

const runProgressionGame = () => {
  startGameLogic(description, generateRound);
};

export default runProgressionGame;
