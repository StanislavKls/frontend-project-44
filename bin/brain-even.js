#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { game, checkAnswer } from '../src/index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEvenString = (num) => (num % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  const number = getRandomInt(100);
  const question = isEvenString(number);

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  return checkAnswer(answer, question);
};

const name = hello();
game(name, brainEven);
