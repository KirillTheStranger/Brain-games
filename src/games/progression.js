import gameLogic from '../index.js';
import { randomNumber } from '../helpers.js';

const description = 'What number is missing in the progression?';

const makeExpression = () => {
  const taskArray = [];
  const answerArray = [];
  const emptySpot = '..';
  for (let i = 1; i <= 3; i += 1) {
    let elementOfTask = '';
    let elementOfAnswer = '';
    const randomEmptySpot = randomNumber();
    const randomStartNumber = randomNumber();
    const randomIndex = randomNumber();
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

const progressionGame = () => {
  gameLogic(description, task, rightAnswer);
};

export default progressionGame;
