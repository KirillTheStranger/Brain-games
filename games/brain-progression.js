#!/usr/bin/env node

import gameLogic from '../src/index.js';

const rules = 'What number is missing in the progression?';

const randomNumber = () => Math.round((Math.random() * 9));

const makeExpression = () => {
  const taskArray = [];
  const answerArray = [];
  const emptySpot = '..';
  for (let i = 1; i <= 3; i += 1) {
    let elementOfTask = '';
    let elementOfAnswer = '';
    const randomEmptySpot = randomNumber();
    const randomStartNumber = randomNumber();
    const randomIndex = randomNumber() + 1;
    for (let k = 0, j = randomStartNumber; k < 10; k += 1, j += randomIndex) {
      if (k === randomEmptySpot) {
        elementOfTask = `${elementOfTask} ${emptySpot}`;
        elementOfAnswer = `${j}`;
      } else {
        elementOfTask = `${elementOfTask} ${j}`;
      }
    }
    taskArray.push(elementOfTask);
    answerArray.push(elementOfAnswer);
  }

  const result = [...taskArray, ...answerArray];
  return result;
};

const globalArray = makeExpression();

let rightAnswer = [];
for (let i = 0; i < 3; i += 1) {
  const lastElement = globalArray.pop();
  rightAnswer.push(lastElement);

  globalArray[i] = globalArray[i].trim();
}

rightAnswer = rightAnswer.reverse();
const task = globalArray;

gameLogic(rules, task, rightAnswer);
