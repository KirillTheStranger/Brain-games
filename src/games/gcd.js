import startGameLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const min = 1;
  const max = 100;
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);

  const pair = [];
  const question = `${number1} ${number2}`;
  pair.push(question);

  let minNumber = number1;
  if (number2 < number1) {
    minNumber = number2;
  }

  let maxDivider;
  for (let i = 1; i <= minNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      maxDivider = i;
    }
  }
  const answer = maxDivider.toString();
  pair.push(answer);

  return pair;
};

const runGcdGame = () => {
  startGameLogic(description, generateRound);
};

export default runGcdGame;
