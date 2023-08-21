#!/usr/bin/env node

import gameLogic from '../src/index.js';

export const randomNumber = () => Math.round((Math.random() * 100));
export let currentRandomNumber = Math.round((Math.random() * 100));
export const gameQuestion = `Question: ${currentRandomNumber}\nYour answer: `;
export const rightAnswer = currentRandomNumber % 2 === 0 ? 'yes' : 'no';

gameLogic();
