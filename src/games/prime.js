import gameLogic from '../index.js';
import { isPrime, randomNumber } from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const pair = [];
  pair.push(randomNumber() + 3);
  pair.push(isPrime(pair[0]) ? 'yes' : 'no');

  return pair;
};

const primeGame = () => {
  gameLogic(description, generateRound);
};

export default primeGame;
