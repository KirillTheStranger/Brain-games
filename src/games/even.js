import gameLogic from '../index.js';
import { isEven, randomNumber } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const pair = [];
  const question = randomNumber();
  pair.push(question);
  const answer = isEven(pair[0]) ? 'yes' : 'no';
  pair.push(answer);

  return pair;
};

const evenGame = () => {
  gameLogic(description, generateRound);
};

export default evenGame;
