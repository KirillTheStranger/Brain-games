import startGameLogic from '../index.js';
import randomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const pair = [];
  const question = randomNumber() * 13;
  pair.push(question);
  const answer = isPrime(pair[0]) ? 'yes' : 'no';
  pair.push(answer);

  return pair;
};

const runPrimeGame = () => {
  startGameLogic(description, generateRound);
};

export default runPrimeGame;
