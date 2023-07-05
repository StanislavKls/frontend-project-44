export default (answer, num, funGame) => {
  let result = false;
  if (funGame(num) && answer === 'yes') {
    result = true;
  }
  if (funGame(num) && answer !== 'yes') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
    result = false;
  }
  if (!funGame(num) && answer === 'no') {
    result = true;
  }
  if (!funGame(num) && answer !== 'no') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
    result = false;
  }

  return result;
};
