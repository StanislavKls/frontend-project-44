export default (name, gameFun) => {
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
