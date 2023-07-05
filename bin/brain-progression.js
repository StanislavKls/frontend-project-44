#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { game, checkAnswer } from '../src/index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const generateArithmeticProgression = (firstTerm, n) => {
  const progression = [];
  for (let i = 0; i < n; i += 1) {
    const term = firstTerm + (i * 2);
    progression.push(term);
  }
  return progression;
};

const brainProg = () => {
  const prog = generateArithmeticProgression(1, 10);
  const pos = getRandomInt(prog.length - 1);
  const question = prog[pos];
  prog[pos] = '..';

  console.log(`Question: ${prog.join(' ')}`);

  const answer = readlineSync.question('Your answer: ');

  return checkAnswer(answer, question);
};

const name = hello();
const greeter = 'What number is missing in the progression?';
game(name, greeter, brainProg);
