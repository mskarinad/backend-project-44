import runGame from "../index.js";
const description = 'Find the greatest common divisor of given numbers.';

const findGcd =(a,b) =>  {
    while (b !== 0) {
        [a,b] = [b, a % b];
    }
    return a;
}
const generateRound = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const question = `${num1} ${num2}`;
    const correctAnswer = String(findGcd(num1, num2));
    return [question, correctAnswer];
  };
  
  export default () => runGame(description, generateRound);
  