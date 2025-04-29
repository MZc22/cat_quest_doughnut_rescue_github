
const gameContainer = document.getElementById('game-container');
let score = 0;

function generateProblem() {
    const a = Math.floor(Math.random() * 12) + 1;
    const b = Math.floor(Math.random() * 12) + 1;
    const isMultiplication = Math.random() > 0.5;
    const question = isMultiplication ? `${a} × ${b}` : `${a * b} ÷ ${a}`;
    const correctAnswer = isMultiplication ? a * b : b;

    const userAnswer = prompt("What is " + question + "?");
    if (parseInt(userAnswer) === correctAnswer) {
        alert("Correct! 🎉");
        score++;
    } else {
        alert("Oops! Try again. Hint: " + question + " = " + correctAnswer);
    }

    if (score >= 5) {
        alert("You win! All kittens rescued their doughnuts! 🐱🍩");
    } else {
        generateProblem();
    }
}

generateProblem();
