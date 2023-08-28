import startGameLogic from '../index.js';
import randomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  }
  return true;
};

const generateRound = () => {
  const pair = [];
  const question = randomNumber();
  pair.push(question);
  const answer = isEven(pair[0]) ? 'yes' : 'no';
  pair.push(answer);

  return pair;
};

const runEvenGame = () => {
  startGameLogic(description, generateRound);
};

export default runEvenGame;
