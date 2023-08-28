import startGameLogic from '../index.js';
import { randomNumber } from '../helpers.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['-', '*', '+'];
  const randomOperator = operators[Math.floor(Math.random() * 3)];
  const firstRandomNumber = randomNumber();
  const secondRandomNumber = randomNumber();

  const pair = [];

  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  pair.push(question);

  let answer;
  if (randomOperator === operators[0]) {
    answer = (firstRandomNumber - secondRandomNumber).toString();
    pair.push(answer);
  } else if (randomOperator === operators[1]) {
    answer = (firstRandomNumber * secondRandomNumber).toString();
    pair.push(answer);
  } else if (randomOperator === operators[2]) {
    answer = (firstRandomNumber + secondRandomNumber).toString();
    pair.push(answer);
  }

  return pair;
};

const runCalcGame = () => {
  startGameLogic(description, generateRound);
};

export default runCalcGame;
