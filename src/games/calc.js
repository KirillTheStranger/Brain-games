import startGameLogic from '../index.js';
import randomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['-', '*', '+'];
  const randomOperator = operators[Math.floor(Math.random() * 3)];
  const min = 1;
  const max = 20;
  const number1 = randomNumber(min, max);
  const number2 = randomNumber(min, max);

  const pair = [];

  const question = `${number1} ${randomOperator} ${number2}`;
  pair.push(question);

  let answer;
  if (randomOperator === operators[0]) {
    answer = (number1 - number2).toString();
    pair.push(answer);
  } else if (randomOperator === operators[1]) {
    answer = (number1 * number2).toString();
    pair.push(answer);
  } else if (randomOperator === operators[2]) {
    answer = (number1 + number2).toString();
    pair.push(answer);
  }

  return pair;
};

const runCalcGame = () => {
  startGameLogic(description, generateRound);
};

export default runCalcGame;
