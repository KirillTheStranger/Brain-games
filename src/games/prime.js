import gameLogic from '../index.js';
import { isPrime, randomNumber } from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = [];
for (let i = 0; i < 3; i += 1) {
  task.push(randomNumber() + 3);
}

const rightAnswer = [isPrime(task[0]) ? 'yes' : 'no', isPrime(task[1]) ? 'yes' : 'no', isPrime(task[2]) ? 'yes' : 'no'];

const primeGame = () => {
  gameLogic(description, task, rightAnswer);
};

export default primeGame;
