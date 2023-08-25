import gameLogic from '../index.js';
import { isEven, randomNumber } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
/*const task = [randomNumber(), randomNumber(), randomNumber()];
const rightAnswer = [isEven(task[0]) ? 'yes' : 'no', isEven(task[1]) ? 'yes' : 'no', isEven(task[2]) ? 'yes' : 'no'];*/

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
