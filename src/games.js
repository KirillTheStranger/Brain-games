import readlineSync from 'readline-sync';

const isNumberEven = () => {
  const evenNumbers = [186, 593, 778];

  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const firstAnswer = readlineSync.question(`Question: ${evenNumbers[0]}\nYour answer: `);
  if (firstAnswer !== 'yes') {
    console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    return console.log(`Let's try again, ${userName}`);
  }

  console.log('Correct!');

  const secondAnswer = readlineSync.question(`Question: ${evenNumbers[1]}\nYour answer: `);
  if (secondAnswer !== 'no') {
    console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
    return console.log(`Let's try again, ${userName}`);
  }

  console.log('Correct!');

  const thirdAnswer = readlineSync.question(`Question: ${evenNumbers[2]}\nYour answer: `);
  if (thirdAnswer !== 'yes') {
    console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    return console.log(`Let's try again, ${userName}`);
  }

  console.log('Correct!');

  return console.log(`Congratulations, ${userName}!`);
};

export default isNumberEven;
