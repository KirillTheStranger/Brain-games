#!/usr/bin/env node

import gameLogic from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNumber = () => Math.round((Math.random() * 30));

const task = [];
for (let i = 0; i < 3; i += 1) {
  task.push(randomNumber() + 3);
}

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const rightAnswer = [isPrime(task[0]) ? 'yes' : 'no', isPrime(task[1]) ? 'yes' : 'no', isPrime(task[2]) ? 'yes' : 'no'];

gameLogic(rules, task, rightAnswer);
