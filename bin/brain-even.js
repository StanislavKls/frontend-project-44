#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import game from '../src/game-engine.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEven = (num) => num % 2 === 0;

const checkAnwer = (answer, num) => {
  let result = false;
  if (isEven(num) && answer === 'yes') {
    result = true;
  }
  if (isEven(num) && answer !== 'yes') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
    result = false;
  }
  if (!isEven(num) && answer === 'no') {
    result = true;
  }
  if (!isEven(num) && answer !== 'no') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
    result = false;
  }

  return result;
};

const brainEven = () => {
  const number = getRandomInt(100);

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  return checkAnwer(answer, number);
};

const name = hello();
game(name, brainEven);
