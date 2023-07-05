#!/usr/bin/env node
import hello from '../src/cli.js';
import game from '../src/game-engine.js';

const isEven = (num) => num % 2 === 0;

const name = hello();
game(name, isEven);
