import readlineSync from 'readline-sync';
import checkAnwer from './check.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

export default (name, gameFun) => {
  let count = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (count < 3) {
    const number = getRandomInt(100);

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (!checkAnwer(answer, number, gameFun)) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
    count += 1;
  }
};
