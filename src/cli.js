import readlineSync from 'readline-sync';

const greetingUser = () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greetingUser;
