import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
    const progression = [];

    for (let i = 0; i < length; i+= 1) {
        progression.push(start + step * i);
    }
    return progression;

}
const generateRound = () => {
    const start = Math.floor(Math.random() * 10) + 1; 
    const step = Math.floor(Math.random() * 10) + 1; 
    const length = Math.floor(Math.random() * 6) + 5; 
    const progression = generateProgression(start, step, length);
  
    const hiddenIndex = Math.floor(Math.random() * length); 
    const correctAnswer = String(progression[hiddenIndex]); 
    progression[hiddenIndex] = '..'; 
  
    const question = progression.join(' '); 
    return [question, correctAnswer];
  };
  
  export default () => runGame(description, generateRound);