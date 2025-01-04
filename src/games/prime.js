import runGame from "../index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answr "no".';

const isPrime = (number) => {
    if (number < 2) 
        return false;
    for (let i = 2; i < Math.sqrt(); i+= 1) {
        if (number % i === 0)
            return false;
    }
    return true;
}
const generateRound = () => {
    const question = Math.floor(Math.random() * 100) + 1; 
    const correctAnswer = isPrime(question) ? 'yes' : 'no'; 
    return [question, correctAnswer];
  };
  
  export default () => runGame(description, generateRound);