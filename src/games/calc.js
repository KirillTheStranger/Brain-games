import gameLogic from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['-', '*', '+'];
const randomNumber = () => Math.round((Math.random() * 20));
const randomOperator = () => operators[Math.floor(Math.random() * 3)];

const makeExpression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(`${randomNumber()} ${randomOperator()} ${randomNumber()}`);
  }
  return result;
};
const task = makeExpression();

const getRightAnswer = (array) => {
  const tempResult = [];

  for (let i = 0; i < array.length; i += 1) {
    const arrayOfElems = array[i].split(' ');
    tempResult.push(arrayOfElems);
  }

  const endResult = [];
  for (let i = 0; i < tempResult.length; i += 1) {
    const [firstDig, operator, secondDig] = tempResult[i];
    let expression;

    if (operator === operators[0]) {
      expression = Number(firstDig) - Number(secondDig);
      endResult.push(expression.toString());
    } else if (operator === operators[1]) {
      expression = Number(firstDig) * Number(secondDig);
      endResult.push(expression.toString());
    } else if (operator === operators[2]) {
      expression = Number(firstDig) + Number(secondDig);
      endResult.push(expression.toString());
    }
  }

  return endResult;
};

const rightAnswer = getRightAnswer(task);

const calcGame = () => {
    gameLogic(description, task, rightAnswer);
};

export default calcGame;