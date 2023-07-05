#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { game, checkAnswer } from '../src/index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomInt(operations.length)];
};

const getResultOperation = (operation, num1, num2) => {
  if (operation === '+') {
    return num1 + num2;
  }
  if (operation === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};
const brainCalc = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const operation = getRandomOperation();
  const question = getResultOperation(operation, num1, num2);

  console.log(`Question: ${num1} ${operation} ${num2}`);

  const answer = readlineSync.question('Your answer: ');

  return checkAnswer(answer, question);
};

const name = hello();
const greeter = 'What is the result of the expression?';
game(name, greeter, brainCalc);
