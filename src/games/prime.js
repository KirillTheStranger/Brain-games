import gameLogic from '../index.js';
import { isPrime, randomNumber } from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const pair = [];
  const question = randomNumber() * 13;
  pair.push(question);
  const answer = isPrime(pair[0]) ? 'yes' : 'no';
  pair.push(answer);

  return pair;
};

const primeGame = () => {
  gameLogic(description, generateRound);
};

export default primeGame;
