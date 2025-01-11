import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
    let x = a;
    let y = b;
  while (y !== 0) {
    [x, y] = [y , x % y];
  }
  return x;
};

const generateRound = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1,100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
