import readlineSync from 'readline-sync';

const gameLogic = (description, task, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  const numberOfRounds = 2;

  for (let i = 0; i <= numberOfRounds; i += 1) {
    const answer = readlineSync.question(`Question: ${task[i]}\nYour answer: `);

    if (answer !== rightAnswer[i]) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer[i]}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
