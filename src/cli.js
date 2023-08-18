import readlineSync from 'readline-sync';

export const greetingUser = () => {
    const userName = readlineSync.question('May i have your name? ');
    console.log('Hello, ' + userName + '!');
};