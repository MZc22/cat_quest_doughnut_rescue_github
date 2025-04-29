
let score = 0;
let level = 1;
let problemsPerLevel = 5;
let currentProblem = 0;
let correctAnswer = null;

function generateProblem() {
    const a = Math.floor(Math.random() * 12) + 1;
    const b = Math.floor(Math.random() * 12) + 1;
    const isMultiplication = Math.random() > 0.5;
    let question = '';
    if (isMultiplication) {
        question = `${a} × ${b}`;
        correctAnswer = a * b;
    } else {
        question = `${a * b} ÷ ${a}`;
        correctAnswer = b;
    }
    document.getElementById('question-text').innerText = "What is " + question + "?";
    document.getElementById('feedback').innerText = "";
    document.getElementById('answer').value = "";
}

function submitAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        score++;
        currentProblem++;
        feedback.innerText = "Correct! 🎉";
        document.getElementById('score-box').innerText = "Score: " + score;

        if (currentProblem >= problemsPerLevel) {
            awardBadge();
            level++;
            currentProblem = 0;
            document.getElementById('level-info').innerText = `Level ${level} - ${getZoneName(level)}`;
        }
        setTimeout(generateProblem, 1000);
    } else {
        feedback.innerText = "Oops! Try again.";
    }
}

function getHint() {
    const hint = "Remember your times tables or think about fact families!";
    document.getElementById('feedback').innerText = hint;
}

function awardBadge() {
    const badgeBox = document.getElementById('badge-box');
    const badge = document.createElement('div');
    badge.innerText = `🏅 You completed Level ${level} - ${getZoneName(level)}!`;
    badgeBox.appendChild(badge);
    localStorage.setItem('mathGameScore', score);
}

function getZoneName(level) {
    if (level === 1) return "Kittenville";
    if (level === 2) return "Doughnut Forest";
    return "Cat Castle";
}

function restoreProgress() {
    const savedScore = localStorage.getItem('mathGameScore');
    if (savedScore) {
        score = parseInt(savedScore);
        document.getElementById('score-box').innerText = "Score: " + score;
    }
}

window.onload = function() {
    restoreProgress();
    generateProblem();
};
