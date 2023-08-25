import gameLogic from '../index.js';
import { isEven, randomNumber } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const pair = [];
  pair.push(randomNumber());
  pair.push(isEven(pair[0]) ? 'yes' : 'no');

  return pair;
};

const evenGame = () => {
  gameLogic(description, generateRound);
};

export default evenGame;
