import gameLogic from '../index.js';
import { randomNumber } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const makePairOfNumbers = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(`${randomNumber()} ${randomNumber()}`);
  }
  return result;
};

const task = makePairOfNumbers();

const getRightAnswer = (arr) => {
  const tempResult = [];

  for (let i = 0; i < arr.length; i += 1) {
    const arrOfElements = arr[i].split(' ');
    tempResult.push(arrOfElements);
  }

  const endResult = [];
  for (let i = 0; i < tempResult.length; i += 1) {
    const firstNumber = tempResult[i][0];
    const secondNumber = tempResult[i][1];
    let minNumber = firstNumber;
    let maxDivider = 1;

    if (secondNumber < firstNumber) {
      minNumber = secondNumber;
    }

    for (let j = 2; j <= minNumber; j += 1) {
      if (firstNumber % j === 0 && secondNumber % j === 0) {
        maxDivider = j;
      }
    }
    endResult.push(maxDivider.toString());
  }
  return endResult;
};

const rightAnswer = getRightAnswer(task);

const gcdGame = () => {
  gameLogic(description, task, rightAnswer);
};

export default gcdGame;
