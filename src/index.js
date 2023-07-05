const game = (name, gameFun) => {
  let count = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (count < 3) {
    if (!gameFun()) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
    count += 1;
  }
};

const checkAnswer = (answer, question) => {
  if (answer == question) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.`);
  return false;
};
export { checkAnswer, game };
