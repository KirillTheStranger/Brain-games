import readlineSync from 'readline-sync';

const isNumberEven = () => {
  const isEven = (number) => {
    if (number % 2 === 0) {
      return true;
    }

    return false;
  };

  const randomNumber = () => Math.round((Math.random() * 100));
  let currentRandomNumber = randomNumber();

  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const firstAnswer = readlineSync.question(`Question: ${currentRandomNumber}\nYour answer: `);
  if (isEven(currentRandomNumber) && firstAnswer !== 'yes') {
    console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    return console.log(`Let's try again, ${userName}`);
  }
  if (!isEven(currentRandomNumber) && firstAnswer !== 'no') {
    console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
    return console.log(`Let's try again, ${userName}`);
  }

  console.log('Correct!');
  currentRandomNumber = randomNumber();

  const secondAnswer = readlineSync.question(`Question: ${currentRandomNumber}\nYour answer: `);
  if (isEven(currentRandomNumber) && secondAnswer !== 'yes') {
    console.log(`'${secondAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    return console.log(`Let's try again, ${userName}`);
  }
  if (!isEven(currentRandomNumber) && secondAnswer !== 'no') {
    console.log(`'${secondAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
    return console.log(`Let's try again, ${userName}`);
  }

  console.log('Correct!');
  currentRandomNumber = randomNumber();

  const thirdAnswer = readlineSync.question(`Question: ${currentRandomNumber}\nYour answer: `);
  if (isEven(currentRandomNumber) && thirdAnswer !== 'yes') {
    console.log(`'${thirdAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    return console.log(`Let's try again, ${userName}`);
  }
  if (!isEven(currentRandomNumber) && thirdAnswer !== 'no') {
    console.log(`'${thirdAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
    return console.log(`Let's try again, ${userName}`);
  }

  console.log('Correct!');

  return console.log(`Congratulations, ${userName}!`);
};

export default isNumberEven;
