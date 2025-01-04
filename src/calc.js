import runGame from './index.js';

const description = 'What is the result of the expression?';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const generateRound = () => {
  const num1 = generateRandomNumber(1, 50);
  const num2 = generateRandomNumber(1, 50);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
