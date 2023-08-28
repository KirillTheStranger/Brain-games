import startGameLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, randomOperator, operators) => {
  let result;
  switch (randomOperator) {
    case operators[0]:
      result = (number1 - number2).toString();
      break;
    case operators[1]:
      result = (number1 * number2).toString();
      break;
    case operators[2]:
      result = (number1 + number2).toString();
      break;
    default:
      result = `Watch out of unknown operator: ${randomOperator}`;
  }
  return result;
};

const generateRound = () => {
  const operators = ['-', '*', '+'];
  const randomOperator = operators[getRandomNumber(0, 2)];
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);

  const question = `${number1} ${randomOperator} ${number2}`;

  const answer = calculate(number1, number2, randomOperator, operators);

  return [question, answer];
};

const runCalcGame = () => {
  startGameLogic(description, generateRound);
};

export default runCalcGame;
