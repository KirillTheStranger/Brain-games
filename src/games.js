import readlineSync from 'readline-sync';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const randomNumber = () => Math.round((Math.random() * 100));
let currentRandomNumber = randomNumber();

const isCorrectAnswer = (answer) => {
  if (isEven(currentRandomNumber) && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    return console.log(`Let's try again, ${userName}`);
  }
  if (!isEven(currentRandomNumber) && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    return console.log(`Let's try again, ${userName}`);
  }
};

const isNumberEven = () => {

  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const firstAnswer = readlineSync.question(`Question: ${currentRandomNumber}\nYour answer: `);
  isCorrectAnswer(firstAnswer);

  console.log('Correct!');
  currentRandomNumber = randomNumber();

  const secondAnswer = readlineSync.question(`Question: ${currentRandomNumber}\nYour answer: `);
  isCorrectAnswer(secondAnswer);

  console.log('Correct!');
  currentRandomNumber = randomNumber();

  const thirdAnswer = readlineSync.question(`Question: ${currentRandomNumber}\nYour answer: `);
  isCorrectAnswer(thirdAnswer);

  console.log('Correct!');

  return console.log(`Congratulations, ${userName}!`);
};

export default isNumberEven;
