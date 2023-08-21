#!/usr/bin/env node

import gameLogic from '../src/index.js';

const rules = 'What is the result of the expression?';

const symbols = ['-', '*', '+'];
const randomNumber = () => Math.round((Math.random() * 20));
const randomSymbol = () => symbols[Math.floor(Math.random() * 3)];

const makeExpression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(`${randomNumber()} ${randomSymbol()} ${randomNumber()}`);
  }
  return result;
};
const task = makeExpression();

const getRightAnswer = (arr) => {
  const tempResult = [];

  for (let i = 0; i < arr.length; i += 1) {
    const arrOfElements = arr[i].split(' ');
    tempResult.push(arrOfElements);
  }

  const endResult = [];
  for (let i = 0; i < tempResult.length; i += 1) {
    const [firstDig, symbol, secondDig] = tempResult[i];
    let expression;

    if (symbol === symbols[0]) {
      expression = Number(firstDig) - Number(secondDig);
      endResult.push(expression.toString());
    } else if (symbol === symbols[1]) {
      expression = Number(firstDig) * Number(secondDig);
      endResult.push(expression.toString());
    } else if (symbol === symbols[2]) {
      expression = Number(firstDig) + Number(secondDig);
      endResult.push(expression.toString());
    }
  }

  return endResult;
};

const rightAnswer = getRightAnswer(task);

gameLogic(rules, task, rightAnswer);
