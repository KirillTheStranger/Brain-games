import startGameLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  }
  return true;
};

const generateRound = () => {
  const min = 1;
  const max = 100;
  const question = getRandomNumber(min, max);

  const pair = [];
  pair.push(question);
  const answer = isEven(pair[0]) ? 'yes' : 'no';
  pair.push(answer);

  return pair;
};

const runEvenGame = () => {
  startGameLogic(description, generateRound);
};

export default runEvenGame;
