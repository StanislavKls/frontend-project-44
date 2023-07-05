#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { game, checkAnswer } from '../src/index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isPrimeStr = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const brainGcd = () => {
  const num = getRandomInt(100);
  const question = isPrimeStr(num);

  console.log(`Question: ${num}`);

  const answer = readlineSync.question('Your answer: ');

  return checkAnswer(answer, question);
};

const name = hello();
const greeter = 'Answer "yes" if given number is prime. Otherwise answer "no".';
game(name, greeter, brainGcd);
