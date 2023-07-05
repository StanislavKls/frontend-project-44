const game = (name, greeter, gameFun) => {
  let count = 0;

  console.log(greeter);

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
  // eslint-disable-next-line eqeqeq
  if (answer == question) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.`);
  return false;
};
export { checkAnswer, game };
