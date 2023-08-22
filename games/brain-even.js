#!/usr/bin/env node

import gameLogic from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomNumber = () => Math.round((Math.random() * 100));
const task = [randomNumber(), randomNumber(), randomNumber()];
const rightAnswer = [task[0] % 2 === 0 ? 'yes' : 'no', task[1] % 2 === 0 ? 'yes' : 'no', task[2] % 2 === 0 ? 'yes' : 'no'];

gameLogic(rules, task, rightAnswer);
