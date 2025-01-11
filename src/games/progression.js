import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};
const generateRound = () => {
  const start = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 10);
  const length = generateRandomNumber(5, 10);
  const progression = generateProgression(start, step, length);
  const hiddenIndex = generateRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
