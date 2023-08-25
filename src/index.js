import readlineSync from 'readline-sync';

const gameLogic = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  const numberOfRounds = 3;

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [task, rightAnswer] = generateRound();
    const answer = readlineSync.question(`Question: ${task}\nYour answer: `);

    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
