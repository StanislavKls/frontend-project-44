#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { game, checkAnswer } from '../src/index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const brainGcd = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);

  const question = gcd(num1, num2);

  console.log(`Question: ${num1} ${num2}`);

  const answer = readlineSync.question('Your answer: ');

  return checkAnswer(answer, question);
};

const name = hello();
const greeter = 'Find the greatest common divisor of given numbers.';
game(name, greeter, brainGcd);

