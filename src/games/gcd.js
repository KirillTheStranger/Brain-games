import gameLogic from '../index.js';
import { randomNumber } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstRandomNumber = randomNumber() * 7;
  const secondRandomNumber = randomNumber() + 11;
  const pair = [];
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  pair.push(question);

  let minNumber = firstRandomNumber;
  if (secondRandomNumber < firstRandomNumber) {
    minNumber = secondRandomNumber;
  }

  let maxDivider;
  for (let i = 1; i <= minNumber; i += 1) {
    if (firstRandomNumber % i === 0 && secondRandomNumber % i === 0) {
      maxDivider = i;
    }
  }
  const answer = maxDivider.toString();
  pair.push(answer);

  return pair;
};

const gcdGame = () => {
  gameLogic(description, generateRound);
};

export default gcdGame;
