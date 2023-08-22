import readlineSync from 'readline-sync';

const gameLogic = (rules, task, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i <= 2; i += 1) {
    const answer = readlineSync.question(`Question: ${task[i]}\nYour answer: `);

    if (answer === rightAnswer[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer[i]}'.`);
      return console.log(`Let's try again, ${userName}`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
