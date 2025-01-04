import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
