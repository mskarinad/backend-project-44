#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
const userName = greetUser();
function generateRandomNumber() {       
    return Math.floor(Math.random() * 100) +1;
}
let correctAnswerCount = 0;
let gameOver = false;
console.log (`Answer "yes" if the number is even, otherwise answer "no".`);

while (correctAnswerCount < 3 && !gameOver) {
    const question = generateRandomNumber();
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    console.log (`Question: ${question}`);

    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer; Correct answer was: '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        gameOver = true;
        }  else {  
        console.log(`Correct!`);
        correctAnswerCount += 1;
        }
    }
if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`)
    }